"use client";

import {
  Container,
  Title,
  Text,
  Group,
  Box,
  SimpleGrid,
  Grid,
  Card,
  Badge,
  ThemeIcon,
} from "@mantine/core";
import {
  IconHeartHandshake,
  IconBrain,
  IconDeviceLaptop,
  IconUsers,
  IconCalendar,
  IconClock,
  IconMapPin,
} from "@tabler/icons-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionSeparator from "./components/SectionSeparator";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  MissionVisionFields,
  HomePage,
  getMissionVisionContent,
  getHomePageContent,
} from "@/contentful/queries/home";
import { Event, getLatestEvents } from "@/contentful/queries/event"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

function ParallaxBackground() {
  return (
    <div className="parallax-bg">
      <div className="floating-shape shape-1">
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="floating-shape shape-2">
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="floating-shape shape-3">
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, 25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="floating-shape shape-4">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}

function Features({
  whatWeDoTitle,
  whatWeDoDescription,
  whatWeDoBox1Title,
  whatWeDoBox1Description,
  whatWeDoBox2Title,
  whatWeDoBox2Description,
  whatWeDoBox3Title,
  whatWeDoBox3Description,
  whatWeDoBox4Title,
  whatWeDoBox4Description,
}: {
  whatWeDoTitle: string;
  whatWeDoDescription: string;
  whatWeDoBox1Title: string;
  whatWeDoBox1Description: string;
  whatWeDoBox2Title: string;
  whatWeDoBox2Description: string;
  whatWeDoBox3Title: string;
  whatWeDoBox3Description: string;
  whatWeDoBox4Title: string;
  whatWeDoBox4Description: string;
}) {
  const featuresRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      Icon: IconHeartHandshake,
      title: whatWeDoBox1Title,
      description: whatWeDoBox1Description
    },
    {
      Icon: IconBrain,
      title: whatWeDoBox2Title,
      description: whatWeDoBox2Description
    },
    {
      Icon: IconUsers,
      title: whatWeDoBox3Title,
      description:whatWeDoBox3Description,
    },
    {
      Icon: IconDeviceLaptop,
      title: whatWeDoBox4Title,
      description: whatWeDoBox4Description,
    },
  ];

  return (
    <Box
      component="section"
      py={60}
      style={{
        position: "relative",
        overflow: "visible",
        marginTop: "0",
        paddingTop: "80px",
        background: "none",
      }}
      ref={featuresRef}
    >
      <Container size="md" style={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
              What We Do
            </Text>
            <Title order={2} size="3rem" fw={800} style={{ color: "#004AAD" }}>
              {whatWeDoTitle}
            </Title>
            <Text
              size="xl"
              style={{
                color: "#2D3748",
                maxWidth: "800px",
                margin: "1.5rem auto 0",
              }}
            >
              {whatWeDoDescription}
            </Text>
          </Box>
        </motion.div>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={20}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <Card
                padding={20}
                radius="md"
                className="glassmorphism"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <ThemeIcon
                  size={56}
                  radius="md"
                  style={{
                    background:
                      "linear-gradient(45deg, #E6F3FF 0%, #CCE7FF 100%)",
                    boxShadow: "0 4px 20px rgba(0, 74, 173, 0.15)",
                    marginBottom: "1.5rem",
                    transition: "all 0.3s ease",
                  }}
                >
                  <feature.Icon
                    size={28}
                    stroke={1.5}
                    style={{
                      color: "#004AAD",
                      filter: "drop-shadow(0 2px 4px rgba(0, 74, 173, 0.2))",
                    }}
                  />
                </ThemeIcon>

                <Text
                  size="xl"
                  fw={600}
                  style={{ color: "#1A365D", marginBottom: "1rem" }}
                >
                  {feature.title}
                </Text>

                <Text
                  size="md"
                  style={{ color: "#2D3748", lineHeight: 1.6, flex: 1 }}
                >
                  {feature.description}
                </Text>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function Mission({
  whoWeAreDescription,
  whoWeAreOurMissionTitle,
  whoWeAreOurMissionDescription,
  whoWeAreOurVisionTitle,
  whoWeAreOurVisionDescription,
}: {
  whoWeAreDescription: string;
  whoWeAreOurMissionTitle: string;
  whoWeAreOurMissionDescription: string;
  whoWeAreOurVisionTitle: string;
  whoWeAreOurVisionDescription: string;
}) {
  const missionRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      component="section"
      py={60}
      style={{
        position: "relative",
        overflow: "visible",
        background: "none",
        marginTop: "0px",
        paddingTop: "40px",
        borderRadius: "0",
      }}
      ref={missionRef}
    >
      <Container size="md" style={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
              About Us
            </Text>
            <Title order={2} size="3rem" fw={800} style={{ color: "#004AAD" }}>
              Innovating at Carleton University
            </Title>
            <Text
              size="xl"
              style={{
                color: "#2D3748",
                maxWidth: "800px",
                margin: "1.5rem auto 0",
              }}
            >
              {whoWeAreDescription}
            </Text>
          </Box>
        </motion.div>

        <Grid gutter={30}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                padding="xl"
                radius="md"
                className="glassmorphism"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
              >
                <Box
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "4px",
                    height: "100%",
                    background: "linear-gradient(to bottom, #004AAD, #0066FF)",
                    boxShadow: "0 0 20px rgba(0, 74, 173, 0.3)",
                  }}
                />
                <Text
                  size="lg"
                  fw={700}
                  style={{
                    color: "#004AAD",
                    marginBottom: "1rem",
                  }}
                >
                  Our Mission
                </Text>
                <Text
                  size="xl"
                  fw={500}
                  style={{
                    color: "#1A365D",
                    marginBottom: "1.5rem",
                    lineHeight: 1.4,
                  }}
                >
                  {whoWeAreOurMissionTitle}
                </Text>
                <Text
                  size="md"
                  style={{ color: "#2D3748", lineHeight: 1.7, flex: 1 }}
                >
                  {whoWeAreOurMissionDescription}
                </Text>
              </Card>
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card
                padding="xl"
                radius="md"
                className="glassmorphism"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
              >
                <Box
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "4px",
                    height: "100%",
                    background: "linear-gradient(to bottom, #FF914D, #FFB38A)",
                  }}
                />
                <Text
                  size="lg"
                  fw={700}
                  style={{
                    color: "#FF914D",
                    marginBottom: "1rem",
                  }}
                >
                  Our Vision
                </Text>
                <Text
                  size="xl"
                  fw={500}
                  style={{
                    color: "#1A365D",
                    marginBottom: "1.5rem",
                    lineHeight: 1.4,
                  }}
                >
                  {whoWeAreOurVisionTitle}
                </Text>
                <Text
                  size="md"
                  style={{ color: "#2D3748", lineHeight: 1.7, flex: 1 }}
                >
                  {whoWeAreOurVisionDescription}
                </Text>
              </Card>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}

function LatestEvents({ events }: {events : Event[]}) {
  const eventsRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      component="section"
      py={60}
      style={{
        position: "relative",
        overflow: "visible",
        background: "none",
        marginTop: "0px",
        paddingTop: "40px",
        marginBottom: "0px",
        borderRadius: "0",
      }}
      ref={eventsRef}
    >
      <Container size="md" style={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
              Get Involved
            </Text>
            <Title order={2} size="3rem" fw={800} style={{ color: "#004AAD" }}>
              Upcoming Events at Carleton
            </Title>
            <Text
              size="xl"
              style={{
                color: "#2D3748",
                maxWidth: "800px",
                margin: "1.5rem auto 0",
              }}
            >
              Join us for workshops, networking events, and collaborative
              projects
            </Text>
          </Box>
        </motion.div>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={20}>
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <Card
                padding="lg"
                radius="md"
                className="glassmorphism"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
              >
                <Box
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(to right, #004AAD, #0066FF)",
                    boxShadow: "0 0 20px rgba(0, 74, 173, 0.3)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Badge
                      size="lg"
                      mb="md"
                      style={{
                        backgroundColor: "rgba(255, 145, 77, 0.1)",
                        color: "#FF914D",
                        padding: "8px 16px",
                        fontWeight: 600,
                        alignSelf: "flex-start",
                      }}
                    >
                      {event.category}
                    </Badge>

                    <Text
                      size="xl"
                      fw={600}
                      style={{ color: "#1A365D", marginBottom: "1rem" }}
                    >
                      {event.title}
                    </Text>

                    <Text
                      size="md"
                      style={{
                        color: "#2D3748",
                        lineHeight: 1.6,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {documentToPlainTextString(event.description)}
                    </Text>
                  </div>

                  <Box>
                    <Group gap="xs" mb="xs">
                      <IconCalendar size={20} style={{ color: "#004AAD" }} />
                      <Text size="sm" fw={500} style={{ color: "#2D3748" }}>
                        {event.date}
                      </Text>
                    </Group>

                    <Group gap="xs" mb="xs">
                      <IconClock size={20} style={{ color: "#004AAD" }} />
                      <Text size="sm" fw={500} style={{ color: "#2D3748" }}>
                        {event.time}
                      </Text>
                    </Group>

                    <Group gap="xs">
                      <IconMapPin size={20} style={{ color: "#004AAD" }} />
                      <Text size="sm" fw={500} style={{ color: "#2D3748" }}>
                        {event.location}
                      </Text>
                    </Group>
                  </Box>
                </div>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default function Home() {
  const [missionVision, setMissionVision] = useState<MissionVisionFields | null>(null);
  const [homeContent, setHomeContent] = useState<HomePage | null>(null);
  const [latestEvents, setLatestEvents] = useState<Event[] | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        const data = await getMissionVisionContent();
        const homeData = await getHomePageContent();
        const eventData = await getLatestEvents(3);

        setMissionVision(data);
        setHomeContent(homeData);
        setLatestEvents(eventData);
      } catch (error) {
        console.error("Failed to load Mission and Vision content:", error);
      }
    }
    fetchContent();
  }, []);

  if (!missionVision || !homeContent || !latestEvents) {
    return null;
  }

  return (
    <main
      className="grid-bg"
      style={{
        position: "relative",
        zIndex: 1,
        marginTop: "-80px",
        paddingTop: "80px",
        color: "var(--text-primary)",
      }}
    >
      <ParallaxBackground />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "var(--text-primary)",
        }}
      >
        <Navbar />
        <Hero />
        <Features
          whatWeDoTitle={homeContent.whatWeDoTitle}
          whatWeDoDescription={homeContent.whatWeDoDescription}
          whatWeDoBox1Title={homeContent.whatWeDoBox1Title}
          whatWeDoBox1Description={homeContent.whatWeDoBox1Description}
          whatWeDoBox2Title={homeContent.whatWeDoBox2Title}
          whatWeDoBox2Description={homeContent.whatWeDoBox2Description}
          whatWeDoBox3Title={homeContent.whatWeDoBox3Title}
          whatWeDoBox3Description={homeContent.whatWeDoBox3Description}
          whatWeDoBox4Title={homeContent.whatWeDoBox4Title}
          whatWeDoBox4Description={homeContent.whatWeDoBox4Description}
        />
        <Container size="lg">
          <SectionSeparator color="#004AAD" glowColor="rgba(0, 74, 173, 0.6)" />
        </Container>
        <Mission
          whoWeAreDescription={missionVision.whoWeAreDescription}
          whoWeAreOurMissionTitle={missionVision.whoWeAreOurMissionTitle}
          whoWeAreOurMissionDescription={
            missionVision.whoWeAreOurMissionDescription
          }
          whoWeAreOurVisionTitle={missionVision.whoWeAreOurVisionTitle}
          whoWeAreOurVisionDescription={
            missionVision.whoWeAreOurVisionDescription
          }
        />
        <Container size="lg">
          <SectionSeparator color="#004AAD" glowColor="rgba(0, 74, 173, 0.6)" />
        </Container>
        <LatestEvents events={latestEvents} />
      </div>
    </main>
  );
}
