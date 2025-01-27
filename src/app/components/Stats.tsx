"use client";

import {
  Container,
  Text,
  SimpleGrid,
  Paper,
  Group,
  ThemeIcon,
} from "@mantine/core";
import {
  IconUsers,
  IconCalendarEvent,
  IconBulb,
  IconAward,
} from "@tabler/icons-react";

const stats = [
  {
    Icon: IconUsers,
    title: "500+",
    description: "Active Members",
  },
  {
    Icon: IconCalendarEvent,
    title: "50+",
    description: "Events Per Year",
  },
  {
    Icon: IconBulb,
    title: "100+",
    description: "Projects Launched",
  },
  {
    Icon: IconAward,
    title: "25+",
    description: "Industry Partners",
  },
];

export function Stats() {
  return (
    <Container size="lg" py={80}>
      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 4 }}
        spacing={{ base: "xl", md: 50 }}
      >
        {stats.map((stat) => {
          const Icon = stat.Icon;
          return (
            <Paper
              key={stat.title}
              p="md"
              radius="md"
              style={{
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              <Group>
                <ThemeIcon
                  size={60}
                  radius="md"
                  variant="light"
                  color="orange"
                  style={{ backgroundColor: "#FF914D" }}
                >
                  <Icon size={30} stroke={1.5} />
                </ThemeIcon>

                <div>
                  <Text size="xl" fw={700} style={{ color: "#004AAD" }}>
                    {stat.title}
                  </Text>
                  <Text size="sm" c="dimmed" mt={4}>
                    {stat.description}
                  </Text>
                </div>
              </Group>
            </Paper>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
