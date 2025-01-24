'use client';

import { Container, Title, Text, Grid, Card, Box } from '@mantine/core';

export function Mission() {
  return (
    <Box 
      component="section" 
      py={100}
      bg="white"
    >
      <Container size="lg">
        <Grid gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card 
              shadow="xs"
              radius="md"
              p="xl"
              withBorder
            >
              <Title order={3} size="h2" mb="md">
                <Text span style={{ color: '#004AAD' }} inherit>Our</Text>
                <Text span style={{ color: '#FF914D' }} inherit> Mission</Text>
              </Title>
              <Text size="lg" c="dimmed">
                The Health Tech Innovators Club fosters innovation, inspires creativity, and drives progress 
                in the health tech industry. We provide a collaborative platform where members share ideas, 
                connect with professionals, learn about the latest trends, and work on projects that improve 
                healthcare outcomes and enhance patient experiences.
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card 
              shadow="xs"
              radius="md"
              p="xl"
              withBorder
            >
              <Title order={3} size="h2" mb="md">
                <Text span style={{ color: '#004AAD' }} inherit>Our</Text>
                <Text span style={{ color: '#FF914D' }} inherit> Vision</Text>
              </Title>
              <Text size="lg" c="dimmed">
                A leading community of health tech enthusiasts, innovators, and professionals at the forefront 
                of transforming healthcare through technology. The club empowers members by offering opportunities 
                to engage with industry leaders, collaborate on cutting-edge projects, and influence the future 
                of healthcare.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
