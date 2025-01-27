'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Group, Box, Button } from '@mantine/core';
import { useState, useEffect } from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      component="nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: scrolled ? '#003c8a' : '#004AAD',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <Container size="lg" h={70}>
        <Group justify="space-between" h="100%">
          <Box className={classes.logo}>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Health Tech Innovators Logo"
                width={48}
                height={48}
                style={{
                  height: '40px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                }}
              />
            </Link>
          </Box>
          
          <Group gap={40} visibleFrom="sm">
            {[
              { href: '/', label: 'Home' },
              { href: '/events', label: 'Events' },
              { href: '/resources', label: 'Resources' },
              { href: '/news', label: 'News' },
            ].map((link) => (
              <Box key={link.href} style={{ display: 'flex', alignItems: 'center' }}>
                <Link href={link.href} className={classes.navLink}>
                  {link.label}
                </Link>
              </Box>
            ))}
            <Button
              variant="gradient"
              gradient={{ from: '#FF914D', to: '#ff6b1a' }}
              size="sm"
              className={classes.joinButton}
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
