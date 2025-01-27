"use client";

import { Container, Title, Text, Button, Group, Box } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

export function CallToAction() {
  return (
    <Box
      pos="relative"
      style={{
        minHeight: "400px",
        background: "linear-gradient(135deg, #E6F3FF 0%, #CCE7FF 100%)",
        overflow: "hidden",
      }}
    >
      <Container
        size="lg"
        style={{
          position: "relative",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
          padding: "80px 0",
        }}
      >
        <div style={{ maxWidth: 600 }}>
          <Title order={2} size="2.5rem" fw={800} c="#004AAD">
            Ready to Make an Impact in
            <Text span c="#FF914D" inherit>
              {" "}
              Health Tech?
            </Text>
          </Title>

          <Text size="lg" mt="xl" c="dimmed" style={{ lineHeight: 1.6 }}>
            Join our community of innovators and be part of the future of
            healthcare technology. Together, we can make a difference.
          </Text>

          <Group mt={40}>
            <Button
              size="lg"
              variant="gradient"
              gradient={{ from: "#FF914D", to: "#ff6b1a" }}
              rightSection={<IconArrowRight size={20} />}
            >
              Join Now
            </Button>
            <Button size="lg" variant="light" color="blue">
              Contact Us
            </Button>
          </Group>
        </div>
      </Container>
    </Box>
  );
}
