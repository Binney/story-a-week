import { Link, MetaFunction, useLoaderData } from "remix";
import { getStories } from "~/stories";
import type { Story } from "~/stories";
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
