"use client";

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Box,
  Image,
} from "@mantine/core";

const teamMembers = [
  {
    name: "Name1",
    title: "Role",
    imageUrl: "/images/doctor1.jpg",
    bio: "Bio",
  },
  {
    name: "Name2",
    title: "Role",
    imageUrl: "/images/doctor2.jpg",
    bio: "Bio",
  },
  {
    name: "Name3",
    title: "Role",
    imageUrl: "/images/doctor1.jpg",
    bio: "Bio",
  },
  {
    name: "Name4",
    title: "Role",
    imageUrl: "/images/doctor1.jpg",
    bio: "Bio",
  },
  {
    name: "Name4",
    title: "Role",
    imageUrl: "/images/doctor1.jpg",
    bio: "Bio",
  },
  {
    name: "Name4",
    title: "Role",
    imageUrl: "/images/doctor1.jpg",
    bio: "Bio",
  },
  {
    name: "Name4",
    title: "Role",
    imageUrl: "/images/doctor1.jpg",
    bio: "Bio",
  },
];

export function Team() {
  return (
    <Box
      py={80}
      style={{ 
        background: "linear-gradient(180deg, #f8f9fa 0%, #fff 100%)",
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
          Get to Know <span style={{ color: "#FF9966" }}>Our Team</span>
        </Title>

        <SimpleGrid 
          cols={{ base: 1, sm: 2, lg: 3 }} 
          spacing={{ base: 20, sm: 30 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px'
          }}
        >
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              padding={0}
              radius="lg"
              style={{
                backgroundColor: "white",
                border: "none",
                boxShadow: "0 8px 24px rgba(0, 71, 171, 0.08)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                height: 'auto',
                width: '100%',
                maxWidth: '250px',
                flex: '0 0 auto',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 32px rgba(0, 71, 171, 0.12)",
                },
              }}
            >
              <Card.Section>
                <Image
                  src={member.imageUrl}
                  height={160}
                  alt={member.name}
                  fit="cover"
                />
              </Card.Section>

              <div style={{ padding: '6px', marginTop: '1px' }}>
                <Text 
                  ta="center" 
                  fw={600} 
                  size="md"
                  style={{ color: "#0047AB" }}
                >
                  {member.name}
                </Text>
                <Text 
                  ta="center"
                  size="sm"
                  style={{ color: "#0047AB" }}
                  mb={6}
                >
                  {member.title}
                </Text>
                <Text
                  ta="center"
                  size="xs"
                  style={{ 
                    color: "black",
                    lineHeight: 1.4 
                  }}
                >
                  {member.bio}
                </Text>
              </div>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}