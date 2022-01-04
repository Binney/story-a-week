import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import { Link } from "react-router-dom";

export const meta: MetaFunction = () => {
  return { title: "Story-a-week" };
};

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
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <Link to="/stories">Stories</Link>
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
