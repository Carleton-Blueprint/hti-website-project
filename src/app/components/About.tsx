import { Container, Title, Text, Paper, SimpleGrid, Box } from '@mantine/core';

const About = () => {
  const coreValues = [
    { title: 'Innovation', description: 'Encouraging creativity and bold thinking in health tech.' },
    { title: 'Collaboration', description: 'Valuing collective knowledge, teamwork, and inclusivity.' },
    { title: 'Education', description: 'Prioritizing learning and growth through resources and events.' },
    { title: 'Impact', description: 'Making a tangible difference by enhancing patient care and outcomes.' },
    { title: 'Networking', description: 'Connecting like-minded individuals for meaningful professional relationships.' },
  ];

  return (
    <Box component="section" py={64}>
      <Container size="lg">
        <Title order={2} c="#004AAD" ta="center" mb={40}>
          About Us
        </Title>
        
        {/* Mission Statement */}
        <Box mb={48}>
          <Title order={3} c="#004AAD" size="h3" mb="md">
            Our Mission
          </Title>
          <Text size="lg" c="dimmed">
            The Health Tech Innovators Club fosters innovation, inspires creativity, and drives progress in the health tech industry. 
            It provides a collaborative platform where members share ideas, connect with professionals, learn about the latest trends, 
            and work on projects that improve healthcare outcomes and enhance patient experiences.
          </Text>
        </Box>

        {/* Vision Statement */}
        <Box mb={48}>
          <Title order={3} c="#004AAD" size="h3" mb="md">
            Our Vision
          </Title>
          <Text size="lg" c="dimmed">
            A leading community of health tech enthusiasts, innovators, and professionals at the forefront of transforming healthcare through technology. 
            The club empowers members by offering opportunities to engage with industry leaders, collaborate on cutting-edge projects, 
            and influence the future of healthcare.
          </Text>
        </Box>
        
        {/* Core Values */}
        <Box>
          <Title order={3} c="#004AAD" ta="center" mb={24}>
            Our Core Values
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            {coreValues.map((value, index) => (
              <Paper
                key={index}
                p="xl"
                radius="md"
                withBorder
                shadow="sm"
                style={{
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <Title order={4} c="#FF914D" mb="xs">
                  {value.title}
                </Title>
                <Text c="dimmed">
                  {value.description}
                </Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;