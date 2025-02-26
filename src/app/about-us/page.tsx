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
} from "@tabler/icons-react";
import Navbar from "../components/Navbar";
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

function AboutHero() {
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
      {/* Background gradient overlays */}
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

      {/* Particle effect background - with fixed values instead of random */}
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

      {/* Decorative elements */}
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

      {/* Animated lines - simplified to just a few horizontal lines */}
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

      {/* Digital circuit pattern */}
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
                    A vibrant community of passionate students at Carleton
                    University dedicated to transforming healthcare through
                    cutting-edge technological solutions.
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

          <Grid.Col span={{ base: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Box
                style={{
                  position: "relative",
                  height: "350px",
                  width: "350px",
                  margin: "0 auto",
                  marginBottom: "60px", // Increased bottom margin to move it up
                  marginTop: "-40px", // Added negative top margin to move it up
                }}
              >
                {/* Outer glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(0, 102, 255, 0.2) 0%, transparent 70%)",
                    filter: "blur(20px)",
                    zIndex: 0,
                  }}
                />

                {/* Single outer ring */}
                <Box
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "280px",
                    height: "280px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    zIndex: 1,
                    overflow: "hidden", // Contain all animations
                  }}
                />

                {/* Inner ring with rotation */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(0, 74, 173, 0.4) 0%, rgba(0, 102, 255, 0.1) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    zIndex: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Center icon with pulse effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 0 30px rgba(0, 74, 173, 0.5)",
                        "0 0 40px rgba(0, 74, 173, 0.7)",
                        "0 0 30px rgba(0, 74, 173, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <ThemeIcon
                      size={120}
                      radius="xl"
                      style={{
                        background:
                          "linear-gradient(135deg, #004AAD 0%, #0066FF 100%)",
                        boxShadow: "0 0 30px rgba(0, 74, 173, 0.5)",
                      }}
                    >
                      <IconHeartHandshake
                        size={70}
                        style={{ color: "white" }}
                        stroke={1.5}
                      />
                    </ThemeIcon>
                  </motion.div>
                </motion.div>

                {/* Orbiting elements - simplified and contained */}
                {[0, 1, 2, 3].map((index) => (
                  <motion.div
                    key={index}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20 - index * 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index,
                    }}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "280px",
                      height: "280px",
                      borderRadius: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 4,
                      overflow: "visible",
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.5,
                      }}
                    >
                      <Box
                        style={{
                          position: "absolute",
                          top: `${index * 90}deg`,
                          left: "50%",
                          width: index % 2 === 0 ? "20px" : "16px",
                          height: index % 2 === 0 ? "20px" : "16px",
                          borderRadius: "50%",
                          background:
                            index % 2 === 0
                              ? "linear-gradient(135deg, #FF914D 0%, #FFB38A 100%)"
                              : "linear-gradient(135deg, #004AAD 0%, #0066FF 100%)",
                          boxShadow:
                            index % 2 === 0
                              ? "0 0 15px rgba(255, 145, 77, 0.5)"
                              : "0 0 15px rgba(0, 74, 173, 0.5)",
                          transform: `rotate(${index * 90}deg) translate(140px) rotate(-${index * 90}deg)`,
                        }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Bottom gradient transition */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "180px",
          background:
            "linear-gradient(to top, white 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.5) 75%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
}

function MissionVision() {
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
              Driving innovation and fostering collaboration in the health tech
              space at Carleton University
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

function CoreValues() {
  const valuesRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      icon: IconBulb,
      title: "Innovation",
      description:
        "Encouraging creativity and bold thinking in health tech solutions that address real-world healthcare challenges.",
    },
    {
      icon: IconUsers,
      title: "Collaboration",
      description:
        "Valuing collective knowledge, teamwork, and inclusivity to create better solutions through diverse perspectives.",
    },
    {
      icon: IconSchool,
      title: "Education",
      description:
        "Prioritizing learning and growth through resources, workshops, and events that expand knowledge in health technology.",
    },
    {
      icon: IconTargetArrow,
      title: "Impact",
      description:
        "Making a tangible difference by developing solutions that enhance patient care and improve healthcare outcomes.",
    },
    {
      icon: IconNetwork,
      title: "Networking",
      description:
        "Connecting like-minded individuals for meaningful professional relationships that foster growth and opportunity.",
    },
    {
      icon: IconHeartHandshake,
      title: "Community",
      description:
        "Building a supportive environment where members feel valued, inspired, and empowered to pursue their health tech interests.",
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
              The principles that guide our community and shape our approach to
              health tech innovation
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

function Audience() {
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
                  Health Tech Innovators serves a diverse community of
                  individuals passionate about leveraging technology to innovate
                  and improve healthcare:
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
                        Health Tech Enthusiasts
                      </Text>
                      <Text style={{ color: "#2D3748" }}>
                        Students interested in exploring the intersection of
                        healthcare and technology, regardless of their academic
                        background.
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
                        Innovators & Entrepreneurs
                      </Text>
                      <Text style={{ color: "#2D3748" }}>
                        Those looking to develop new solutions and ventures in
                        the healthcare technology space.
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
                        Collaborators & Networkers
                      </Text>
                      <Text style={{ color: "#2D3748" }}>
                        Students seeking to connect with like-minded peers and
                        industry professionals for meaningful collaborations and
                        career opportunities.
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
                      {[
                        "Forward-thinking",
                        "Dynamic",
                        "Community-oriented",
                        "Professional",
                        "Approachable",
                        "Inspiring",
                        "Informative",
                        "Inclusive",
                      ].map((trait, index) => (
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
        <AboutHero />
        <MissionVision />
        <div
          style={{
            height: "1px",
            background: "rgba(0, 74, 173, 0.15)",
            margin: "0 100px",
          }}
        ></div>
        <CoreValues />
        <Audience />
      </div>
    </main>
  );
}
