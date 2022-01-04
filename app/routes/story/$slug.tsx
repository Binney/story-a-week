import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import { getStory } from "~/stories";

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.slug, "expected params.slug");
    return getStory(params.slug);
};

export default function StorySlug() {
  const story = useLoaderData();
  console.log(story);
  return (story ?
    <div>
      <div dangerouslySetInnerHTML={{__html: story.html}} />
    </div>
    : <div>
        <h1>404 not found</h1>
    </div>
  );
}
