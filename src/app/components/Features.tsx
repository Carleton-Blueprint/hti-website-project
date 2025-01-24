'use client';

import { Container, Title, Text, SimpleGrid, Card, Box, ThemeIcon, Group } from '@mantine/core';
import { IconHeartHandshake, IconBulb, IconUsers, IconCode } from '@tabler/icons-react';

const features = [
  {
    Icon: IconHeartHandshake,
    title: 'Healthcare Impact',
    description: 'Drive meaningful change in healthcare through innovative technological solutions.',
  },
  {
    Icon: IconBulb,
    title: 'Innovation Hub',
    description: 'Access cutting-edge resources and collaborate on groundbreaking health tech projects.',
  },
  {
    Icon: IconUsers,
    title: 'Community',
    description: 'Connect with like-minded individuals passionate about transforming healthcare.',
  },
  {
    Icon: IconCode,
    title: 'Hands-on Learning',
    description: 'Gain practical experience through workshops, hackathons, and real-world projects.',
  },
];

export function Features() {
  return (
    <Box 
      component="section" 
      py={80}
      bg="white"
    >
      <Container size="lg">
        <Title 
          order={2} 
          ta="center" 
          size="2.5rem"
          mb="xl"
          c="#004AAD"
        >
          Why Join
          <Text span style={{ color: '#FF914D' }} inherit> Health Tech Innovators?</Text>
        </Title>

        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="sm">
          Be part of a dynamic community driving the future of healthcare technology
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={30} mt={50}>
          {features.map((feature) => {
            const Icon = feature.Icon;
            return (
              <Card 
                key={feature.title} 
                shadow="xs"
                radius="md"
                p="xl"
                withBorder
              >
                <Group wrap="nowrap">
                  <ThemeIcon
                    size={56}
                    radius="md"
                    variant="filled"
                    color="blue"
                  >
                    <Icon size={30} stroke={1.5} />
                  </ThemeIcon>
                  
                  <div>
                    <Text size="lg" fw={600} mb={7} c="#004AAD">
                      {feature.title}
                    </Text>
                    <Text size="md" c="dark.6">
                      {feature.description}
                    </Text>
                  </div>
                </Group>
              </Card>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
