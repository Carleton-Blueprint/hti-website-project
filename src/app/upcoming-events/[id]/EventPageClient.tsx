"use client";

import {
  Container,
  Title,
  Text,
  Box,
  Group,
  Image,
  Badge,
  Button,
  List,
  ThemeIcon,
  Timeline,
  Accordion,
  Divider,
  SimpleGrid,
  Card,
  Grid,
  Avatar,
} from "@mantine/core";
import {
  IconCalendar,
  IconClock,
  IconMapPin,
  IconUsers,
  IconCheck,
  IconBuildingSkyscraper,
  IconUser,
} from "@tabler/icons-react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import { useRef } from "react";
import { EventType } from "../eventData";

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
            y: [0, 25, 0],
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
    </div>
  );
}

interface EventPageClientProps {
  event: EventType;
}

export default function EventPageClient({ event }: EventPageClientProps) {
  const speakerRef = useRef<HTMLDivElement>(null);
  const agendaRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div style={{ position: "relative", overflow: "hidden" }}>
        <ParallaxBackground />
        <Box py={120} style={{ position: "relative", zIndex: 2 }}>
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                color="blue"
                variant="filled"
                size="lg"
                radius="sm"
                mb="md"
              >
                {event.category}
              </Badge>
              <Title
                order={1}
                size="h1"
                mb="md"
                style={{
                  fontSize: "3.5rem",
                  fontWeight: 900,
                  color: "#102A43",
                }}
              >
                {event.title}
              </Title>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Group mb="xl">
                <Group>
                  <IconCalendar size={20} style={{ color: "#3182CE" }} />
                  <Text size="lg" fw={500} style={{ color: "#333" }}>
                    {event.date}
                  </Text>
                </Group>
                <Group>
                  <IconClock size={20} style={{ color: "#3182CE" }} />
                  <Text size="lg" fw={500} style={{ color: "#333" }}>
                    {event.time}
                  </Text>
                </Group>
                <Group>
                  <IconMapPin size={20} style={{ color: "#3182CE" }} />
                  <Text size="lg" fw={500} style={{ color: "#333" }}>
                    {event.location}
                  </Text>
                </Group>
                <Group>
                  <IconUsers size={20} style={{ color: "#3182CE" }} />
                  <Text size="lg" fw={500} style={{ color: "#333" }}>
                    {event.capacity} Attendees
                  </Text>
                </Group>
              </Group>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ marginBottom: "2rem" }}
            >
              <Image
                src={event.image || "/event-placeholder.jpg"}
                alt={event.title}
                radius="md"
                className="object-cover w-full"
                height={500}
              />
            </motion.div>

            <Grid gutter={40}>
              <Grid.Col span={{ base: 12, md: 8 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Box mb={40}>
                    <Title order={2} mb="md" style={{ color: "#102A43" }}>
                      About This Event
                    </Title>
                    <Text
                      size="lg"
                      style={{ lineHeight: 1.7, color: "#333" }}
                      fw={500}
                    >
                      {event.longDescription || event.description}
                    </Text>
                  </Box>
                </motion.div>

                {event.agenda && event.agenda.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Box mb={40} ref={agendaRef}>
                      <Title order={2} mb="xl" style={{ color: "#102A43" }}>
                        Event Agenda
                      </Title>
                      <Timeline
                        active={-1}
                        bulletSize={24}
                        lineWidth={2}
                        styles={{
                          itemBody: { color: "#333", fontWeight: 500 },
                        }}
                      >
                        {event.agenda.map((item, index) => (
                          <Timeline.Item
                            key={index}
                            bullet={
                              <IconClock
                                size={16}
                                style={{ color: "#3182CE" }}
                              />
                            }
                            title={
                              <Text size="lg" fw={600} mb={5}>
                                {item.title}
                              </Text>
                            }
                          >
                            <Text color="#444" size="sm" mb={4} fw={500}>
                              {item.time}
                            </Text>
                            <Text size="md">{item.description}</Text>
                          </Timeline.Item>
                        ))}
                      </Timeline>
                    </Box>
                  </motion.div>
                )}

                {event.speakers && event.speakers.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Box mb={40} ref={speakerRef}>
                      <Title order={2} mb="xl" style={{ color: "#102A43" }}>
                        Speakers
                      </Title>
                      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                        {event.speakers.map((speaker, index) => (
                          <Card
                            key={index}
                            p="lg"
                            radius="md"
                            withBorder
                            shadow="sm"
                          >
                            <Group justify="flex-start">
                              <Avatar
                                size={60}
                                radius="xl"
                                src={`/speaker-${(index % 5) + 1}.jpg`}
                              />
                              <div>
                                <Text fw={600} mb={5}>
                                  {speaker}
                                </Text>
                                <Text size="sm" c="#3182CE" fw={500}>
                                  {
                                    [
                                      "Professor",
                                      "Industry Expert",
                                      "Researcher",
                                      "Medical Professional",
                                      "Entrepreneur",
                                    ][index % 5]
                                  }
                                </Text>
                              </div>
                            </Group>
                          </Card>
                        ))}
                      </SimpleGrid>
                    </Box>
                  </motion.div>
                )}

                {event.requirements && event.requirements.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Box mb={40}>
                      <Title order={2} mb="md" style={{ color: "#102A43" }}>
                        Requirements
                      </Title>
                      <List
                        spacing="md"
                        size="lg"
                        center
                        styles={{
                          itemWrapper: { color: "#333", fontWeight: 500 },
                        }}
                        icon={
                          <ThemeIcon color="blue" size={24} radius="xl">
                            <IconCheck size={16} />
                          </ThemeIcon>
                        }
                      >
                        {event.requirements.map((req, index) => (
                          <List.Item key={index}>
                            <Text fw={500} style={{ color: "#333" }}>
                              {req}
                            </Text>
                          </List.Item>
                        ))}
                      </List>
                    </Box>
                  </motion.div>
                )}

                {event.faqs && event.faqs.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <Box mb={40} ref={faqRef}>
                      <Title order={2} mb="md" style={{ color: "#102A43" }}>
                        Frequently Asked Questions
                      </Title>
                      <Accordion
                        styles={{
                          control: { fontWeight: 500 },
                          panel: { color: "#333", fontWeight: 500 },
                        }}
                      >
                        {event.faqs.map((faq, index) => (
                          <Accordion.Item key={index} value={`item-${index}`}>
                            <Accordion.Control>
                              <Text fw={600}>{faq.question}</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                              <Text
                                size="md"
                                fw={500}
                                style={{ color: "#333" }}
                              >
                                {faq.answer}
                              </Text>
                            </Accordion.Panel>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    </Box>
                  </motion.div>
                )}
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card
                    p="xl"
                    radius="md"
                    className="glassmorphism"
                    style={{ marginTop: "20px", marginBottom: "60px" }}
                  >
                    <Group justify="space-between" align="center">
                      <div>
                        <Text fw={700} size="xl" style={{ color: "#004AAD" }}>
                          Interested in attending?
                        </Text>
                        <Text size="md" style={{ color: "#2D3748" }}>
                          Register now to secure your spot.
                        </Text>
                      </div>
                      <Button
                        size="lg"
                        radius="md"
                        color="blue"
                        component="a"
                        href={event.registrationLink || "#"}
                        target="_blank"
                      >
                        Register Now
                      </Button>
                    </Group>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card p="xl" radius="md" withBorder shadow="sm" mb="xl">
                    <Title order={3} mb="lg" style={{ color: "#102A43" }}>
                      Event Details
                    </Title>
                    <Box mb="md">
                      <Group mb={10}>
                        <IconCalendar size={20} style={{ color: "#3182CE" }} />
                        <Text fw={600}>Date</Text>
                      </Group>
                      <Text ml={30} fw={500} style={{ color: "#333" }}>
                        {event.date}
                      </Text>
                    </Box>
                    <Divider my="md" />
                    <Box mb="md">
                      <Group mb={10}>
                        <IconClock size={20} style={{ color: "#3182CE" }} />
                        <Text fw={600}>Time</Text>
                      </Group>
                      <Text ml={30} fw={500} style={{ color: "#333" }}>
                        {event.time}
                      </Text>
                    </Box>
                    <Divider my="md" />
                    <Box mb="md">
                      <Group mb={10}>
                        <IconMapPin size={20} style={{ color: "#3182CE" }} />
                        <Text fw={600}>Location</Text>
                      </Group>
                      <Text ml={30} fw={500} style={{ color: "#333" }}>
                        {event.location}
                      </Text>
                    </Box>
                    <Divider my="md" />
                    <Box mb="md">
                      <Group mb={10}>
                        <IconUsers size={20} style={{ color: "#3182CE" }} />
                        <Text fw={600}>Capacity</Text>
                      </Group>
                      <Text ml={30} fw={500} style={{ color: "#333" }}>
                        {event.capacity} Attendees
                      </Text>
                    </Box>
                    <Divider my="md" />
                    <Box mb="md">
                      <Group mb={10}>
                        <IconBuildingSkyscraper
                          size={20}
                          style={{ color: "#3182CE" }}
                        />
                        <Text fw={600}>Organizers</Text>
                      </Group>
                      <Text ml={30} fw={500} style={{ color: "#333" }}>
                        {event.organizers
                          ? event.organizers.join(", ")
                          : "Healthcare Technology Innovation Club"}
                      </Text>
                    </Box>
                    {event.sponsors && event.sponsors.length > 0 && (
                      <>
                        <Divider my="md" />
                        <Box mb="md">
                          <Group mb={10}>
                            <IconUser size={20} style={{ color: "#3182CE" }} />
                            <Text fw={600}>Sponsors</Text>
                          </Group>
                          <Text ml={30} fw={500} style={{ color: "#333" }}>
                            {event.sponsors.join(", ")}
                          </Text>
                        </Box>
                      </>
                    )}
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Card p="xl" radius="md" withBorder shadow="sm">
                    <Title order={3} mb="lg" style={{ color: "#102A43" }}>
                      Quick Navigation
                    </Title>
                    <Box>
                      {event.agenda && event.agenda.length > 0 && (
                        <Button
                          variant="subtle"
                          fullWidth
                          mb="md"
                          onClick={() => scrollToSection(agendaRef)}
                        >
                          View Agenda
                        </Button>
                      )}
                      {event.speakers && event.speakers.length > 0 && (
                        <Button
                          variant="subtle"
                          fullWidth
                          mb="md"
                          onClick={() => scrollToSection(speakerRef)}
                        >
                          View Speakers
                        </Button>
                      )}
                      {event.faqs && event.faqs.length > 0 && (
                        <Button
                          variant="subtle"
                          fullWidth
                          onClick={() => scrollToSection(faqRef)}
                        >
                          View FAQs
                        </Button>
                      )}
                    </Box>
                  </Card>
                </motion.div>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>
      </div>
    </main>
  );
}
