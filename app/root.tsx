import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "remix";
import type { MetaFunction } from "remix";

import tailwind from "~/tailwind.css";

export const links = () => [{ rel: "stylesheet", href: tailwind }];

export const meta: MetaFunction = () => {
  return {
    title: "daedalus.to",
    "og:title": "daedalus.to",
    "theme-color": "#f43f5e"
  }
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
      <body className="bg-white dark:bg-dark text-black dark:text-white">
        <Outlet />
        <ScrollRestoration />
        <Scripts />

        <script src="https://kit.fontawesome.com/acf6d580bd.js" crossOrigin="anonymous"></script>
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
