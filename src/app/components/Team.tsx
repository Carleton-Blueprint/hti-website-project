"use client";

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Button,
  Group,
  Box,
  Image,
} from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from 'react';

const teamMembers = [
  {
    name: "John Doe",
    title: "Executive",
    imageUrl: "/placeholder.jpg",
  },
  {
    name: "Name 2",
    title: "Executive",
    imageUrl: "/placeholder.jpg",
  },
  {
    name: "Name 3",
    title: "Executive",
    imageUrl: "/placeholder.jpg",
  },
  {
    name: "Name 4",
    title: "Executive",
    imageUrl: "/placeholder.jpg",
  },
];

export function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 3 >= teamMembers.length ? 0 : prev + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 3 < 0 ? Math.max(teamMembers.length - 3, 0) : prev - 3
    );
  };

  return (
    <Box
      py={80}
      style={{ 
        backgroundColor: "#FF914D",
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
          Get to Know Our Team
        </Title>

        <Group align="center" justify="center" gap="xl">
          <Button
            onClick={prevSlide}
            variant="subtle"
            size="xl"
            style={{
              color: "#0047AB",
              height: '100%',
              '&:hover': {
                backgroundColor: "rgba(0, 71, 171, 0.1)",
              }
            }}
          >
            <IconChevronLeft size={32} />
          </Button>

          <SimpleGrid 
            cols={{ base: 1, sm: 2, lg: 3 }} 
            spacing={{ base: 20, sm: 30 }}
            style={{ maxWidth: '100%' }}
          >
            {teamMembers.slice(currentIndex, currentIndex + 3).map((member, index) => (
              <Card
                key={index}
                padding="xl"
                radius="lg"
                style={{
                  backgroundColor: "white",
                  border: "none",
                  boxShadow: "0 8px 24px rgba(0, 71, 171, 0.08)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  height: '400px',
                  width: '250px', 
                  maxWidth: '350px', 
                  margin: '0 auto', 
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 32px rgba(0, 71, 171, 0.12)",
                  },
                }}
              >
                <Card.Section style={{ flex: 1 }}>
                  <Image
                    src={member.imageUrl}
                    height="100%"
                    alt={member.name}
                    fit="cover"
                  />

                </Card.Section>

                <Text 
                  ta="center" 
                  fw={600} 
                  size="lg" 
                  mt="md"
                  style={{ color: "#0047AB" }}
                >
                  {member.name}
                </Text>
                <Text 
                  ta="center"
                  style={{ color: "#0047AB" }}
                >
                  {member.title}
                </Text>
              </Card>
            ))}
          </SimpleGrid>

          <Button
            onClick={nextSlide}
            variant="subtle"
            size="xl"
            style={{
              color: "#0047AB",
              height: '100%',
              '&:hover': {
                backgroundColor: "rgba(0, 71, 171, 0.1)",
              }
            }}
          >
            <IconChevronRight size={32} />
          </Button>
        </Group>
      </Container>
    </Box>
  );
}