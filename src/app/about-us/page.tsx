"use client";

import {
  Container,
  Title,
  Text,
  Box,
  Grid,
  Card,
  Group,
  ThemeIcon,
  SimpleGrid,
} from "@mantine/core";
import {
  IconHeartHandshake,
  IconBulb,
  IconUsers,
  IconSchool,
  IconTargetArrow,
  IconNetwork,
  IconStethoscope,
  IconDna,
  IconMicroscope,
  IconHeartbeat,
  IconBrain,
  IconDeviceLaptop,
  IconRobot,
  IconVaccine,
} from "@tabler/icons-react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import SectionSeparator from "../components/SectionSeparator";
import { useRef, useState, useEffect } from "react";
import { AboutUsPage, getAboutUsPageContent } from "@/contentful/queries/about";

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

function AboutHero({
  ourStoryDescription,
}: {
  ourStoryDescription: string | null;
}) {
  return (
    <Box
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #002D6B 0%, #001A3D 100%)",
        paddingTop: "120px",
        paddingBottom: "120px",
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
            "radial-gradient(circle at 70% 30%, rgba(0, 102, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255, 145, 77, 0.2) 0%, transparent 60%), radial-gradient(circle at 90% 90%, rgba(0, 74, 173, 0.1) 0%, transparent 40%)",
          zIndex: 0,
        }}
      />

      <Box
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity: 0.4,
          zIndex: 0,
        }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            style={{
              position: "absolute",
              width: 4 + (i % 4),
              height: 4 + (i % 4),
              borderRadius: "50%",
              backgroundColor: i % 3 === 0 ? "#FF914D" : "#0066FF",
              top: `${10 + ((i * 4) % 80)}%`,
              left: `${5 + ((i * 5) % 90)}%`,
              opacity: 0.3 + (i % 5) * 0.1,
            }}
            animate={{
              y: [i % 2 === 0 ? -30 : 30, i % 2 === 0 ? 30 : -30],
              x: [i % 2 === 0 ? -20 : 20, i % 2 === 0 ? 20 : -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 15 + (i % 10),
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </Box>

      <Box
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 145, 77, 0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      <Box
        style={{
          position: "absolute",
          bottom: "15%",
          left: "10%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0, 102, 255, 0.08) 0%, transparent 70%)",
          filter: "blur(30px)",
          zIndex: 0,
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.4,
          overflow: "hidden",
        }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              height: "1px",
              width: "100%",
              left: 0,
              top: `${20 + i * 15}%`,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255, 145, 77, 0.3) 50%, transparent 100%)",
              zIndex: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

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

      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <Grid gutter={40} align="center">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Box mb={60}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Text
                    size="xl"
                    fw={600}
                    style={{
                      color: "#FF914D",
                      marginBottom: "0.5rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    Our Story
                  </Text>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <Title
                    order={1}
                    size="5rem"
                    style={{
                      color: "white",
                      lineHeight: 1.1,
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      textShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    About Health Tech{" "}
                    <Text
                      span
                      inherit
                      style={{
                        background:
                          "linear-gradient(135deg, #FF914D 0%, #FFB38A 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "none",
                      }}
                    >
                      Innovators
                    </Text>
                  </Title>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Text
                    size="xl"
                    c="white"
                    style={{
                      opacity: 0.9,
                      lineHeight: 1.7,
                      fontSize: "1.35rem",
                      maxWidth: "90%",
                      margin: "2rem 0 0",
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {ourStoryDescription}
                  </Text>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Box mt={40}>
                    <Group gap={15}>
                      {["Innovation", "Collaboration", "Impact"].map(
                        (value) => (
                          <Box
                            key={value}
                            style={{
                              background: "rgba(255, 255, 255, 0.1)",
                              backdropFilter: "blur(10px)",
                              padding: "8px 16px",
                              borderRadius: "30px",
                              border: "1px solid rgba(255, 255, 255, 0.2)",
                            }}
                          >
                            <Text
                              size="md"
                              fw={500}
                              style={{
                                color: "white",
                                textShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                              }}
                            >
                              {value}
                            </Text>
                          </Box>
                        )
                      )}
                    </Group>
                  </Box>
                </motion.div>
              </Box>
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              style={{
                position: "relative",
                width: "300px",
                height: "300px",
              }}
            >
              {/* Optional: Subtle background glow */}
              <motion.div
                animate={{
                  scale: [1, 1.03, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%)",
                  filter: "blur(25px)",
                  zIndex: 0,
                }}
              />
              {/* Main Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    overflow: "hidden",
                    background: "rgba(255, 255, 255, 0.1)", // Semi-transparent white background
                    backdropFilter: "blur(15px)", // Frosted glass effect
                    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 ), inset 0 0 10px rgba(255, 255, 255, 0.2)", // Outer shadow and inner highlight
                    border: "1px solid rgba(255, 255, 255, 0.18)", // Subtle border
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src="/logo.png"
                    alt="HTI Logo"
                    style={{
                      width: "85%", // Slightly smaller logo inside the circle
                      height: "85%",
                      objectFit: "contain", // Use contain to ensure logo isn't cut off
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
        }}
      >
        <SectionSeparator
          color="#FF914D"
          glowColor="rgba(255, 145, 77, 0.6)"
          marginBottom={0}
          marginTop={0}
        />
      </div>
    </Box>
  );
}

function MissionVision({
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
              Who We Are
            </Text>
            <Title order={2} size="3rem" fw={800} style={{ color: "#004AAD" }}>
              Our Mission & Vision
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

function CoreValues({
  whatWeStandForDescription,
  whatWeStandForValue1Title,
  whatWeStandForValue1Description,
  whatWeStandForValue2Title,
  whatWeStandForValue2Description,
  whatWeStandForValue3Title,
  whatWeStandForValue3Description,
  whatWeStandForValue4Title,
  whatWeStandForValue4Description,
  whatWeStandForValue5Title,
  whatWeStandForValue5Description,
  whatWeStandForValue6Title,
  whatWeStandForValue6Description,
}: {
  whatWeStandForDescription: string;
  whatWeStandForValue1Title: string;
  whatWeStandForValue1Description: string;
  whatWeStandForValue2Title: string;
  whatWeStandForValue2Description: string;
  whatWeStandForValue3Title: string;
  whatWeStandForValue3Description: string;
  whatWeStandForValue4Title: string;
  whatWeStandForValue4Description: string;
  whatWeStandForValue5Title: string;
  whatWeStandForValue5Description: string;
  whatWeStandForValue6Title: string;
  whatWeStandForValue6Description: string;
}) {
  const valuesRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      icon: IconBulb,
      title: whatWeStandForValue1Title,
      description: whatWeStandForValue1Description,
    },
    {
      icon: IconUsers,
      title: whatWeStandForValue2Title,
      description: whatWeStandForValue2Description,
    },
    {
      icon: IconSchool,
      title: whatWeStandForValue3Title,
      description: whatWeStandForValue3Description,
    },
    {
      icon: IconTargetArrow,
      title: whatWeStandForValue4Title,
      description: whatWeStandForValue4Description,
    },
    {
      icon: IconNetwork,
      title: whatWeStandForValue5Title,
      description: whatWeStandForValue5Description,
    },
    {
      icon: IconHeartHandshake,
      title: whatWeStandForValue6Title,
      description: whatWeStandForValue6Description,
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
        paddingTop: "40px",
        background: "none",
      }}
      ref={valuesRef}
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
              What We Stand For
            </Text>
            <Title order={2} size="3rem" fw={800} style={{ color: "#004AAD" }}>
              Our Core Values
            </Title>
            <Text
              size="xl"
              style={{
                color: "#2D3748",
                maxWidth: "800px",
                margin: "1.5rem auto 0",
              }}
            >
              {whatWeStandForDescription}
            </Text>
          </Box>
        </motion.div>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={20}>
          {values.map((value, index) => (
            <motion.div
              key={value.title}
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
                  <value.icon
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
                  {value.title}
                </Text>

                <Text
                  size="md"
                  style={{ color: "#2D3748", lineHeight: 1.6, flex: 1 }}
                >
                  {value.description}
                </Text>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function Audience({
  ourCommunityDescription,
  ourCommunityBox1Title,
  ourCommunityBox1Description,
  ourCommunityBox2Title,
  ourCommunityBox2Description,
  ourCommunityBox3Title,
  ourCommunityBox3Description,
  traits,
}: {
  ourCommunityDescription: string | null;
  ourCommunityBox1Title: string | null;
  ourCommunityBox1Description: string | null;
  ourCommunityBox2Title: string | null;
  ourCommunityBox2Description: string | null;
  ourCommunityBox3Title: string | null;
  ourCommunityBox3Description: string | null;
  traits: string[];
}) {
  return (
    <Box
      component="section"
      py={60}
      style={{
        position: "relative",
        overflow: "visible",
        background: "linear-gradient(135deg, #F5F9FF 0%, #EDF5FF 100%)",
        marginTop: "40px",
        paddingTop: "60px",
        paddingBottom: "80px",
        borderRadius: "0",
      }}
    >
      <Container size="md" style={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Grid gutter={40} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Box>
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
                  Who We Serve
                </Text>
                <Title
                  order={2}
                  size="2.5rem"
                  fw={800}
                  style={{ color: "#004AAD", marginBottom: "1.5rem" }}
                >
                  Our Community
                </Title>
                <Text
                  size="lg"
                  style={{
                    color: "#2D3748",
                    lineHeight: 1.7,
                    marginBottom: "2rem",
                  }}
                >
                  {ourCommunityDescription}
                </Text>

                <Card
                  padding="lg"
                  radius="md"
                  className="glassmorphism"
                  style={{ marginBottom: "1rem" }}
                >
                  <Group align="flex-start">
                    <ThemeIcon
                      size={44}
                      radius="md"
                      style={{
                        background:
                          "linear-gradient(45deg, #FF914D 0%, #FFB38A 100%)",
                        boxShadow: "0 4px 20px rgba(255, 145, 77, 0.15)",
                      }}
                    >
                      <IconUsers
                        size={24}
                        style={{ color: "white" }}
                        stroke={1.5}
                      />
                    </ThemeIcon>
                    <Box>
                      <Text
                        fw={600}
                        size="lg"
                        style={{ color: "#1A365D", marginBottom: "0.5rem" }}
                      >
                        {ourCommunityBox1Title}
                      </Text>
                      <Text style={{ color: "#2D3748" }}>
                        {ourCommunityBox1Description}
                      </Text>
                    </Box>
                  </Group>
                </Card>

                <Card
                  padding="lg"
                  radius="md"
                  className="glassmorphism"
                  style={{ marginBottom: "1rem" }}
                >
                  <Group align="flex-start">
                    <ThemeIcon
                      size={44}
                      radius="md"
                      style={{
                        background:
                          "linear-gradient(45deg, #FF914D 0%, #FFB38A 100%)",
                        boxShadow: "0 4px 20px rgba(255, 145, 77, 0.15)",
                      }}
                    >
                      <IconBulb
                        size={24}
                        style={{ color: "white" }}
                        stroke={1.5}
                      />
                    </ThemeIcon>
                    <Box>
                      <Text
                        fw={600}
                        size="lg"
                        style={{ color: "#1A365D", marginBottom: "0.5rem" }}
                      >
                        {ourCommunityBox2Title}
                      </Text>
                      <Text style={{ color: "#2D3748" }}>
                        {ourCommunityBox2Description}
                      </Text>
                    </Box>
                  </Group>
                </Card>

                <Card padding="lg" radius="md" className="glassmorphism">
                  <Group align="flex-start">
                    <ThemeIcon
                      size={44}
                      radius="md"
                      style={{
                        background:
                          "linear-gradient(45deg, #FF914D 0%, #FFB38A 100%)",
                        boxShadow: "0 4px 20px rgba(255, 145, 77, 0.15)",
                      }}
                    >
                      <IconNetwork
                        size={24}
                        style={{ color: "white" }}
                        stroke={1.5}
                      />
                    </ThemeIcon>
                    <Box>
                      <Text
                        fw={600}
                        size="lg"
                        style={{ color: "#1A365D", marginBottom: "0.5rem" }}
                      >
                        {ourCommunityBox3Title}
                      </Text>
                      <Text style={{ color: "#2D3748" }}>
                        {ourCommunityBox3Description}
                      </Text>
                    </Box>
                  </Group>
                </Card>
              </Box>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  style={{
                    position: "relative",
                    padding: "20px",
                  }}
                >
                  <Box
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(255, 145, 77, 0.2) 0%, rgba(0, 74, 173, 0.2) 100%)",
                      borderRadius: "24px",
                      transform: "rotate(-3deg) scale(1.05)",
                      filter: "blur(20px)",
                      zIndex: 0,
                    }}
                  />
                  <Card
                    padding="xl"
                    radius="lg"
                    className="glassmorphism"
                    style={{
                      position: "relative",
                      zIndex: 1,
                      background: "rgba(255, 255, 255, 0.7)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <Text
                      size="xl"
                      fw={700}
                      style={{
                        color: "#004AAD",
                        marginBottom: "1.5rem",
                        textAlign: "center",
                      }}
                    >
                      Our Brand Personality
                    </Text>
                    <Text
                      size="lg"
                      style={{
                        color: "#2D3748",
                        lineHeight: 1.7,
                        marginBottom: "2rem",
                        textAlign: "center",
                      }}
                    >
                      Health Tech Innovators is characterized by being:
                    </Text>

                    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={15}>
                      {traits.map((trait, index) => (
                        <motion.div
                          key={trait}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 0.1 + index * 0.1,
                          }}
                        >
                          <Card
                            padding="sm"
                            radius="md"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(0, 74, 173, 0.05) 0%, rgba(0, 102, 255, 0.1) 100%)",
                              border: "1px solid rgba(0, 74, 173, 0.1)",
                            }}
                          >
                            <Text
                              fw={600}
                              ta="center"
                              style={{ color: "#1A365D" }}
                            >
                              {trait}
                            </Text>
                          </Card>
                        </motion.div>
                      ))}
                    </SimpleGrid>
                  </Card>
                </Box>
              </motion.div>
            </Grid.Col>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default function AboutUs() {
  const [content, setContent] = useState<AboutUsPage | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        const data = await getAboutUsPageContent();
        setContent(data);
      } catch (error) {
        console.error("Failed to load About Us content:", error);
      }
    }
    fetchContent();
  }, []);

  if (!content) {
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
      }}
    >
      <ParallaxBackground />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <AboutHero ourStoryDescription={content!.ourStoryDescription} />
        <MissionVision
          whoWeAreDescription={content.whoWeAreDescription}
          whoWeAreOurMissionTitle={content.whoWeAreOurMissionTitle}
          whoWeAreOurMissionDescription={content.whoWeAreOurMissionDescription}
          whoWeAreOurVisionTitle={content.whoWeAreOurVisionTitle}
          whoWeAreOurVisionDescription={content.whoWeAreOurVisionDescription}
        />
        <Container size="lg">
          <SectionSeparator color="#004AAD" glowColor="rgba(0, 74, 173, 0.6)" />
        </Container>
        <CoreValues
          whatWeStandForDescription={content.whatWeStandForDescription}
          whatWeStandForValue1Title={content.whatWeStandForValue1Title}
          whatWeStandForValue1Description={
            content.whatWeStandForValue1Description
          }
          whatWeStandForValue2Title={content.whatWeStandForValue2Title}
          whatWeStandForValue2Description={
            content.whatWeStandForValue2Description
          }
          whatWeStandForValue3Title={content.whatWeStandForValue3Title}
          whatWeStandForValue3Description={
            content.whatWeStandForValue3Description
          }
          whatWeStandForValue4Title={content.whatWeStandForValue4Title}
          whatWeStandForValue4Description={
            content.whatWeStandForValue4Description
          }
          whatWeStandForValue5Title={content.whatWeStandForValue5Title}
          whatWeStandForValue5Description={
            content.whatWeStandForValue5Description
          }
          whatWeStandForValue6Title={content.whatWeStandForValue6Title}
          whatWeStandForValue6Description={
            content.whatWeStandForValue6Description
          }
        />

        <Audience
          ourCommunityDescription={content!.ourCommunityDescription}
          ourCommunityBox1Title={content!.ourCommunityBox1Title}
          ourCommunityBox1Description={content!.ourCommunityBox1Description}
          ourCommunityBox2Title={content!.ourCommunityBox2Title}
          ourCommunityBox2Description={content!.ourCommunityBox2Description}
          ourCommunityBox3Title={content!.ourCommunityBox3Title}
          ourCommunityBox3Description={content!.ourCommunityBox3Description}
          traits={content!.ourCommunityBrandPersonalityTraits}
        />
      </div>
    </main>
  );
}
