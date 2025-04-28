import { client } from "../contentful";
import { Document } from "@contentful/rich-text-types";

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  author?: string;
  category?: string;
  excerpt: string;
  content: Document;
  imageUrl: string;
  slug: string;
};

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const entries = await client.getEntries({ content_type: 'blogPost' });

  return entries.items.map((item: any) => ({
    id: item.fields.id,
    title: item.fields.title,
    date: item.fields.date,
    author: item.fields.author || null,
    category: item.fields.category || null,
    excerpt: item.fields.excerpt,
    content: item.fields.content,
    imageUrl: item.fields.image?.fields?.file?.url || '',
    slug: item.fields.id,
  }));
}

export async function getBlogPostBySlug(slug: string): Promise<any> {
    const entries = await client.getEntries({
      content_type: "blogPost",
      limit: 1,
      "fields.id": slug,
    });
  
    const item = entries.items[0];
    if (!item) return null;
  
    return {
      id: item.fields.id,
      title: item.fields.title,
      date: item.fields.date,
      author: item.fields.author || null,
      category: item.fields.category || null,
      excerpt: item.fields.excerpt,
      content: item.fields.content,
      imageUrl: item.fields.image?.fields?.file?.url || '',
      slug: item.fields.id,
    };
  }
