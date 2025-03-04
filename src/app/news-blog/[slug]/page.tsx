'use client';

import { Container, Title, Text, Loader, Paper, Divider, Image, Group, Avatar, Button, Box } from '@mantine/core';
import { getAllPosts } from '../postMock';
import { useEffect, useState } from 'react';
import { BlogPost } from '../BlogPost';
import Navbar from "../../components/Navbar";
import { useParams } from 'next/navigation';

export default function BlogPostPage() {
  const searchParams = useParams();
  const slug = searchParams.slug;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(slug)
    if (slug) {
      const posts = getAllPosts();
      const foundPost = posts.find((p) => p.slug === slug);
      setPost(foundPost || null);
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return <Loader />;
  }

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
        <Container size="md" py="xl">
          <Paper shadow="md" p="xl" radius="md" withBorder>
            <Button onClick={() => {window.history.go(-1); return false;}} variant="outline" mb="md">
              ← Back to Posts
            </Button>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
              <Image 
                src={post!.imageUrl} 
                alt={post!.title} 
                height={400} 
                width="80%" 
                style={{ objectFit: 'cover', borderRadius: '8px', maxHeight: '400px' }}
              />
            </div>
            <Title order={1} mb="sm" style={{ fontSize: '2rem', textAlign: 'center' }}>
              {post!.title}
            </Title>
            <Group justify="center" mb="md">
              <Avatar radius="xl" size="md" />
              <Text fw={500} size="sm">
                {post!.author}
              </Text>
              <Text color="dimmed" size="sm">
                • {post!.date}
              </Text>
            </Group>
            <Divider my="md" />
            {post!.content.split('\n').map((paragraph, index) => (
              <Text key={index} size="lg" style={{ lineHeight: 1.6, textAlign: 'justify', marginBottom: '1rem' }}>
                {paragraph}
              </Text>
            ))}
          </Paper>
        </Container>
      </Box>
    </main>
  );
}
