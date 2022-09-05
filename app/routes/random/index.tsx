import { redirect, useLoaderData } from "remix";
import { getStories, Story } from "~/stories.server";
import { shuffle } from "~/utils";

export const loader = async () => {
    const stories = await getStories();
    return redirect(`/story/${shuffle(stories)[0].slug}`)
};
