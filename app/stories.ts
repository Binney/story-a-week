import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";
import { compareAsc, compareDesc } from "date-fns";

export type Story = {
    slug: string;
    title: string;
    date: Date;
}

export type StoryMarkdownAttributes = {
    title: string;
    date: string;
};

const storiesPath = path.join(__dirname, "..", "stories");

function isValidStoryAttributes(
    attributes: any
): attributes is StoryMarkdownAttributes {
    return attributes?.title && attributes?.date;
}

export async function getStories() {
    const dir = await fs.readdir(storiesPath);
    const stories = await Promise.all(
        dir.map(async filename => {
            const file = await fs.readFile(
                path.join(storiesPath, filename)
            );
            const { attributes } = parseFrontMatter(
                file.toString()
            );
            invariant(
                isValidStoryAttributes(attributes),
                `${filename} has bad meta data!`
            );
            return {
                slug: filename.replace(/\.md$/, ""),
                title: attributes.title,
                date: new Date(attributes.date),
            };
        })
    );
    return stories.sort((a, b) => compareDesc(a.date, b.date));
}

export async function getStory(slug: string) {
    const filepath = path.join(storiesPath, slug + ".md");
    try {
        const file = await fs.readFile(filepath);
        const { attributes, body } = parseFrontMatter(file.toString());
        invariant(
            isValidStoryAttributes(attributes),
            `Story ${filepath} is missing attributes`
        );
        const html = marked(body);
        return { slug, html, title: attributes.title, date: attributes.date };
    }
    catch (error) {
        throw new Response("Not Found", { status: 404 });
    }
}
