"use client";

import {
  Container,
  Title,
  Text,
  Card,
  Box,
  Button,
  Group,
} from "@mantine/core";
import {
  IconBulb,
  IconSchool,
  IconMicroscope,
  IconCoin,
  IconBookmark,
  IconDeviceLaptop,
  IconBriefcase,
  IconHeartHandshake,
  IconInfoCircle,
} from "@tabler/icons-react";
import styles from "./styles.module.css";
import SectionSeparator from "../components/SectionSeparator";
import { Resource, getAllResources } from "@/contentful/queries/resource";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { useState, useEffect } from "react";

export function getCategoryIcon(category: string) {
  switch (category) {
    case "Tips & Tricks":
      return IconBulb;
    case "Scholarship":
      return IconSchool;
    case "Research Opportunity":
      return IconMicroscope;
    case "Funds":
      return IconCoin;
    case "Education":
      return IconDeviceLaptop;
    case "Career":
      return IconBriefcase;
    case "Learning":
      return IconBookmark;
    case "Networking":
      return IconHeartHandshake;
    default:
      return IconInfoCircle;
  }
}

function ParallaxBackground() {
  return (
    <div className="parallax-bg">
      <div className="floating-shape shape-1">
        <div style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="floating-shape shape-2">
        <div style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="floating-shape shape-3">
        <div style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="floating-shape shape-4">
        <div style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
}

function ResourceHero() {
  return (
    <Box
      component="section"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #003A8C 0%, #001F4D 100%)",
        padding: "120px 0 80px",
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
            "radial-gradient(circle at 20% 150%, rgba(255, 145, 77, 0.3) 0%, transparent 60%), radial-gradient(circle at 80% -20%, rgba(255, 255, 255, 0.2) 0%, transparent 40%)",
          zIndex: 0,
        }}
      />

      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <div>
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
              Health Tech Innovators
            </Text>
            <Title
              order={1}
              size="4.5rem"
              fw={800}
              style={{
                color: "white",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                textShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
              }}
            >
              Resources
            </Title>
            <Text
              size="xl"
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Discover valuable resources to help you grow in the field of
              health technology. From scholarships and research opportunities to
              learning materials and career guidance.
            </Text>
          </Box>
        </div>
      </Container>

      {}
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
    </Box>
  );
}

export function Resources() {
  const [resources, setResources] = useState<Resource[] | any>([]);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      let data = await getAllResources();
      data = data.map((item) => ({
        ...item,
        icon: getCategoryIcon(item.category),
      }));
      setResources(data as any);
    };

    fetchResources();
  }, []);

  return (
    <>
      <ParallaxBackground />
      <ResourceHero />
      <Container size="lg">
        <SectionSeparator color="#004AAD" glowColor="rgba(0, 74, 173, 0.6)" marginBottom={0} />
      </Container>
      <Box
        py={80}
        style={{
          background: "linear-gradient(180deg, #f8f9fa 0%, #fff 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container size="lg">
          <Title
            order={2}
            size="2.5rem"
            ta="center"
            mb={20}
            style={{ color: "#004AAD" }}
          >
            Explore Our <span style={{ color: "#FF914D" }}>Resources</span>
          </Title>

          <Text
            ta="center"
            size="lg"
            mb={50}
            style={{
              maxWidth: "800px",
              margin: "0 auto 50px",
              color: "#555",
            }}
          >
            We&apos;ve curated a collection of valuable resources to help you
            succeed in the health technology field. Whether you&apos;re looking
            for funding, educational materials, or career opportunities,
            we&apos;ve got you covered.
          </Text>

          <div className={styles["resource-grid"]}>
            {resources.map((resource: any, index: any) => (
              <Card
                key={index}
                padding="xl"
                radius="lg"
                className={styles["resource-card"]}
                style={{
                  backgroundColor: "white",
                  border: "none",
                  boxShadow: "0 8px 24px rgba(0, 71, 171, 0.08)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "#004AAD",
                    boxShadow: "0 0 10px rgba(0, 74, 173, 0.6), 0 0 20px rgba(0, 74, 173, 0.6)",
                  }}
                />

                <Group align="flex-start" mb="md" wrap="nowrap">
                  <div className={styles["resource-icon"]}>
                      <resource.icon size={28} />
                  </div>
                  <Text className={styles["resource-title"]}>
                    {resource.name}
                  </Text>
                </Group>

                <div className={styles["resource-category"]}>
                  {resource.category}
                </div>

                <Text className={styles["resource-description"]}>
                  {documentToPlainTextString(resource.description)}
                </Text>

                <Button
                  component="a"
                  href={resource.link}
                  target="_blank"
                  variant="filled"
                  className={styles["resource-button"]}
                  fullWidth
                >
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </Container>

        {}
        <Box
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(rgba(0, 74, 173, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 74, 173, 0.05) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      </Box>
    </>
  );
}
