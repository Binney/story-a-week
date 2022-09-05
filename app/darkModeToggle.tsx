import { LoaderFunction, useLoaderData, useOutletContext } from "remix"
import { theme } from "./routes/theme";
import { parseCookie } from "./utils";

export const loader: LoaderFunction = async ({ request }) => {
    const cookie = await parseCookie(request, theme);
    return cookie?.mode || 'light';
}

export default function DarkModeToggle() {
    const mode = useLoaderData();
    return (
        <form method="POST" action="/theme">
            <input type="hidden" name="mode" value={mode === 'light' ? 'dark' : 'light'} />
            <input type="hidden" name="redirect" value="/stories"/>
            <button>Dark mode</button>
        </form>
    )
}
