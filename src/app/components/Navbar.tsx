'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Group, Box, Button, Menu } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
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
          
          <Group gap={32} visibleFrom="sm">
            <Link href="/" className={classes.navLink}>
              Home
            </Link>
            <Link href="/about-us" className={classes.navLink}>
              About Us
            </Link>
            <Menu 
              trigger="hover" 
              openDelay={100} 
              closeDelay={200}
              position="bottom"
              offset={0}
              withArrow
              styles={{
                dropdown: {
                  backgroundColor: '#004AAD',
                  border: 'none',
                  padding: '8px',
                },
                arrow: {
                  backgroundColor: '#004AAD',
                },
              }}
            >
              <Menu.Target>
                <Box className={classes.navLink} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Discover <IconChevronDown size={16} />
                </Box>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item component={Link} href="/team" className={classes.menuItem}>
                  Our Team
                </Menu.Item>
                <Menu.Item component={Link} href="/upcoming-events" className={classes.menuItem}>
                  Events
                </Menu.Item>
                <Menu.Item component={Link} href="/news-blog" className={classes.menuItem}>
                  News
                </Menu.Item>
                <Menu.Item component={Link} href="/resource" className={classes.menuItem}>
                  Resources
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Link href="/sign-up">
              <Button
                variant="gradient"
                gradient={{ from: '#FF914D', to: '#ff6b1a' }}
                size="sm"
                className={classes.joinButton}
              >
                Sign Up
              </Button>
            </Link>
          </Group>
        </Group>
      </Container>
    </Box>
  );
};

export default Navbar;
