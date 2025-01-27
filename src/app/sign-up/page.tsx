"use client";

import { Container, Title, Text, Box } from "@mantine/core";
import Navbar from "../components/Navbar";

export default function SignUp() {
  return (
    <main>
      <Navbar />
      <Box
        pt={100}
        pb={60}
        style={{
          background: "#f8f9fa",
          minHeight: "calc(100vh - 60px)",
        }}
      >
        <Container size="lg">
          <Title order={1} ta="center" mb="sm" style={{ color: "#004AAD" }}>
            Join Health Tech Innovators
          </Title>
          <Text
            size="lg"
            ta="center"
            mb={40}
            maw={600}
            mx="auto"
            style={{ color: "#4A5568" }}
          >
            Fill out the form below to become a member and get access to
            exclusive events, resources, and networking opportunities.
          </Text>

          <Box
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              background: "white",
              borderRadius: "16px",
              boxShadow: "0 4px 16px rgba(0, 74, 173, 0.05)",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://forms.google.com"
              style={{
                width: "100%",
                height: "800px",
                border: "none",
              }}
              title="HTI Membership Sign Up Form"
            />
          </Box>
        </Container>
      </Box>
    </main>
  );
}
