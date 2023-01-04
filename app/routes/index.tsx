import { Link, useLoaderData } from "@remix-run/react";
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
        <h2>One Year In: 2022 in numbers</h2>
        <ul>
          <li><span className="emphasis">Total stories:</span> 45</li>
          <li><span className="emphasis">Total unique stories (counting the serialised ones as a unit):</span> 33</li>
          <li><span className="emphasis">Total words:</span> 74,783 (2,161 fewer than Harry Potter and the Philosopher's Stone)</li>
          <li><span className="emphasis">Longest story:</span> The Varangians vs the Goose, at 10,327 words</li>
          <li><span className="emphasis">Most words published in a single week:</span> 4,661 (Half Tourist)</li>
          <li><span className="emphasis">Total characters:</span> 172, including 2 trees, 1 goose, and 1 demonic fire-dog thing</li>
          <li><span className="emphasis">Of whom queer:</span> 9 (specifically, characters whose queerness is confirmed within the story. Not counting several others who my headcanon has as queer but it wasn't confirmed in the text thank you for listening to my ted talk)</li>
          <li><span className="emphasis">Total onscreen deaths:</span> 6, which is fewer than I was expecting, though 5 were dead by the time we got there</li>
          <li><span className="emphasis">Settings (geographical):</span> London (several), Birmingham, Newcastle, several unnamed places in the UK, a French ski resort, Paris, Italy, the lands that today comprise Ukraine, canonically northern Spain but Spain didn't exist in the Stone Age, several unnamed fantasy places, and space (several).</li>
          <li><span className="emphasis">Settings (temporal):</span> 23% in the past, 26% in the present, 29% in the future, and 20% no idea</li>
          <li><span className="emphasis">Genre balance:</span> 36% sci-fi, 30% fantasy, 9% horror, 15% historical (not mutually exclusive). This is way more balanced than I was expecting.</li>
          <li><span className="emphasis">Stories published (elsewhere other than this blog):</span> 0... for now!</li>
          <li><span className="emphasis">Will I do it again in 2023:</span> yes</li>
        </ul>
      </div>
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
        <p>I'm taking my inspiration from <a href="https://www.reddit.com/r/songaweek/">r/songaweek</a>, except instead of songs I'm going to write stories. A story can be long or short, can be serious or weird, can planned or just a stream of consciousness. The point is consistency. I just have to keep writing.</p>
      </div>
      <div className="section">
        <h2>Who are you?</h2>
        <p>My name is Binney (she/her). I'm pretty terrible at social media but I am on <a rel="me" href="https://mastodon.me.uk/@binney" target="_blank">Mastodon</a> and <a href="https://github.com/Binney/" rel="noopener noreferrer" target="_blank">Github</a>.</p>
      </div>
    </>
  );
}
