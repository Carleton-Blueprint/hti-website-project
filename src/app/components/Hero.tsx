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

const Hero = () => {
  const router = useRouter();

  return (
    <Box
      pos="relative"
      style={{
      minHeight: "92vh",
      background: "linear-gradient(135deg, #004AAD 0%, #002255 100%)",
      overflow: "hidden",
      }}
      pt={140}
      pb={100}
    >
      <Box
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
            background:
            "radial-gradient(circle at 20% 150%, rgba(255, 145, 77, 0.2) 0%, transparent 60%), radial-gradient(circle at 80% -20%, rgba(255, 255, 255, 0.1) 0%, transparent 40%)",
          zIndex: 0,
        }}
      />

      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <Grid align="center" gutter={40}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              <div>
                <Text
                  size="xl"
                  fw={700}
                  style={{
                  color: "#FF914D",
                  marginBottom: "0.75rem",
                  letterSpacing: "0.5px",
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  Welcome to Health Tech Innovators
                </Text>
                <Title
                  order={1}
                    size="4rem"
                    fw={900}
                    c="white"
                    style={{
                    lineHeight: 1.1,
                    letterSpacing: "-0.5px",
                    textShadow: "0 2px 4px rgba(0,0,0,0.15)",
                    }}
                >
                  Innovating Healthcare Through Technology
                </Title>
              </div>

                <Text size="xl" c="white" style={{ opacity: 0.95, lineHeight: 1.6, maxWidth: "90%" }}>
                Join a vibrant community of passionate innovators dedicated to
                transforming healthcare through cutting-edge technological
                solutions. Together, we&apos;re shaping the future of
                healthcare.
              </Text>

              <Group>
                <Button
                  size="lg"
                  rightSection={<IconArrowRight size={20} />}
                  onClick={() => router.push("/sign-up")}
                    style={{
                    backgroundColor: "#FF914D",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#ff7a1f",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(255, 145, 77, 0.3)",
                    },
                    }}
                >
                  Join Us Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  color="white"
                    style={{
                    borderColor: "white",
                    borderWidth: "2px",
                    color: "white",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                    },
                    }}
                >
                  Learn More
                </Button>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box
              style={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                    top: -25,
                    left: -25,
                    right: 25,
                    bottom: 25,
                    background: "linear-gradient(135deg, #FF914D 0%, #ff7a1f 100%)",
                    borderRadius: "20px",
                    opacity: 0.15,
                  zIndex: 0,
                },
              }}
            >
              <Image
                src="/hero-image.jpg"
                alt="Health Tech Innovation"
                style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "20px",
                    position: "relative",
                    zIndex: 1,
                    boxShadow: "0 24px 48px rgba(0,0,0,0.25)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0 28px 56px rgba(0,0,0,0.3)",
                    },
                }}
              />
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
