import {
  Link,
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import styles from "~/styles/global.css";

export const meta: MetaFunction = () => {
  return { title: "Story-a-week" };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles
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
        <div>
          Header goes here
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <div>
          Footer goes here
        </div>
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
