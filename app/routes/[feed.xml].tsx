import { Feed } from "feed";
import { LoaderFunction } from "@remix-run/node";
import { getStories, getStory } from "~/stories.server";

const domain = "https://story-a-week.netlify.app";

function slugToUrl(slug: string): string {
  return domain + "/story/" + slug;
}

function slugToImageUrl(slug: string): string {
  return domain + "/images/" + slug;
}

async function createRssFeed() {
  const stories = await getStories(10);
  const feed = new Feed({
    title: "Binney's story-a-week",
    description: "Binney writes one story every week",
    id: domain,
    link: domain,
    language: "en",
    image: domain + "/images/towards-a-new-interpretation-of-he.jpg",
    favicon: domain + "/favicon.ico",
    copyright: "All rights reserved " + (new Date()).getFullYear() + ", Sarah Binney",
    updated: stories[0].date,
    author: {
      name: "Sarah Binney"
    }
  });

  for (let story of stories) {
    let content = await getStory(story.slug);
    feed.addItem({
      title: story.title,
      id: slugToUrl(story.slug),
      link: slugToUrl(story.slug),
      content: content.html,
      date: story.date,
      image: slugToImageUrl(story.slug)
    });
  }

  return feed.rss2();
}

export const loader: LoaderFunction = async () => {
  return new Response(await createRssFeed(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "x-content-type-options": "nosniff",
    }
  })
}
