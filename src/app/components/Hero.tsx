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

export default function Hero() {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef as any,
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
        <Box
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background:
              "radial-gradient(circle at 20% 150%, rgba(255, 145, 77, 0.3) 0%, transparent 60%), radial-gradient(circle at 80% -20%, rgba(255, 255, 255, 0.2) 0%, transparent 40%), radial-gradient(circle at 60% 60%, rgba(0, 102, 255, 0.2) 0%, transparent 50%)",
            zIndex: 0,
          }}
        />

        <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
          <Grid align="center" gutter={60}>
            <Grid.Col span={{ base: 12, md: 6 }}>
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
                            background:
                              "linear-gradient(135deg, #FF914D 0%, #FFB38A 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
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

            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ y, opacity }}
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
                  <div className="hero-image">
                    <Image
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                      alt="Health Tech Innovation"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: "24px",
                        position: "relative",
                        zIndex: 1,
                      }}
                      className="glassmorphism"
                    />
                    <div
                      className="glassmorphism"
                      style={{
                        position: "absolute",
                        bottom: "30px",
                        left: "30px",
                        right: "30px",
                        padding: "20px",
                        zIndex: 2,
                        borderRadius: "12px",
                        background: "rgba(0, 74, 173, 0.6)",
                      }}
                    >
                      <Text fw={700} size="xl" style={{ color: "white" }}>
                        Transforming Healthcare
                      </Text>
                      <Text size="md" style={{ color: "white" }}>
                        Innovative solutions for modern healthcare challenges
                      </Text>
                    </div>
                  </div>
                  <Box
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "150%",
                      height: "150%",
                      background:
                        "radial-gradient(circle, rgba(255, 145, 77, 0.1) 0%, transparent 70%)",
                      transform: "translate(-50%, -50%)",
                      zIndex: 0,
                      pointerEvents: "none",
                    }}
                  />
                </Box>
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
          height: "150px",
          background:
            "linear-gradient(to top, white 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.5) 75%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
