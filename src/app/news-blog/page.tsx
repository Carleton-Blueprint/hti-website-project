"use client";

import {
  Container,
  Title,
  Card,
  Text,
  Group,
  Badge,
  Box,
  SimpleGrid,
  Image,
} from "@mantine/core";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { getAllBlogPosts } from "@/contentful/queries/blogPost";
import { BlogPost } from "@/contentful/queries/blogPost"
import { useState, useEffect } from "react";
import { IconSearch, IconFilter, IconCalendar } from "@tabler/icons-react";
import styles from "./styles.module.css";
import { SearchFilter } from "./SearchFilter";

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

function BlogHero() {
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
              Health Tech Insights
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
              News & Blog
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
              Stay updated with the latest news, trends, and insights in health
              technology. Discover innovations, success stories, and expert
              perspectives.
            </Text>
          </Box>
        </div>
      </Container>

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

export default function NewsBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    getAllBlogPosts().then(setPosts);
    setCategories([
      "all",
      ...Array.from(new Set(posts.map((post) => post.category?.toLowerCase()).filter((cat): cat is string => Boolean(cat)))),
    ])
  }, [posts]);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      post.category?.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="grid-bg">
      <Navbar />
      <ParallaxBackground />
      <BlogHero />

      <Box
        py={80}
        style={{
          background: "linear-gradient(180deg, #f8f9fa 0%, #fff 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container size="lg">
          {}
          <SearchFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />

          {}
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
            {filteredPosts.map((post) => (
              <div key={post.slug}>
                <Link
                  href={`/news-blog/${post.slug}`}
                  passHref
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                      position: "relative",
                      border: "none",
                      backgroundColor: "white",
                      boxShadow: "0 8px 24px rgba(0, 71, 171, 0.08)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                    }}
                    className={styles["blog-card"]}
                  >
                    <Box
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "6px",
                        background: "linear-gradient(90deg, #004AAD, #FF914D)",
                      }}
                    />

                    <Card.Section>
                      <Image
                        src={post.imageUrl}
                        height={200}
                        alt={post.title}
                        style={{
                          transition: "transform 0.5s ease",
                        }}
                        className={styles["blog-card-img"]}
                      />
                    </Card.Section>

                    <Box
                      p="md"
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Group mb="xs">
                        <Badge
                          color="blue"
                          variant="light"
                          style={{
                            backgroundColor: "rgba(0, 74, 173, 0.1)",
                            color: "#004AAD",
                          }}
                        >
                          {post.category}
                        </Badge>
                        <Text
                          size="xs"
                          c="dimmed"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <IconCalendar
                            size={14}
                            style={{ marginRight: "4px" }}
                          />
                          {post.date}
                        </Text>
                      </Group>

                      <Title
                        order={3}
                        mb="sm"
                        style={{ color: "#004AAD", fontSize: "1.4rem" }}
                      >
                        {post.title}
                      </Title>

                      <Text
                        size="sm"
                        mb="md"
                        style={{ color: "#555", flex: 1 }}
                      >
                        {post.excerpt}
                      </Text>

                      <Group mt="auto">
                        <Text size="sm" fw={600} style={{ color: "#FF914D" }}>
                          Read More →
                        </Text>
                      </Group>
                    </Box>
                  </Card>
                </Link>
              </div>
            ))}
          </SimpleGrid>

          {filteredPosts.length === 0 && (
            <Box ta="center" py={50}>
              <Title order={3} style={{ color: "#004AAD" }}>
                No posts found
              </Title>
              <Text>Try adjusting your search or filter criteria</Text>
            </Box>
          )}
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
    </main>
  );
}
