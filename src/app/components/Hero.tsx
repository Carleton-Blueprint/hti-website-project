"use client";

import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Box,
  Grid,
  Image,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionSeparator from "./SectionSeparator";

export default function Hero() {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div style={{ position: "relative" }} ref={heroRef}>
      <Box
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #003A8C 0%, #001F4D 100%)",
          paddingTop: "120px",
          paddingBottom: "180px",
        }}
      >
        {/* Background Effects */}
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
        {/* End Background Effects */}

        <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
          <Grid align="center" gutter={60}>
            <Grid.Col span={{ base: 12, md: 6 }}> {/* Reverted to 6 for text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ opacity }}
              >
                <Stack gap="xl">
                  <div>
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
                        }}
                      >
                        Welcome to Health Tech Innovators
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
                        Innovating Healthcare
                        <Text
                          span
                          inherit
                          style={{
                            color: "#FF914D",
                            textShadow: "none",
                          }}
                        >
                          {" "}
                          Through Technology
                        </Text>
                      </Title>
                    </motion.div>
                  </div>

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
                        fontSize: "1.25rem",
                        maxWidth: "90%",
                        textShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      Join a vibrant community of passionate innovators
                      dedicated to transforming healthcare through cutting-edge
                      technological solutions. Together, we&apos;re shaping the
                      future of healthcare at Carleton University.
                    </Text>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <Group mt="xl">
                      <Button
                        size="xl"
                        rightSection={<IconArrowRight size={20} />}
                        onClick={() => router.push("/sign-up")}
                        style={{
                          backgroundColor: "#FF914D",
                          boxShadow: "0 10px 20px rgba(255, 145, 77, 0.3)",
                          transition: "all 0.3s ease",
                          fontSize: "1.1rem",
                          padding: "0 2rem",
                        }}
                        styles={{
                          root: {
                            "&:hover": {
                              backgroundColor: "#ff7a1f",
                              transform: "translateY(-3px)",
                              boxShadow: "0 15px 25px rgba(255, 145, 77, 0.4)",
                            },
                          },
                        }}
                      >
                        Join Us Now
                      </Button>
                      <Button
                        size="xl"
                        variant="outline"
                        color="white"
                        onClick={() => router.push("/about-us")}
                        style={{
                          borderColor: "rgba(255, 255, 255, 0.5)",
                          borderWidth: "2px",
                          color: "white",
                          transition: "all 0.3s ease",
                          fontSize: "1.1rem",
                          padding: "0 2rem",
                        }}
                        styles={{
                          root: {
                            "&:hover": {
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              borderColor: "white",
                              transform: "translateY(-3px)",
                            },
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    </Group>
                  </motion.div>
                </Stack>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}> {/* Reverted to 6 for image, removed margin */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ y, opacity }}
              >
                {/* Animated Image Panel */}
                <motion.div
                  whileHover={{
                    scale: 1.04, // Slightly increased scale on hover
                    rotate: -1.5, // Slightly increased rotation
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)", // Enhanced shadow
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }} // Adjusted spring physics
                >
                  <Box
                    style={{
                      position: "relative",
                      padding: "10px",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "30px",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
                      overflow: "hidden", // Ensure image radius is clipped
                    }}
                  >
                    <Image
                      src="/images/hero-image.jpg" // Use local image
                      alt="Health Tech Innovators Hero Image"
                      radius="xl"
                      style={{
                        display: "block",
                        width: "100%",
                        height: "auto",
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                      }}
                    />
                  </Box>
                </motion.div>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

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
          color="#004AAD"
          glowColor="rgba(0, 74, 173, 0.6)"
          marginBottom={0}
          marginTop={0}
        />
      </div>
    </div>
  );
}
