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
  return (
      <div className="story" dangerouslySetInnerHTML={{__html: story.html}} />
  );
}
