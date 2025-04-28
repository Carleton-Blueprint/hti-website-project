import { client } from "../contentful";

export type HomePage = {
    title: string;
    description: string;
    whatWeDoTitle: string;
    whatWeDoDescription: string;
    whatWeDoBox1Title: string;
    whatWeDoBox1Description: string;
    whatWeDoBox2Title: string;
    whatWeDoBox2Description: string;
    whatWeDoBox3Title: string;
    whatWeDoBox3Description: string;
    whatWeDoBox4Title: string;
    whatWeDoBox4Description: string;
};

export type MissionVisionFields = {
    whoWeAreDescription: string;
    whoWeAreOurMissionTitle: string;
    whoWeAreOurMissionDescription: string;
    whoWeAreOurVisionTitle: string;
    whoWeAreOurVisionDescription: string;
};

export async function getHomePageContent(): Promise<HomePage | null> {
    const entries = await client.getEntries({
        content_type: "homePage",
    });

    const fields = entries.items[0].fields as any;

    return {
        title: fields.title,
        description: fields.description,
        whatWeDoTitle: fields.whatWeDoTitle,
        whatWeDoDescription: fields.whatWeDoDescription,
        whatWeDoBox1Title: fields.whatWeDoBox1Title,
        whatWeDoBox1Description: fields.whatWeDoBox1Description,
        whatWeDoBox2Title: fields.whatWeDoBox2Title,
        whatWeDoBox2Description: fields.whatWeDoBox2Description,
        whatWeDoBox3Title: fields.whatWeDoBox3Title,
        whatWeDoBox3Description: fields.whatWeDoBox3Description,
        whatWeDoBox4Title: fields.whatWeDoBox4Title,
        whatWeDoBox4Description: fields.whatWeDoBox4Description,
    };
}

export async function getMissionVisionContent(): Promise<MissionVisionFields | null> {
    const entries = await client.getEntries({
        content_type: "aboutUsPage",
    });

    const fields = entries.items[0].fields as any;

    return {
        whoWeAreDescription: fields.whoWeAreDescription,
        whoWeAreOurMissionTitle: fields.whoWeAreOurMissionTitle,
        whoWeAreOurMissionDescription: fields.whoWeAreOurMissionDescription,
        whoWeAreOurVisionTitle: fields.whoWeAreOurVisionTitle,
        whoWeAreOurVisionDescription: fields.whoWeAreOurVisionDescription,
    };
}