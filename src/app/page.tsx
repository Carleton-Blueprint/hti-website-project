import { Container } from "@mantine/core";
import Hero from "./components/Hero";
import { Features } from "./components/Features";
import { Mission } from "./components/Mission";
import { CallToAction } from "./components/CallToAction";
import Navbar from "./components/Navbar";
import { LatestEvents } from "./components/LatestEvents";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Container fluid p={0}>
        <Hero />
        <Mission />
        <Features />
        <LatestEvents />
        <CallToAction />
      </Container>
    </main>
  );
}
