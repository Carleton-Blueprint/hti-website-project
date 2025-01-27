"use client";

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Box,
  ThemeIcon,
  Group,
} from "@mantine/core";
import {
  IconHeartHandshake,
  IconBulb,
  IconUsers,
  IconCode,
} from "@tabler/icons-react";

const features = [
  {
    Icon: IconHeartHandshake,
    title: "Healthcare Impact",
    description:
      "Drive meaningful change in healthcare through innovative technological solutions.",
  },
  {
    Icon: IconBulb,
    title: "Innovation Hub",
    description:
      "Access cutting-edge resources and collaborate on groundbreaking health tech projects.",
  },
  {
    Icon: IconUsers,
    title: "Community",
    description:
      "Connect with like-minded individuals passionate about transforming healthcare.",
  },
  {
    Icon: IconCode,
    title: "Hands-on Learning",
    description:
      "Gain practical experience through workshops, hackathons, and real-world projects.",
  },
];

export function Features() {
  return (
    <Box
      component="section"
      py={80}
      style={{
        background: "linear-gradient(180deg, #fff 0%, #f8f9fa 100%)",
      }}
    >
      <Container size="lg">
        <Title
          order={2}
          ta="center"
          size="2.5rem"
          mb={50}
          style={{ color: "#004AAD" }}
        >
          Why Join
          <Text span style={{ color: "#FF914D" }} inherit>
            {" "}
            Health Tech Innovators?
          </Text>
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={30}>
          {features.map((feature) => {
            const Icon = feature.Icon;
            return (
              <Card
                key={feature.title}
                padding="xl"
                radius="lg"
                style={{
                  backgroundColor: "white",
                  border: "none",
                  boxShadow: "0 8px 24px rgba(0, 74, 173, 0.08)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 32px rgba(0, 74, 173, 0.12)",
                  },
                }}
              >
                <Group wrap="nowrap" gap="xl">
                  <ThemeIcon
                    size={64}
                    radius="xl"
                    variant="light"
                    style={{
                      backgroundColor: "rgba(255, 145, 77, 0.1)",
                      color: "#FF914D",
                    }}
                  >
                    <Icon size={32} stroke={1.5} />
                  </ThemeIcon>

                  <div>
                    <Text
                      size="xl"
                      fw={600}
                      mb={8}
                      style={{ color: "#004AAD" }}
                    >
                      {feature.title}
                    </Text>
                    <Text
                      size="md"
                      style={{ color: "#4A5568", lineHeight: 1.6 }}
                    >
                      {feature.description}
                    </Text>
                  </div>
                </Group>
              </Card>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
