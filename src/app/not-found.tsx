import Link from "next/link";
import { Container, Title, Text, Button, Group } from "@mantine/core";

export default function NotFound() {
  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Title
        style={{ fontSize: "3.5rem", color: "#102A43", marginBottom: "1.5rem" }}
      >
        404 - Page Not Found
      </Title>

      <Text
        size="xl"
        style={{ color: "#2D3748", marginBottom: "2.5rem", maxWidth: "600px" }}
      >
        We couldn't find the page you're looking for. It might have been moved
        or doesn't exist.
      </Text>

      <Group>
        <Button
          component={Link}
          href="/"
          size="lg"
          variant="gradient"
          gradient={{ from: "#004AAD", to: "#0066FF" }}
        >
          Back to Home
        </Button>

        <Button
          component={Link}
          href="/upcoming-events"
          size="lg"
          variant="outline"
          color="blue"
        >
          View All Events
        </Button>
      </Group>
    </Container>
  );
}
