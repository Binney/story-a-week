import { LoaderFunction, useLoaderData, useOutletContext } from "remix"
import { theme } from "./routes/theme";
import { parseCookie } from "./utils";

export default function DarkModeToggle() {
    const data = useLoaderData();
    return (
        <form method="POST" action="/theme">
            <input type="hidden" name="mode" value={data.mode === 'light' ? 'dark' : 'light'} />
            <input type="hidden" name="redirect" value={data.url} />
            <button>Dark mode</button>
        </form>
    )
}
