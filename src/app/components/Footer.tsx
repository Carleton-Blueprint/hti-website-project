"use client";

import { Container, Title, Text, Button, Group, Box } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import SectionSeparator from "./SectionSeparator"; // Import SectionSeparator
import { useRouter } from "next/navigation";

export function Footer() {
  const router = useRouter();
  return (
    <>
      <SectionSeparator
        color="#FF914D"
        glowColor="rgba(255, 145, 77, 0.6)"
        marginBottom={0}
        marginTop={0}
      />
      <Box
        component="footer" // Changed to footer semantic element
        style={{
          background: "linear-gradient(135deg, #004AAD 0%, #002255 100%)",
          padding: "100px 0",
          position: "relative",
          overflow: "hidden",
          paddingTop: "150px", // Kept padding for consistency, adjust if needed
          borderRadius: "0",
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
              onClick={() => router.push("/sign-up")}
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
              onClick={() => router.push("/contact-us")}
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
    </>
  );
}