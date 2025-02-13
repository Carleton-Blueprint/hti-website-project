'use client';

import Image from 'next/image';

import Link from 'next/link';
import { Container, Group, Box, Button, Menu, Burger, Drawer, Stack } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [opened, { toggle, close }] = useDisclosure(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
  ];

  const dropdownItems = [
    { label: 'Our Team', href: '/team' },
    { label: 'Events', href: '/upcoming-events' },
    { label: 'News', href: '/news-blog' },
    { label: 'Resources', href: '/resource' },
  ];

  return (
    <Box
      component="nav"
      style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: scrolled ? 'rgba(0, 60, 138, 0.95)' : 'rgba(0, 74, 173, 0.98)',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.15)' : 'none',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
        <Container size="lg" h={75}>
        <Group justify="space-between" h="100%" wrap="nowrap">
          <Box className={classes.logo}>
          <Link href="/">
            <Image
            src="/Logo.png"
            alt="Health Tech Innovators Logo"
            width={56}
            height={56}
            style={{
              height: '52px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            className={classes.logo}
            />

          </Link>
          </Box>

          <Group gap={36} visibleFrom="sm" className={classes.mainLinks}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={classes.navLink}>
            {item.label}
            </Link>
          ))}
          
          <Menu 
            trigger="hover" 
            openDelay={100} 
            closeDelay={200}
            position="bottom"
            offset={8}
            withArrow
            transitionProps={{
            transition: 'scale-y',
            duration: 200,
            }}
            styles={{
            dropdown: {
              backgroundColor: 'rgba(0, 74, 173, 0.98)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '8px',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            },
            arrow: {
              backgroundColor: 'rgba(0, 74, 173, 0.98)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            },
            }}
          >
            <Menu.Target>
            <Box className={classes.navLink} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Discover <IconChevronDown size={16} style={{ transition: 'transform 0.2s ease' }} />
            </Box>
            </Menu.Target>
            <Menu.Dropdown>
            {dropdownItems.map((item) => (
              <Menu.Item
              key={item.href}
              component={Link}
              href={item.href}
              className={classes.menuItem}
              >
              {item.label}
              </Menu.Item>
            ))}
            </Menu.Dropdown>
          </Menu>
          
          <Link href="/sign-up">
            <Button
            variant="gradient"
            gradient={{ from: '#FF914D', to: '#ff6b1a' }}
            size="md"
            className={classes.joinButton}
            styles={{
              root: {
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(255, 145, 77, 0.3)',
              },
              },
            }}
            >
            Sign Up
            </Button>
          </Link>
          </Group>

          <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          color="white"
          size="sm"
          />
        </Group>
        </Container>

        {/* Mobile Menu Drawer */}
        <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000}
        styles={{
          content: {
          background: 'linear-gradient(135deg, #004AAD 0%, #003380 100%)',
          },
        }}
        >
        <Box py={20}>
          <Stack gap={24}>
          {navItems.map((item) => (
            <Link
            key={item.href}
            href={item.href}
            className={classes.mobileNavLink}
            onClick={close}
            >
            {item.label}
            </Link>
          ))}
          
          <Box className={classes.mobileNavLink}>Discover</Box>
          <Stack gap={16} pl={20}>
            {dropdownItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={classes.mobileSubLink}
              onClick={close}
            >
              {item.label}
            </Link>
            ))}
          </Stack>

          <Link href="/sign-up" onClick={close}>
            <Button
            fullWidth
            variant="gradient"
            gradient={{ from: '#FF914D', to: '#ff6b1a' }}
            size="md"
            mt={12}
            >
            Sign Up
            </Button>
          </Link>
          </Stack>
        </Box>
        </Drawer>
      </Box>
  );
};

export default Navbar;
