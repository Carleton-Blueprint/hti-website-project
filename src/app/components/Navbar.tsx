"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Group, Box, Button, Menu, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component="nav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: scrolled ? "rgba(0, 60, 138, 0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
        zIndex: 1000,
        transition: "all 0.4s ease",
        boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.15)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <Container
        size="lg"
        h={scrolled ? 70 : 90}
        style={{ transition: "height 0.3s ease" }}
      >
        <Group justify="space-between" h="100%">
          <Box className={classes.logo}>
            <Link href="/">
              <Group gap={12} align="center">
                <Image
                  src="/logo.png"
                  alt="Health Tech Innovators Logo"
                  width={35} // Set fixed smaller width
                  height={35} // Set fixed smaller height
                  style={{
                    // Removed height from style
                    width: "auto", // Keep width auto if height is primary control
                    objectFit: "contain",
                    filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2))",
                    // Removed height transition as it's no longer conditional
                  }}
                />
                <Text
                  fw={700}
                  size={scrolled ? "md" : "lg"}
                  style={{
                    color: "white",
                    transition: "font-size 0.3s ease",
                    textShadow:
                      "0 0 2px rgba(0, 0, 0, 0.8), 0 0 4px rgba(0, 0, 0, 0.6), 0 0 6px rgba(0, 0, 0, 0.4)",
                  }}
                  hiddenFrom="xs"
                  visibleFrom="md"
                >
                  Health Tech Innovators
                </Text>
              </Group>
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
              offset={8}
              withArrow
              styles={{
                dropdown: {
                  backgroundColor: "rgba(0, 60, 138, 0.95)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "8px",
                  borderRadius: "12px",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                },
                arrow: {
                  backgroundColor: "rgba(0, 60, 138, 0.95)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <Menu.Target>
                <Box
                  className={classes.navLink}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Discover{" "}
                  <IconChevronDown
                    size={16}
                    style={{ transition: "transform 0.3s ease" }}
                  />
                </Box>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  component={Link}
                  href="/team"
                  className={classes.menuItem}
                >
                  Our Team
                </Menu.Item>
                <Menu.Item
                  component={Link}
                  href="/upcoming-events"
                  className={classes.menuItem}
                >
                  Events
                </Menu.Item>
                <Menu.Item
                  component={Link}
                  href="/news-blog"
                  className={classes.menuItem}
                >
                  News
                </Menu.Item>
                <Menu.Item
                  component={Link}
                  href="/resource"
                  className={classes.menuItem}
                >
                  Resources
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Link href="/sign-up">
              <Button
                variant="gradient"
                gradient={{ from: "#FF914D", to: "#ff6b1a" }}
                size={scrolled ? "sm" : "md"}
                className={classes.joinButton}
                style={{
                  transition: "all 0.3s ease",
                  padding: scrolled ? "0.5rem 1.2rem" : "0.6rem 1.5rem",
                }}
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
