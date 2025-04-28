import { client } from "../contentful";
import { Document } from "@contentful/rich-text-types";

export interface TeamMember {
    name: string;
    role: string;
    bio: Document;
    specialties?: string[];
    image: string;
}

export async function getAllTeamMembers(): Promise<TeamMember[]> {
    const entries = await client.getEntries({ content_type: "teamMember" });

    return entries.items.map((item) => {
        const fields = item.fields as any;

        return {
            name: fields.name,
            role: fields.role,
            bio: fields.bio,
            specialties: fields.specialties,
            image: fields.image?.fields?.file?.url
                ? `https:${fields.image.fields.file.url}`
                : "",
        } as TeamMember;
    });
}

