"use client";

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Badge,
  Button,
  Group,
  Box,
} from "@mantine/core";
import { IconCalendar, IconClock, IconMapPin } from "@tabler/icons-react";

const events = [
  {
    title: "Healthcare Innovation Summit",
    date: "Feb 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Innovation Hub",
    category: "Conference",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Digital Health Workshop",
    date: "Feb 28, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Tech Center",
    category: "Workshop",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "MedTech Networking Event",
    date: "Mar 10, 2024",
    time: "6:00 PM - 8:30 PM",
    location: "Innovation Lab",
    category: "Networking",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export function LatestEvents() {
  return (
    <Box
      py={80}
      style={{ background: "linear-gradient(180deg, #f8f9fa 0%, #fff 100%)" }}
    >
      <Container size="lg">
        <Title
          order={2}
          size="2.5rem"
          ta="center"
          mb={50}
          style={{ color: "#004AAD" }}
        >
          Upcoming
          <Text span inherit style={{ color: "#FF914D" }}>
            {" "}
            Events
          </Text>
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={30}>
          {events.map((event) => (
            <Card
              key={event.title}
              padding="xl"
              radius="lg"
              style={{
                backgroundColor: "white",
                border: "none",
                boxShadow: "0 8px 24px rgba(0, 74, 173, 0.08)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 32px rgba(0, 74, 173, 0.12)",
                },
              }}
            >
              <div
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <Badge
                  size="lg"
                  mb="md"
                  style={{
                    backgroundColor: "rgba(255, 145, 77, 0.1)",
                    color: "#FF914D",
                    padding: "8px 16px",
                    fontWeight: 600,
                  }}
                >
                  {event.category}
                </Badge>

                <Title order={3} size="h4" mb="xs" style={{ color: "#004AAD" }}>
                  {event.title}
                </Title>

                <Text
                  size="md"
                  mb="lg"
                  style={{ color: "#4A5568", lineHeight: 1.6 }}
                >
                  {event.description}
                </Text>

                <Box mt="auto">
                  <Group gap="lg" mb="xs">
                    <Group gap="xs">
                      <IconCalendar size={18} style={{ color: "#FF914D" }} />
                      <Text size="sm" style={{ color: "#4A5568" }}>
                        {event.date}
                      </Text>
                    </Group>
                    <Group gap="xs">
                      <IconClock size={18} style={{ color: "#FF914D" }} />
                      <Text size="sm" style={{ color: "#4A5568" }}>
                        {event.time}
                      </Text>
                    </Group>
                  </Group>

                  <Group gap="xs" mb="xl">
                    <IconMapPin size={18} style={{ color: "#FF914D" }} />
                    <Text size="sm" style={{ color: "#4A5568" }}>
                      {event.location}
                    </Text>
                  </Group>

                  <Button
                    fullWidth
                    size="md"
                    style={{
                      backgroundColor: "#004AAD",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#003380",
                      },
                    }}
                  >
                    Register Now
                  </Button>
                </Box>
              </div>
            </Card>
          ))}
        </SimpleGrid>

        <Group justify="center" mt={50}>
          <Button
            variant="outline"
            size="lg"
            style={{
              borderColor: "#004AAD",
              color: "#004AAD",
              "&:hover": {
                backgroundColor: "rgba(0, 74, 173, 0.05)",
              },
            }}
          >
            View All Events
          </Button>
        </Group>
      </Container>
    </Box>
  );
}
