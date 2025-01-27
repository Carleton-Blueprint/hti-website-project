"use client";

import { Container, Title, Text, Grid, Card, Box } from "@mantine/core";

export function Mission() {
  return (
    <Box
      component="section"
      py={80}
      style={{
        background: "linear-gradient(180deg, #fff 0%, #f8f9fa 100%)",
      }}
    >
      <Container size="lg">
        <Grid gutter={30}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              padding="xl"
              radius="lg"
              style={{
                backgroundColor: "white",
                border: "none",
                boxShadow: "0 8px 24px rgba(0, 74, 173, 0.08)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                height: "100%",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 32px rgba(0, 74, 173, 0.12)",
                },
              }}
            >
              <Title order={3} size="h3" mb="lg" style={{ color: "#004AAD" }}>
                Our{" "}
                <Text span style={{ color: "#FF914D" }} inherit>
                  Mission
                </Text>
              </Title>
              <Text size="lg" style={{ color: "#4A5568", lineHeight: 1.7 }}>
                The Health Tech Innovators Club fosters innovation, inspires
                creativity, and drives progress in the health tech industry. We
                provide a collaborative platform where members share ideas,
                connect with professionals, learn about the latest trends, and
                work on projects that improve healthcare outcomes and enhance
                patient experiences.
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              padding="xl"
              radius="lg"
              style={{
                backgroundColor: "white",
                border: "none",
                boxShadow: "0 8px 24px rgba(0, 74, 173, 0.08)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                height: "100%",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 32px rgba(0, 74, 173, 0.12)",
                },
              }}
            >
              <Title order={3} size="h3" mb="lg" style={{ color: "#004AAD" }}>
                Our{" "}
                <Text span style={{ color: "#FF914D" }} inherit>
                  Vision
                </Text>
              </Title>
              <Text size="lg" style={{ color: "#4A5568", lineHeight: 1.7 }}>
                A leading community of health tech enthusiasts, innovators, and
                professionals at the forefront of transforming healthcare
                through technology. The club empowers members by offering
                opportunities to engage with industry leaders, collaborate on
                cutting-edge projects, and influence the future of healthcare.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
