import { client } from "../contentful";
import { Document } from '@contentful/rich-text-types';

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  capacity: number;
  registrationLink?: string;
  description: Document;
  longDescription?: Document;
  speakers?: string[];
  isFeatured: boolean;
  image: string;
  agenda?: [{
    time: string;
    title: string;
    description: string;
  }];
  requirements?: string[];
  organizers?: string[];
  sponsors?: string[];
  faqs?: [{
    question: string;
    answer: string;
  }];
}

export function formatDate(iso: string): string {
  const date = new Date(iso);
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function formatTime(iso: string): string {
  const date = new Date(iso);
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(date);
}

export async function getAllEvents(): Promise<Event[]> {
  const entries = await client.getEntries({
    content_type: 'eventType',
  });

  return entries.items.map((item) => {
    const fields = item.fields as any;

    return {
      id: fields.id,
      title: fields.title,
      date: formatDate(fields.date),
      time: formatTime(fields.date),
      location: fields.location,
      category: fields.category,
      capacity: fields.capacity,
      registrationLink: fields.registrationLink,
      description: fields.description as Document,
      longDescription: fields.longDescription as Document | undefined,
      speakers: fields.speakers,
      isFeatured: fields.isFeatured,
      image: fields.image?.fields?.file?.url ? `https:${fields.image.fields.file.url}` : '',
      agenda: fields.agenda,
      requirements: fields.requirements,
      organizers: fields.organizers,
      sponsors: fields.sponsors,
      faqs: fields.faqs,
    } as Event;
  });
}

export async function getLatestEvents(n: number): Promise<Event[]> {
  const entries = await client.getEntries({
    content_type: 'eventType',
    order: '-fields.date' as any,
    limit: n,
  });

  return entries.items.map((item) => {
    const fields = item.fields as any;

    return {
      id: fields.id,
      title: fields.title,
      date: formatDate(fields.date),
      time: formatTime(fields.date),
      location: fields.location,
      category: fields.category,
      capacity: fields.capacity,
      registrationLink: fields.registrationLink,
      description: fields.description as Document,
      longDescription: fields.longDescription as Document | undefined,
      speakers: fields.speakers,
      isFeatured: fields.isFeatured,
      image: fields.image?.fields?.file?.url ? `https:${fields.image.fields.file.url}` : '',
      agenda: fields.agenda,
      requirements: fields.requirements,
      organizers: fields.organizers,
      sponsors: fields.sponsors,
      faqs: fields.faqs,
    } as Event;
  });
}


export async function getEventById(id: string): Promise<Event | null> {
  const entries = await client.getEntries({
    content_type: 'eventType',
    'fields.id': id,
    limit: 1,
  });

  if (!entries.items.length) return null;

  const fields = entries.items[0].fields as any;

  return {
    id: fields.id,
    title: fields.title,
    date: formatDate(fields.date),
    time: formatTime(fields.date),
    location: fields.location,
    category: fields.category,
    capacity: fields.capacity,
    registrationLink: fields.registrationLink,
    description: fields.description as Document,
    longDescription: fields.longDescription as Document | undefined,
    speakers: fields.speakers,
    isFeatured: fields.isFeatured,
    image: fields.image?.fields?.file?.url ? `https:${fields.image.fields.file.url}` : '',
    agenda: fields.agenda,
    requirements: fields.requirements,
    organizers: fields.organizers,
    sponsors: fields.sponsors,
    faqs: fields.faqs,
  };
}
