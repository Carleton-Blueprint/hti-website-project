import { client } from "../contentful";
import { Document } from "@contentful/rich-text-types";

export interface Resource {
    name: string;
    category:
    | "Tips & Tricks"
    | "Scholarship"
    | "Research Opportunity"
    | "Funds"
    | "Education"
    | "Career"
    | "Learning"
    | "Networking"
    | "Other";
    description: Document;
    link: string;
}

export async function getAllResources(): Promise<Resource[]> {
    const entries = await client.getEntries({ content_type: "resources" });

    return entries.items.map((item) => {
        const fields = item.fields as any;

        return {
            name: fields.name,
            category: fields.category,
            description: fields.description,
            link: fields.link,
        } as Resource;
    });
}
