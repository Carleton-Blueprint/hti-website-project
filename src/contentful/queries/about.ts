import { client } from "../contentful";

export interface AboutUsPage {
    aboutHtiTitle: string;
    ourStoryDescription: string;
    whoWeAreDescription: string;
    whoWeAreOurMissionTitle: string;
    whoWeAreOurMissionDescription: string;
    whoWeAreOurVisionTitle: string;
    whoWeAreOurVisionDescription: string;
    whatWeStandForDescription: string;
    whatWeStandForValue1Title: string;
    whatWeStandForValue1Description: string;
    whatWeStandForValue2Title: string;
    whatWeStandForValue2Description: string;
    whatWeStandForValue3Title: string;
    whatWeStandForValue3Description: string;
    whatWeStandForValue4Title: string;
    whatWeStandForValue4Description: string;
    whatWeStandForValue5Title: string;
    whatWeStandForValue5Description: string;
    whatWeStandForValue6Title: string;
    whatWeStandForValue6Description: string;
    ourCommunityDescription: string;
    ourCommunityBrandPersonalityTraits: string[];
    ourCommunityBox1Title: string;
    ourCommunityBox1Description: string;
    ourCommunityBox2Title: string;
    ourCommunityBox2Description: string;
    ourCommunityBox3Title: string;
    ourCommunityBox3Description: string;
}

export async function getAboutUsPageContent(): Promise<AboutUsPage | null> {
    const response = await client.getEntries({
        content_type: 'aboutUsPage',
        limit: 1,
    });

    if (!response.items.length) { return null };

    const fields = response.items[0].fields as any;

    return {
        aboutHtiTitle: fields.aboutHtiTitle,
        ourStoryDescription: fields.ourStoryDescription,
        whoWeAreDescription: fields.whoWeAreDescription,
        whoWeAreOurMissionTitle: fields.whoWeAreOurMissionTitle,
        whoWeAreOurMissionDescription: fields.whoWeAreOurMissionDescription,
        whoWeAreOurVisionTitle: fields.whoWeAreOurVisionTitle,
        whoWeAreOurVisionDescription: fields.whoWeAreOurVisionDescription,
        whatWeStandForDescription: fields.whatWeStandForDescription,
        whatWeStandForValue1Title: fields.whatWeStandForValue1Title,
        whatWeStandForValue1Description: fields.whatWeStandForValue1Description,
        whatWeStandForValue2Title: fields.whatWeStandForValue2Title,
        whatWeStandForValue2Description: fields.whatWeStandForValue2Description,
        whatWeStandForValue3Title: fields.whatWeStandForValue3Title,
        whatWeStandForValue3Description: fields.whatWeStandForValue3Description,
        whatWeStandForValue4Title: fields.whatWeStandForValue4Title,
        whatWeStandForValue4Description: fields.whatWeStandForValue4Description,
        whatWeStandForValue5Title: fields.whatWeStandForValue5Title,
        whatWeStandForValue5Description: fields.whatWeStandForValue5Description,
        whatWeStandForValue6Title: fields.whatWeStandForValue6Title,
        whatWeStandForValue6Description: fields.whatWeStandForValue6Description,
        ourCommunityDescription: fields.ourCommunityDescription,
        ourCommunityBrandPersonalityTraits: fields.ourCommunityBrandPersonalityTraits,
        ourCommunityBox1Title: fields.ourCommunityBox1Title,
        ourCommunityBox1Description: fields.ourCommunityBox1Description,
        ourCommunityBox2Title: fields.ourCommunityBox2Title,
        ourCommunityBox2Description: fields.ourCommunityBox2Description,
        ourCommunityBox3Title: fields.ourCommunityBox3Title,
        ourCommunityBox3Description: fields.ourCommunityBox3Description,
    };
}