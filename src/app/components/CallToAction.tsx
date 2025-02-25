"use client";

import { Container, Title, Text, Button, Group, Box } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

export default function CallToAction() {
  return (
    <div style={{ position: "relative", marginTop: "-40px" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "120px",
          background:
            "linear-gradient(to bottom, rgba(248, 249, 250, 0.9), rgba(248, 249, 250, 0.5) 40%, rgba(248, 249, 250, 0.2) 70%, transparent)",
          zIndex: 2,
          pointerEvents: "none",
          borderRadius: "60px 60px 0 0",
        }}
      />

      <Box
        style={{
          background: "linear-gradient(135deg, #004AAD 0%, #002255 100%)",
          padding: "100px 0",
          position: "relative",
          overflow: "hidden",
          paddingTop: "150px",
          borderRadius: "60px 60px 0 0",
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
              "radial-gradient(circle at 20% 150%, rgba(255, 145, 77, 0.25) 0%, transparent 60%), radial-gradient(circle at 80% -20%, rgba(255, 255, 255, 0.15) 0%, transparent 40%)",
            zIndex: 0,
          }}
        />

        <Container
          size="lg"
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Title
            order={2}
            size="3.5rem"
            fw={800}
            style={{
              color: "white",
              lineHeight: 1.2,
              maxWidth: "800px",
              marginBottom: "2rem",
              letterSpacing: "-0.02em",
            }}
          >
            Ready to Make an Impact in{" "}
            <Text
              span
              inherit
              style={{
                background: "linear-gradient(135deg, #FF914D 0%, #FFB38A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Health Tech?
            </Text>
          </Title>

          <Text
            size="xl"
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              lineHeight: 1.6,
              maxWidth: "600px",
              marginBottom: "3rem",
            }}
          >
            Join our community of innovators and be part of the future of
            healthcare technology. Together, we can make a difference.
          </Text>

          <Group gap="md">
            <Button
              size="xl"
              variant="gradient"
              gradient={{ from: "#FF914D", to: "#ff6b1a" }}
              rightSection={<IconArrowRight size={24} />}
              style={{
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                },
              }}
            >
              Join Now
            </Button>
            <Button
              size="xl"
              variant="outline"
              color="white"
              style={{
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Contact Us
            </Button>
          </Group>
        </Container>
      </Box>
    </div>
  );
}
