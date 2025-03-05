"use client";

import { Button, Container, Text, Title } from "@mantine/core";
import Link from "next/link";

export default function EventTest() {
  return (
    <Container mt={100}>
      <Title>Event Navigation Test</Title>
      <Text my={20}>
        Click the links below to test navigation to specific event pages:
      </Text>

      <Button
        component="a"
        href="/upcoming-events/healthcare-innovation-summit"
        color="blue"
        my={10}
        fullWidth
      >
        Healthcare Innovation Summit
      </Button>

      <Button
        component="a"
        href="/upcoming-events/digital-health-workshop"
        color="teal"
        my={10}
        fullWidth
      >
        Digital Health Workshop
      </Button>

      <Button
        component="a"
        href="/upcoming-events/medtech-networking-event"
        color="indigo"
        my={10}
        fullWidth
      >
        MedTech Networking Event
      </Button>

      <Text mt={30}>
        <Link
          href="/upcoming-events"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Back to all events
        </Link>
      </Text>
    </Container>
  );
}
