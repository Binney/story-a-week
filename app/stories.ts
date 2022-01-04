import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";

export type Story = {
    slug: string;
    title: string;
}

export type StoryMarkdownAttributes = {
    title: string;
};

const storiesPath = path.join(__dirname, "..", "stories");

function isValidStoryAttributes(
    attributes: any
): attributes is StoryMarkdownAttributes {
    return attributes?.title;
}

export async function getStories() {
    console.log("Getting stories");
    console.log(storiesPath);
    const dir = await fs.readdir(storiesPath);
    console.log(dir);
    return Promise.all(
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
                title: attributes.title
            };
        })
    );
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
        return { slug, html, title: attributes.title };
    }
    catch (error) {
        throw new Response("Not Found", { status: 404 });
    }
}
