"use client";

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Box,
  Image,
  Group,
  Badge,
} from "@mantine/core";
import { useRef } from "react";
import styles from "./styles.module.css";
import { TeamMember, getAllTeamMembers } from "@/contentful/queries/team";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { useState, useEffect } from "react";

const teamMembers = [
  {
    name: "Name1",
    title: "Role",
    imageUrl: "/images/doctor1.jpg",
    bio: "Bio description goes here. This person is passionate about health technology and innovation.",
    specialties: ["AI", "Healthcare"],
  },
  {
    name: "Name2",
    title: "Role",
    imageUrl: "/images/doctor2.jpg",
    bio: "Bio description goes here. This person is passionate about health technology and innovation.",
    specialties: ["Data Science", "Medical Devices"],
  },
  {
    name: "Name3",
    title: "Role",
    imageUrl: "/images/doctor1.jpg",
    bio: "Bio description goes here. This person is passionate about health technology and innovation.",
    specialties: ["Digital Health", "UX Design"],
  },
  {
    name: "Name4",
    title: "Role",
    imageUrl: "/images/doctor1.jpg",
    bio: "Bio description goes here. This person is passionate about health technology and innovation.",
    specialties: ["Telemedicine", "Wearables"],
  },
  {
    name: "Name5",
    title: "Role",
    imageUrl: "/images/doctor1.jpg",
    bio: "Bio description goes here. This person is passionate about health technology and innovation.",
    specialties: ["Health Policy", "Innovation"],
  },
  {
    name: "Name6",
    title: "Role",
    imageUrl: "/images/doctor1.jpg",
    bio: "Bio description goes here. This person is passionate about health technology and innovation.",
    specialties: ["Biotechnology", "Research"],
  },
  {
    name: "Name7",
    title: "Role",
    imageUrl: "/images/doctor1.jpg",
    bio: "Bio description goes here. This person is passionate about health technology and innovation.",
    specialties: ["Health IT", "Entrepreneurship"],
  },
];

function ParallaxBackground() {
  return (
    <div className="parallax-bg">
      <div className="floating-shape shape-1">
        <div style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="floating-shape shape-2">
        <div style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="floating-shape shape-3">
        <div style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="floating-shape shape-4">
        <div style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
}

function TeamHero() {
  return (
    <Box
      component="section"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #003A8C 0%, #001F4D 100%)",
        padding: "120px 0 80px",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background:
            "radial-gradient(circle at 20% 150%, rgba(255, 145, 77, 0.3) 0%, transparent 60%), radial-gradient(circle at 80% -20%, rgba(255, 255, 255, 0.2) 0%, transparent 40%)",
          zIndex: 0,
        }}
      />

      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <div>
          <Box ta="center" mb={40}>
            <Text
              size="lg"
              fw={700}
              style={{
                color: "#FF914D",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Health Tech Innovators
            </Text>
            <Title
              order={1}
              size="4.5rem"
              fw={800}
              style={{
                color: "white",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                textShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
              }}
            >
              Our Team
            </Title>
            <Text
              size="xl"
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Meet the passionate individuals driving innovation and
              collaboration in health technology. Our diverse team brings
              together expertise from healthcare, technology, and beyond.
            </Text>
          </Box>
        </div>
      </Container>

      {}
      <Box
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity: 0.05,
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC4xMjcgMEw4NS44NzMgMEwxNDAgNTQuMTI3TDE0MCA4NS44NzNMODUuODczIDE0MEw1NC4xMjcgMTQwTDAgODUuODczTDAgNTQuMTI3TDU0LjEyNyAwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPg==')",
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />
    </Box>
  );
}

function TeamMembers({ members }: { members: TeamMember[] }) {
  const teamRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      py={80}
      style={{
        background: "linear-gradient(180deg, #f8f9fa 0%, #fff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
      ref={teamRef}
    >
      <Container size="lg">
        <div>
          <Title
            order={2}
            size="2.5rem"
            ta="center"
            mb={20}
            style={{ color: "#004AAD" }}
          >
            Meet the <span style={{ color: "#FF914D" }}>Innovators</span>
          </Title>

          <Text
            ta="center"
            size="lg"
            mb={50}
            style={{
              maxWidth: "800px",
              margin: "0 auto 50px",
              color: "#555",
            }}
          >
            Our team brings together diverse expertise and perspectives to drive
            innovation in health technology. Each member contributes unique
            skills and insights to our community.
          </Text>
        </div>

        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing={{ base: 30, sm: 40 }}
        >
          {members.map((member, index) => (
            <div key={index}>
              <Card
                padding="lg"
                radius="lg"
                style={{
                  backgroundColor: "white",
                  border: "none",
                  boxShadow: "0 8px 24px rgba(0, 71, 171, 0.08)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  position: "relative",
                }}
                className={styles["team-card"]}
              >
                <Box
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "6px",
                    background: "linear-gradient(90deg, #004AAD, #FF914D)",
                  }}
                />

                <Box style={{ textAlign: "center", marginBottom: "1rem" }}>
                  <Box
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      margin: "0 auto 1rem",
                      border: "4px solid #f0f0f0",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      className={styles["team-card-img"]}
                    />
                  </Box>

                  <Text
                    fw={700}
                    size="xl"
                    style={{ color: "#004AAD", marginBottom: "0.25rem" }}
                  >
                    {member.name}
                  </Text>

                  <Text
                    size="md"
                    style={{
                      color: "#FF914D",
                      fontWeight: 600,
                      marginBottom: "1rem",
                    }}
                  >
                    {member.role}
                  </Text>
                </Box>

                <Text
                  size="sm"
                  style={{
                    color: "#555",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                    flex: 1,
                  }}
                >
                  {documentToPlainTextString(member.bio)}
                </Text>

                <Group gap="xs" style={{ flexWrap: "wrap" }}>
                  {member.specialties.map((specialty, i) => (
                    <Badge
                      key={i}
                      color="blue"
                      variant="light"
                      style={{
                        backgroundColor: "rgba(0, 74, 173, 0.1)",
                        color: "#004AAD",
                      }}
                    >
                      {specialty}
                    </Badge>
                  ))}
                </Group>
              </Card>
            </div>
          ))}
        </SimpleGrid>
      </Container>

      {}
      <Box
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity: 0.4,
          backgroundImage:
            "linear-gradient(rgba(0, 74, 173, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 74, 173, 0.05) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
}

export function Team() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      const data = await getAllTeamMembers();
      setTeamMembers(data);
    };

    fetchResources();
  }, []);

  return (
    <>
      <ParallaxBackground />
      <TeamHero />
      <TeamMembers members={teamMembers} />
    </>
  );
}
