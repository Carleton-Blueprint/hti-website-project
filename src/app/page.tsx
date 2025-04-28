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
import CallToAction from "./components/CallToAction";
import SectionSeparator from "./components/SectionSeparator";
import { motion } from "framer-motion";
import { useRef } from "react";

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

function Features() {
  const featuresRef = useRef<HTMLDivElement>(null);

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
              Empowering Student Innovation
            </Title>
            <Text
              size="xl"
              style={{
                color: "#2D3748",
                maxWidth: "800px",
                margin: "1.5rem auto 0",
              }}
            >
              We provide a platform for students to explore cutting-edge trends
              in digital health solutions, medical devices, and AI in healthcare
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

const features = [
  {
    Icon: IconHeartHandshake,
    title: "Healthcare Impact",
    description:
      "Create meaningful change in healthcare through innovative technological solutions and real-world projects.",
  },
  {
    Icon: IconBrain,
    title: "Innovation Hub",
    description:
      "Access cutting-edge resources and collaborate on groundbreaking health tech projects with your peers.",
  },
  {
    Icon: IconUsers,
    title: "Community",
    description:
      "Connect with like-minded individuals passionate about transforming healthcare through technology.",
  },
  {
    Icon: IconDeviceLaptop,
    title: "Hands-on Learning",
    description:
      "Gain practical experience through workshops, hackathons, and mentorship from industry professionals.",
  },
];

function Mission() {
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
              The Health Tech Innovators Club is a vibrant community of students
              committed to advancing healthcare through technology
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
                  Transforming Healthcare Through Student Innovation
                </Text>
                <Text
                  size="md"
                  style={{ color: "#2D3748", lineHeight: 1.7, flex: 1 }}
                >
                  The Health Tech Innovators Club fosters innovation, inspires
                  creativity, and drives progress in the health tech industry.
                  We provide a collaborative platform where members share ideas,
                  connect with professionals, learn about the latest trends, and
                  work on projects that improve healthcare outcomes and enhance
                  patient experiences.
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
                  Leading the Future of Healthcare Technology
                </Text>
                <Text
                  size="md"
                  style={{ color: "#2D3748", lineHeight: 1.7, flex: 1 }}
                >
                  We envision a community of health tech enthusiasts,
                  innovators, and professionals at the forefront of transforming
                  healthcare through technology. Our club empowers members by
                  offering opportunities to engage with industry leaders,
                  collaborate on cutting-edge projects, and influence the future
                  of healthcare.
                </Text>
              </Card>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}

const events = [
  {
    title: "Healthcare Innovation Summit",
    date: "Feb 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Innovation Hub",
    category: "Conference",
    description:
      "Join us for a day of inspiring talks and discussions about the future of healthcare technology.",
  },
  {
    title: "Digital Health Workshop",
    date: "Feb 28, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Tech Center",
    category: "Workshop",
    description:
      "Learn hands-on skills in digital health technologies and their practical applications.",
  },
  {
    title: "MedTech Networking Event",
    date: "Mar 10, 2024",
    time: "6:00 PM - 8:30 PM",
    location: "Innovation Lab",
    category: "Networking",
    description:
      "Connect with fellow healthcare tech enthusiasts and industry professionals.",
  },
];

function LatestEvents() {
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
                      {event.description}
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
        <Features />
        <Container size="lg">
          <SectionSeparator color="#004AAD" glowColor="rgba(0, 74, 173, 0.6)" />
        </Container>
        <Mission />
        <Container size="lg">
          <SectionSeparator color="#004AAD" glowColor="rgba(0, 74, 173, 0.6)" />
        </Container>
        <LatestEvents />
        <CallToAction />
      </div>
    </main>
  );
}
