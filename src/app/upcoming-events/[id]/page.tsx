import { Suspense } from "react";
import events from "../eventData";
import { notFound } from "next/navigation";
import EventPageClient from "./EventPageClient";

type paramsType = {
  params: Promise<{ id: string }>;
};

async function getEvent(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 10));
  return events.find((event) => event.id === id) || null;
}

export default async function EventPage({ params }: paramsType) {
  const resolvedParams = await Promise.resolve(params);
  const event = await getEvent(resolvedParams.id);

  if (!event) {
    notFound();
  }

  return (
    <Suspense fallback={<div>Loading event details...</div>}>
      <EventPageClient event={event} />
    </Suspense>
  );
}

export async function generateMetadata({ params }: paramsType) {
  const resolvedParams = await Promise.resolve(params);
  const event = await getEvent(resolvedParams.id);

  if (!event) {
    return {
      title: "Event Not Found",
      description: "The event you're looking for could not be found.",
    };
  }

  return {
    title: `${event.title} | Healthcare Technology Innovation Club`,
    description: event.description || "Learn more about this exciting event",
  };
}

export async function generateStaticParams() {
  return events.map((event) => ({ id: event.id }));
}
