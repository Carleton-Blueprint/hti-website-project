'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Group, Box, Button } from '@mantine/core';
<<<<<<< HEAD
=======
import { useState, useEffect } from 'react';
import classes from './Navbar.module.css';
>>>>>>> e7220ee8aa594b2dec70fa7e8339c39680ad7080

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
<<<<<<< HEAD
        backgroundColor: '#004AAD',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1000,
=======
        backgroundColor: scrolled ? '#003c8a' : '#004AAD',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
>>>>>>> e7220ee8aa594b2dec70fa7e8339c39680ad7080
      }}
    >
      <Container size="lg" h={70}>
        <Group justify="space-between" h="100%">
<<<<<<< HEAD
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
=======
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
>>>>>>> e7220ee8aa594b2dec70fa7e8339c39680ad7080
            <Button
              variant="gradient"
              gradient={{ from: '#FF914D', to: '#ff6b1a' }}
              size="sm"
<<<<<<< HEAD
=======
              className={classes.joinButton}
>>>>>>> e7220ee8aa594b2dec70fa7e8339c39680ad7080
            >
              Join Us
            </Button>
          </Group>
        </Group>
      </Container>
    </Box>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> e7220ee8aa594b2dec70fa7e8339c39680ad7080
