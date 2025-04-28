"use client";

import {
  Container,
  Title,
  Text,
  Loader,
  Paper,
  Image,
  Group,
  Button,
  Box,
  Badge,
} from "@mantine/core";
import { getAllPosts } from "../postMock";
import { useEffect, useState } from "react";
import { BlogPost } from "../BlogPost";
import Navbar from "../../components/Navbar";
import { useParams } from "next/navigation";
import { IconCalendar, IconUser, IconArrowLeft } from "@tabler/icons-react";
import styles from "../styles.module.css";

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

export default function BlogPostPage() {
  const searchParams = useParams();
  const slug = searchParams.slug;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const posts = getAllPosts();
      const foundPost = posts.find((p) => p.slug === slug);
      setPost(foundPost || null);
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Loader size="xl" color="#004AAD" />
      </Box>
    );
  }

  if (!post) {
    return (
      <main className="grid-bg">
        <Navbar />
        <Box pt={120} pb={60} style={{ textAlign: "center" }}>
          <Container>
            <Title order={2} style={{ color: "#004AAD", marginBottom: "1rem" }}>
              Post Not Found
            </Title>
            <Text mb="xl">
              The blog post you&apos;re looking for doesn&apos;t exist or has
              been removed.
            </Text>
            <Button
              component="a"
              href="/news-blog"
              variant="filled"
              color="blue"
              leftSection={<IconArrowLeft size={16} />}
            >
              Back to Blog
            </Button>
          </Container>
        </Box>
      </main>
    );
  }

  return (
    <main className="grid-bg">
      <Navbar />
      <ParallaxBackground />

      {/* Hero Section */}
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
          <Box ta="center">
            <Badge
              size="lg"
              variant="light"
              mb="md"
              style={{
                backgroundColor: "rgba(255, 145, 77, 0.2)",
                color: "#FF914D",
                textTransform: "uppercase",
                fontWeight: 600,
                padding: "0.5rem 1rem",
              }}
            >
              {post.category}
            </Badge>
            <Title
              order={1}
              size="3.5rem"
              fw={800}
              style={{
                color: "white",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
                textShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
              }}
            >
              {post.title}
            </Title>

            <Group justify="center" gap="xl">
              <Group gap="xs">
                <IconUser
                  size={18}
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                />
                <Text size="lg" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                  {post.author}
                </Text>
              </Group>
              <Group gap="xs">
                <IconCalendar
                  size={18}
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                />
                <Text size="lg" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                  {post.date}
                </Text>
              </Group>
            </Group>
          </Box>
        </Container>

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
      </Box>

      {/* Content Section */}
      <Box
        py={80}
        style={{
          background: "linear-gradient(180deg, #f8f9fa 0%, #fff 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container size="md">
          {/* Featured Image */}
          <Paper
            radius="lg"
            style={{
              overflow: "hidden",
              marginTop: "-100px",
              marginBottom: "3rem",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
              src={post.imageUrl}
              alt={post.title}
              height={400}
              style={{ width: "100%", objectFit: "cover" }}
            />
          </Paper>

          {/* Navigation */}
          <Button
            component="a"
            href="/news-blog"
            variant="light"
            color="blue"
            mb="xl"
            leftSection={<IconArrowLeft size={16} />}
            style={{
              backgroundColor: "rgba(0, 74, 173, 0.1)",
              color: "#004AAD",
            }}
          >
            Back to All Articles
          </Button>

          {/* Content */}
          <Paper
            p="xl"
            radius="md"
            className={styles["blog-post-container"]}
            style={{
              backgroundColor: "white",
              border: "none",
              boxShadow: "0 8px 24px rgba(0, 71, 171, 0.08)",
            }}
          >
            <div className={styles["blog-post-content"]}>
              {post.content.split("\n").map((paragraph, index) => (
                <Text
                  key={index}
                  style={{
                    marginBottom: "1.5rem",
                    lineHeight: 1.8,
                    color: "#333",
                  }}
                >
                  {paragraph}
                </Text>
              ))}
            </div>
          </Paper>
        </Container>

        {/* Background grid pattern */}
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
    </main>
  );
}
