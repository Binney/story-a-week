import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import globalStyles from "~/styles/global.css";
import lightStyles from "~/styles/light-theme.css";
import darkStyles from "~/styles/dark-theme.css";
import wordleStyles from '~/styles/wordle.css';
import Header from "./header";
import Footer from "./footer";

export const meta: MetaFunction = () => {
  return { title: "Story-a-week" };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalStyles
    },
    {
      rel: "stylesheet",
      href: lightStyles,
      media: "(prefers-color-scheme: light)"
    },
    {
      rel: "stylesheet",
      href: darkStyles,
      media: "(prefers-color-scheme: dark)"
    },
    {
      rel: "stylesheet",
      href: wordleStyles
    },
    {
      rel: "alternate",
      type: "application/rss+xml",
      title: "Binney's story-a-week RSS Feed",
      href: "/feed.xml"
    }
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <div className="row">
          <div className="container">
            <Outlet />
            <ScrollRestoration />
            <Scripts />
          </div>
        </div>
        <Footer />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
