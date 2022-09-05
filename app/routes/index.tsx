import { Link, useLoaderData } from "remix";
import { getStories, Story } from "~/stories.server";
import { formatDate } from "~/utils";

export const loader = () => {
  return getStories();
};

export default function Index() {
  const stories: Story[] = useLoaderData();
  return (
    <>
      <h1>Binney's story-a-week</h1>
      <div className="section">
        <h2>Latest</h2>
        <ul>
          {stories.slice(0, 3).map(story => (
            <li key={story.slug}>
              <Link to={"/story/" + story.slug}>{story.title} ({formatDate(story.date)})</Link>
            </li>
          ))}
        </ul>
        <Link to="/stories">See more...</Link>
      </div>
      <div className="section">
        <h2>What is this?</h2>
        <p>I'm taking my inspiration from <a href="https://www.reddit.com/r/songaweek/" rel="noopener noreferrer" target="_blank">r/songaweek</a>, except instead of songs I'm going to write stories. A story can be long or short, can be serious or weird, can planned or just a stream of consciousness. The point is consistency. I just have to keep writing.</p>
      </div>
      <div className="section">
        <h2>Who are you?</h2>
        <p>My name is Binney (she/her). I'm pretty terrible at social media but I am on <a href="https://twitter.com/HYENA_BRAINS" rel="noopener noreferrer" target="_blank">Twitter</a> and <a href="https://github.com/Binney/" rel="noopener noreferrer" target="_blank">Github</a>.</p>
      </div>
    </>
  );
}
