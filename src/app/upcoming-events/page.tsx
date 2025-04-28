"use client";

import {
  Container,
  Title,
  Text,
  Box,
  Group,
  Card,
  Grid,
  Badge,
  Button,
  SimpleGrid,
  Select,
  TextInput,
} from "@mantine/core";
import {
  IconCalendar,
  IconClock,
  IconMapPin,
  IconSearch,
  IconFilter,
  IconUsers,
} from "@tabler/icons-react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useRef } from "react";
import events from "./eventData";
import SectionSeparator from "../components/SectionSeparator";

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

function EventsHero() {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
              Upcoming Events
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
              Discover workshops, networking opportunities, and collaborative
              projects that will help you grow in the field of healthcare
              technology
            </Text>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

function EventFilters() {
  const eventsFilterRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      component="section"
      py={40}
      style={{
        position: "relative",
        background: "none",
      }}
      ref={eventsFilterRef}
    >
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card
            p="xl"
            radius="md"
            className="glassmorphism"
            style={{ marginTop: "-60px" }}
          >
            <Grid align="center">
              <Grid.Col span={{ base: 12, md: 5 }}>
                <TextInput
                  placeholder="Search events..."
                  leftSection={
                    <IconSearch size={16} style={{ color: "#004AAD" }} />
                  }
                  size="md"
                  style={{ width: "100%" }}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 7 }}>
                <Group gap="md" grow>
                  <Select
                    placeholder="Event Type"
                    leftSection={
                      <IconFilter size={16} style={{ color: "#004AAD" }} />
                    }
                    data={[
                      { value: "all", label: "All Types" },
                      { value: "workshop", label: "Workshops" },
                      { value: "conference", label: "Conferences" },
                      { value: "networking", label: "Networking" },
                      { value: "hackathon", label: "Hackathons" },
                    ]}
                    defaultValue="all"
                    classNames={{
                      dropdown: "bg-white border border-gray-200 shadow-md",
                      input: "text-black font-medium",
                      option:
                        "text-black font-medium hover:bg-blue-50 data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-700 data-[selected=true]:font-semibold",
                      label: "text-black",
                    }}
                  />
                  <Select
                    placeholder="Time Frame"
                    leftSection={
                      <IconCalendar size={16} style={{ color: "#004AAD" }} />
                    }
                    data={[
                      { value: "all", label: "All Time" },
                      { value: "upcoming", label: "Upcoming" },
                      { value: "this-month", label: "This Month" },
                      { value: "next-month", label: "Next Month" },
                    ]}
                    defaultValue="upcoming"
                    classNames={{
                      dropdown: "bg-white border border-gray-200 shadow-md",
                      input: "text-black font-medium",
                      option:
                        "text-black font-medium hover:bg-blue-50 data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-700 data-[selected=true]:font-semibold",
                      label: "text-black",
                    }}
                  />
                </Group>
              </Grid.Col>
            </Grid>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
}

const upcomingEvents = events;

function FeaturedEvents() {
  return (
    <Box
      component="section"
      py={60}
      style={{ position: "relative", background: "none" }}
    >
      <Container size="lg">
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
              Don&apos;t Miss
            </Text>
            <Title order={2} size="3rem" fw={800} style={{ color: "#004AAD" }}>
              Featured Events
            </Title>
            <Text
              size="xl"
              style={{
                color: "#2D3748",
                maxWidth: "800px",
                margin: "1rem auto 0",
              }}
            >
              Highlights from our upcoming calendar that you won&apos;t want to
              miss
            </Text>
          </Box>
        </motion.div>

        <Grid gutter={30}>
          {upcomingEvents
            .filter((event) => event.isFeatured)
            .map((event, index) => (
              <Grid.Col key={event.id} span={{ base: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Card
                    padding="xl"
                    radius="md"
                    className="glassmorphism"
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Box
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "5px",
                        background:
                          "linear-gradient(to right, #004AAD, #0066FF)",
                      }}
                    />
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
                    <Title
                      order={3}
                      size="xl"
                      mb="md"
                      style={{ color: "#1A365D" }}
                    >
                      {event.title}
                    </Title>
                    <Text size="md" style={{ color: "#2D3748", flex: 1 }}>
                      {event.description}
                    </Text>

                    <Box mt="xl">
                      <Group gap="xs" mb="xs">
                        <IconCalendar size={18} style={{ color: "#004AAD" }} />
                        <Text style={{ color: "#2D3748" }}>{event.date}</Text>
                      </Group>
                      <Group gap="xs" mb="xs">
                        <IconClock size={18} style={{ color: "#004AAD" }} />
                        <Text style={{ color: "#2D3748" }}>{event.time}</Text>
                      </Group>
                      <Group gap="xs" mb="xs">
                        <IconMapPin size={18} style={{ color: "#004AAD" }} />
                        <Text style={{ color: "#2D3748" }}>
                          {event.location}
                        </Text>
                      </Group>
                      {event.capacity && (
                        <Group gap="xs" mb="md">
                          <IconUsers size={18} style={{ color: "#004AAD" }} />
                          <Text style={{ color: "#2D3748" }}>
                            Capacity: {event.capacity} attendees
                          </Text>
                        </Group>
                      )}

                      <Button
                        component="a"
                        href={`/upcoming-events/${encodeURIComponent(event.id)}`}
                        fullWidth
                        mt="md"
                        variant="gradient"
                        gradient={{ from: "#004AAD", to: "#0066FF" }}
                        style={{
                          transition: "all 0.3s ease",
                        }}
                      >
                        Register Now
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Grid.Col>
            ))}
        </Grid>
      </Container>
    </Box>
  );
}

function AllEvents() {
  return (
    <Box
      component="section"
      py={60}
      style={{ position: "relative", background: "none" }}
    >
      <Container size="lg">
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
              Calendar
            </Text>
            <Title order={2} size="3rem" fw={800} style={{ color: "#004AAD" }}>
              Upcoming Events
            </Title>
            <Text
              size="xl"
              style={{
                color: "#2D3748",
                maxWidth: "800px",
                margin: "1rem auto 0",
              }}
            >
              Browse our complete list of upcoming events and activities
            </Text>
          </Box>
        </motion.div>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={20}>
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
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
                      {event.description.substring(0, 120)}
                      {event.description.length > 120 ? "..." : ""}
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

                    <Group gap="xs" mb="md">
                      <IconMapPin size={20} style={{ color: "#004AAD" }} />
                      <Text size="sm" fw={500} style={{ color: "#2D3748" }}>
                        {event.location}
                      </Text>
                    </Group>

                    <Button
                      component="a"
                      href={`/upcoming-events/${encodeURIComponent(event.id)}`}
                      fullWidth
                      variant="light"
                      color="blue"
                      style={{
                        marginTop: "1rem",
                        transition: "all 0.3s ease",
                        fontWeight: 600,
                      }}
                    >
                      View Details
                    </Button>
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

export default function UpcomingEvents() {
  return (
    <main
      className="grid-bg"
      style={{
        position: "relative",
        zIndex: 1,
        marginTop: "-80px",
        paddingTop: "80px",
      }}
    >
      <ParallaxBackground />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <EventsHero />
        <EventFilters />
        <FeaturedEvents />
        <Container size="lg">
          <SectionSeparator color="#004AAD" glowColor="rgba(0, 74, 173, 0.6)" />
        </Container>
        <AllEvents />
      </div>
    </main>
  );
}
