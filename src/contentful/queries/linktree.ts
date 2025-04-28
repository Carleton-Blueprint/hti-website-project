import { client } from "../contentful";

export async function getLinktreeLink(): Promise<string> {
    const entries = await client.getEntries({
        content_type: "linktreeLink",
    });

    const fields = entries.items[0].fields as any;

    return fields.link;
}