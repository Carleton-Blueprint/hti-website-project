'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Group, Box, Button, MantineStyleProp } from '@mantine/core';

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
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Health Tech Innovators Logo"
                width={48}
                height={48}
                style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>
          </Box>
          
          <Group gap={40} visibleFrom="sm">
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <Link 
                href="/" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                Home
              </Link>
            </Box>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <Link 
                href="/events" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                Events
              </Link>
            </Box>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <Link 
                href="/resources" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                Resources
              </Link>
            </Box>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <Link 
                href="/news" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                News
              </Link>
            </Box>
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
