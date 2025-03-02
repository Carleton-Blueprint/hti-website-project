"use client";

import { Container, Title, Card, Text, Group, Badge, Box, SimpleGrid, Image } from '@mantine/core';
import Link from 'next/link';
import Navbar from "../components/Navbar";
import { getAllPosts } from './postMock';

export default function NewsBlog() {

  const posts = getAllPosts();

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
            Blog/News
          </Title>
          <Text
            size="lg"
            ta="center"
            mb={40}
            maw={600}
            mx="auto"
            style={{ color: "#4A5568" }}
          >
            Stay updated with the latest news, updates and industry insights in health technology.
          </Text>
          <SimpleGrid
            cols={{ base: 1, sm: 2, md: 3 }}
            spacing="lg"
            style={{
              minWidth: '100%',
              display: 'grid',
              gridAutoFlow: 'row',
              gridAutoColumns: 'minmax(300px, 1fr)',
            }}
          >
            {posts.map((post) => (
              <Link key={post.slug} href={`/news-blog/${post.slug}`} passHref>
                <Card
                  shadow="md"
                  padding="lg"
                  withBorder
                  radius="md"
                  style={{ cursor: 'pointer', transition: 'transform 0.2s ease-in-out' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <Card.Section>
                    <Image src={post.imageUrl} height={200} alt={post.title} />
                  </Card.Section>

                  <Badge color="blue" variant="light" mt="sm">
                    {post.category.toUpperCase()}
                  </Badge>

                  <Title order={3} mt="sm">
                    {post.title}
                  </Title>
                  
                  {/* <Text mt="sm">
                    {post.excerpt}
                  </Text> */}

                  <Group mt="md">
                    <Text size="sm" color="dimmed">
                      {post.author} • {new Date(post.date).toISOString().split("T")[0]}
                    </Text>
                  </Group>
                </Card>
              </Link>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </main>
  );
}
