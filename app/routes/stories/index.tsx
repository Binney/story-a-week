import { Link, useLoaderData } from "remix";
import { getStories } from "~/stories";
import type { Story } from "~/stories";

export const loader = () => {
    return getStories();
};

export default function stories() {
    const stories: Story[] = useLoaderData();
    console.log(stories);
    return (
        <div>
            <h1>Library</h1>
            <ul>
                {stories.map(story => (
                    <li key={story.slug}>
                        <Link to={"/story/" + story.slug}>{story.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
