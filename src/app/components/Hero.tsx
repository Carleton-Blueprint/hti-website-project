'use client';

import { Container, Title, Text, Button, Group, Stack, Box, Grid, Image } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

const Hero = () => {
  return (
    <Box 
      pos="relative" 
      style={{ 
        minHeight: '600px',
        background: '#004AAD',
      }}
      pt={100}  
      pb={40}
    >
      <Container size="lg">
        <Grid align="center" gutter={40}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              <Title
                order={1}
                size="3.5rem"
                fw={800}
                c="white"
              >
                Innovating Healthcare Through Technology
              </Title>
              
              <Text size="xl" c="white">
                Join a community of passionate students and professionals dedicated to transforming healthcare 
                through innovative technological solutions.
              </Text>

              <Group>
                <Button 
                  size="lg" 
                  rightSection={<IconArrowRight size={20} />}
                  color="orange"
                >
                  Join Us Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  color="white"
                >
                  Learn More
                </Button>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src="https://placehold.co/800x600/ffffff/004AAD?text=Health+Tech+Placeholder"
              alt="Health Tech Innovators"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
