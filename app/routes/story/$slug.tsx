import { MetaFunction, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import { getStory } from "~/stories";
import { formatDate } from "~/utils";

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.slug, "expected params.slug");
    return getStory(params.slug);
};

export const meta: MetaFunction = (data) => {
    console.log(data);
    return {
        title: data.data.title + " | Binney's story-a-week",
        "og:title": data.data.title + " | Binney's story-a-week",
        "og:url": "https://story-a-week.netlify.app/story/" + data.data.slug,
        "og:image": "https://story-a-week.netlify.app/images/" + data.data.slug
    }
};

export default function StorySlug() {
    const story = useLoaderData();
    return (
        <>
            <h1>{story.title}</h1>
            <h2>{formatDate(story.date)}</h2>
            <div className="story" dangerouslySetInnerHTML={{ __html: story.html }} />
            <p className="word-count">{story.wordCount} words</p>
        </>
    );
}
