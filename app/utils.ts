import { format } from "date-fns";

export function wordCount(story: string) {
    return story.split(/\s+/).length;
}

export function formatDate(date: string) {
    return format(new Date(date), 'do MMM yyyy')
}

export function shuffle(things: Array<any>) {
    return things.sort(() => Math.random() - 0.5);
}
