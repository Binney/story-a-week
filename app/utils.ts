import { format } from "date-fns";
import { Cookie } from "remix";

export function wordCount(story: string) {
    return story.split(/\s+/).length;
}

export function formatDate(date: Date) {
    return format(new Date(date), 'do MMM yyyy')
}

export function shuffle(things: Array<any>) {
    return things.sort(() => Math.random() - 0.5);
}

export async function parseCookie(request: Request, cookie: Cookie): Promise<any | null> {
    const cookieHeader = request.headers.get('Cookie');
    return await cookie.parse(cookieHeader);
}
