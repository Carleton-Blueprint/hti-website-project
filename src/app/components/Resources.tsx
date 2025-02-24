"use client";

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Box,
  Button,
  Group,
} from "@mantine/core";
import { 
  IconBulb, 
  IconSchool, 
  IconMicroscope,
  IconCoin
} from '@tabler/icons-react';

const resources = [
  {
    name: "Tips",
    category: "Tips & Tricks",
    description: "Learn how to write a proposal for healthcare technology projects.",
    link: "https://example.com/grant",
    icon: IconBulb
  },
  {
    name: "Scholarship",
    category: "Scholarship",
    description: "Merit-based scholarship for students pursuing healthcare technology and innovation studies.",
    link: "https://example.com/scholarship",
    icon: IconSchool
  },
  {
    name: "Research Program",
    category: "Research Opportunity",
    description: "10-week summer research program in healthcare technology at leading institutions.",
    link: "https://example.com/summer",
    icon: IconMicroscope
  },
  {
    name: "Scholarships",
    category: "Funds",
    description: "Funding opportunity for student-led healthcare technology projects and startups.",
    link: "https://example.com/fund",
    icon: IconCoin
  },
];

export function Resources() {
  return (
    <Box
      py={80}
      style={{ 
        backgroundColor: "white",
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container size="lg">
        <Title
          order={2}
          size="2.5rem"
          ta="center"
          mb={50}
          style={{ color: "#0047AB" }}
        >
          Resources
        </Title>

        <SimpleGrid 
          cols={{ base: 1, sm: 2 }}
          spacing={{ base: 20, sm: 30 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px'
          }}
        >
          {resources.map((resource, index) => (
            <Card
              key={index}
              padding="xl"
              radius="lg"
              style={{
                backgroundColor: "white",
                border: "none",
                boxShadow: "0 8px 24px rgba(0, 71, 171, 0.08)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                width: '100%',
                maxWidth: '500px',
                flex: '0 0 auto',
                '&:hover': {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 32px rgba(0, 71, 171, 0.12)",
                },
              }}
            >
              <Group align="center" mb="md">
                <resource.icon size={32} style={{ color: "#FF9966" }} />
                <Text 
                  fw={600} 
                  size="xl"
                  style={{ color: "#0047AB" }}
                >
                  {resource.name}
                </Text>
              </Group>
              <Text 
                size="sm"
                mb="md"
                c="dimmed"
              >
                {resource.category}
              </Text>
              <Text mb="xl">
                {resource.description}
              </Text>
              <Button
                component="a"
                href={resource.link}
                target="_blank"
                variant="filled"
                style={{ backgroundColor: "#0047AB" }}
                fullWidth
              >
                Learn More
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
