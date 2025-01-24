'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Group, Box, Button } from '@mantine/core';

const Navbar = () => {
  return (
    <Box
      component="nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#004AAD',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1000,
      }}
    >
      <Container size="lg" h={70}>
        <Group justify="space-between" h="100%">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/logo.png"
              alt="Health Tech Innovators Logo"
              width={48}
              height={48}
              style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>
          
          <Group gap={40} visibleFrom="sm">
            <Link 
              href="/" 
              style={{ 
                color: 'white', 
                textDecoration: 'none',
                transition: 'color 0.2s',
                ':hover': { color: '#FF914D' }
              }}
            >
              Home
            </Link>
            <Link 
              href="/events" 
              style={{ 
                color: 'white', 
                textDecoration: 'none',
                transition: 'color 0.2s',
                ':hover': { color: '#FF914D' }
              }}
            >
              Events
            </Link>
            <Link 
              href="/resources" 
              style={{ 
                color: 'white', 
                textDecoration: 'none',
                transition: 'color 0.2s',
                ':hover': { color: '#FF914D' }
              }}
            >
              Resources
            </Link>
            <Link 
              href="/news" 
              style={{ 
                color: 'white', 
                textDecoration: 'none',
                transition: 'color 0.2s',
                ':hover': { color: '#FF914D' }
              }}
            >
              News
            </Link>
            <Button
              variant="gradient"
              gradient={{ from: '#FF914D', to: '#ff6b1a' }}
              size="sm"
            >
              Join Us
            </Button>
          </Group>
        </Group>
      </Container>
    </Box>
  );
};

export default Navbar;