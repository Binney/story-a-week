import { format } from "date-fns";

export function wordCount(story: string) {
    return story.split(/\s+/).length;
}

export function formatDate(date: Date) {
    return format(new Date(date), 'do MMM yyyy')
}
