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

const Hero = () => {
  return (
    <Box
      pos="relative"
      style={{
        minHeight: "90vh",
        background: "linear-gradient(135deg, #004AAD 0%, #003380 100%)",
        overflow: "hidden",
      }}
      pt={120}
      pb={80}
    >
      {/* Background Pattern */}
      <Box
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background:
            "radial-gradient(circle at 20% 150%, rgba(255, 145, 77, 0.15) 0%, transparent 50%)",
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
                  fw={600}
                  style={{
                    color: "#FF914D",
                    marginBottom: "0.5rem",
                  }}
                >
                  Welcome to Health Tech Innovators
                </Text>
                <Title
                  order={1}
                  size="3.5rem"
                  fw={800}
                  c="white"
                  style={{
                    lineHeight: 1.2,
                  }}
                >
                  Innovating Healthcare Through Technology
                </Title>
              </div>

              <Text size="xl" c="white" style={{ opacity: 0.9 }}>
                Join a vibrant community of passionate innovators dedicated to
                transforming healthcare through cutting-edge technological
                solutions. Together, we&apos;re shaping the future of
                healthcare.
              </Text>

              <Group>
                <Button
                  size="lg"
                  rightSection={<IconArrowRight size={20} />}
                  style={{
                    backgroundColor: "#FF914D",
                    "&:hover": {
                      backgroundColor: "#ff7a1f",
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
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
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
                  top: -20,
                  left: -20,
                  right: 20,
                  bottom: 20,
                  background: "#FF914D",
                  borderRadius: "16px",
                  opacity: 0.1,
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
                  borderRadius: "16px",
                  position: "relative",
                  zIndex: 1,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
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
