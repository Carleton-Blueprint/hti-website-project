import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
