import { client } from "../contentful";

export interface SignUpPageContent {
    title: string;
    description: string;
    formLink: string;
}

export async function getSignUpPageContent(): Promise<SignUpPageContent | null> {
    const entries = await client.getEntries({
        content_type: "signUpPage",
        limit: 1,
    });

    if (!entries.items.length) return null;

    const fields = entries.items[0].fields as any;

    return {
        title: fields.title,
        description: fields.description,
        formLink: fields.formLink,
    };
}