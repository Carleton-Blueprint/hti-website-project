"use client";

import { Container, Title, Button } from "@mantine/core"; // Add Button import
import Navbar from "../components/Navbar";
import { IconExternalLink } from "@tabler/icons-react"; // Import icon for the button
import { useEffect, useState } from "react";
import { getLinktreeLink } from "@/contentful/queries/linktree";

export default function ContactUs() {
  const [linktreeLink, setLinktreeLink] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLink() {
      try {
        const link = await getLinktreeLink();
        setLinktreeLink(link);
      } catch (error) {
        console.error("Failed to load Linktree link:", error);
      }
    }

    fetchLink();
  }, []);

  if (!linktreeLink) {
    return null; // or return <Loader /> if you want
  }

  return (
    <main
      className="grid-bg"
      style={{
        position: "relative",
        zIndex: 1,
        marginTop: "-80px", // Adjust if Navbar height is different
        paddingTop: "80px", // Adjust if Navbar height is different
        color: "var(--text-primary)",
        minHeight: "100vh", // Ensure it covers the full height
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "var(--text-primary)",
          flexGrow: 1, // Allow content to grow
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />

        <Container
          size="md"
          py="xl"
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", // Center the iframe vertically
            paddingBottom: "80px", // Add padding at the bottom
          }}
        >
          <div style={{ textAlign: "center", width: "100%" }}>
            <Title
              order={1}
              mb="xl"
              style={{ color: "#004AAD", fontSize: "3rem", fontWeight: 800 }}
            >
              Connect With Us
            </Title>
          </div>

          <Button
            component="a"
            href={linktreeLink}
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security best practice for target="_blank"
            size="lg"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            leftSection={<IconExternalLink size={20} />}
            style={{ marginTop: "2rem" }} // Add some space above the button
          >
            Visit our Linktree
          </Button>
        </Container>
      </div>
      {/* Footer can be added here if needed */}
    </main>
  );
}
