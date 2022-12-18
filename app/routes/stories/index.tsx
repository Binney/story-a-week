import { Link, useLoaderData } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";
import { getStories } from "~/stories.server";
import type { Story } from "~/stories.server";
import { formatDate } from "~/utils";

export const loader = () => {
    return getStories();
};

export const meta: MetaFunction = () => {
    return { title: "Stories | Binney's story-a-week" }
};

export default function stories() {
    const stories: Story[] = useLoaderData();
    return (
        <div>
            <h1>All stories</h1>
            <ul>
                {stories.map(story => (
                    <li key={story.slug}>
                        <Link to={"/story/" + story.slug}>{story.title}</Link> | {formatDate(story.date)}
                    </li>
                ))}
            </ul>
        </div>
    )
}
