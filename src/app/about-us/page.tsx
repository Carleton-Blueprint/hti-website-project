'use client';

import { Container, Title, Text, Grid, Card, Group, ThemeIcon, Box, Stack } from '@mantine/core';
import { IconHeart, IconBulb, IconUsers } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import classes from './styles.module.css';

const MotionBox = motion(Box as any);
const MotionCard = motion(Card as any);

export default function AboutUs() {
    const values = [
        {
            icon: IconHeart,
            title: 'Student-Led Projects',
            description: 'Work on real healthcare tech projects with local hospitals and clinics.',
        },
        {
            icon: IconBulb,
            title: 'Weekly Workshops',
            description: 'Learn from industry experts and gain hands-on experience with healthcare technologies.',
        },
        {
            icon: IconUsers,
            title: 'Network Growth',
            description: 'Connect with healthcare professionals, tech companies, and fellow students.',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <Box className={classes.main}>
            <Box className={classes.overlay} />
            <div className={classes.gridBackground} />
            
            <Container size="lg" pos="relative" style={{ zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Stack className={classes.hero} gap="xl">
                        <div className={classes.heroContent}>
                            <Text
                                size="xl"
                                fw={700}
                                className={classes.subtitle}
                            >
                                Who We Are
                            </Text>
                            <Title className={classes.title}>
                                Carleton Health Tech Innovators
                            </Title>
                            <Text className={classes.description}>
                                A student-led organization at Carleton University passionate about revolutionizing healthcare through technology.
                            </Text>
                        </div>
                    </Stack>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <Grid gutter={40} mt={60}>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <motion.div variants={itemVariants} className={classes.infoCard}>
                                <Stack gap="xl">
                                    <div>
                                        <Title order={2} className={classes.sectionTitle}>What We Do</Title>
                                        <Text className={classes.sectionText} component="div">
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                <li style={{ marginBottom: '12px' }}>🏥 Partner with local hospitals on real-world projects</li>
                                                <li style={{ marginBottom: '12px' }}>💻 Host hands-on technical workshops and hackathons</li>
                                                <li style={{ marginBottom: '12px' }}>🤝 Organize networking events with industry professionals</li>
                                                <li style={{ marginBottom: '12px' }}>📚 Provide mentorship and career guidance</li>
                                            </ul>
                                        </Text>
                                    </div>
                                </Stack>
                            </motion.div>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <motion.div variants={itemVariants} className={classes.infoCard}>
                                <Stack gap="xl">
                                    <div>
                                        <Title order={2} className={classes.sectionTitle}>Join Us</Title>
                                        <Text className={classes.sectionText} component="div">
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                <li style={{ marginBottom: '12px' }}>📅 Weekly meetings every Thursday at 5:30 PM</li>
                                                <li style={{ marginBottom: '12px' }}>📍 Location: Carleton University, ME 4359</li>
                                                <li style={{ marginBottom: '12px' }}>🎓 Open to all students - no experience required</li>
                                                <li style={{ marginBottom: '12px' }}>🌟 Great for CS, Engineering, and Health Science students</li>
                                            </ul>
                                        </Text>
                                    </div>
                                </Stack>
                            </motion.div>
                        </Grid.Col>
                    </Grid>
                </motion.div>

                <section className={classes.values}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <Title order={2} className={classes.sectionTitle} ta="center">Our Core Values</Title>
                        <Grid gutter={40} mt={40}>
                            {values.map((value, index) => (
                                <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                                    <MotionCard
                                        variants={itemVariants}
                                        className={classes.valueCard}
                                        padding="xl"
                                    >
                                        <ThemeIcon
                                            size={60}
                                            radius="md"
                                            className={classes.valueIcon}
                                        >
                                            <value.icon size={30} />
                                        </ThemeIcon>
                                        <Text size="xl" mt="md">
                                            {value.title}
                                        </Text>
                                        <Text size="md" c="dimmed" mt="sm" lh={1.6}>
                                            {value.description}
                                        </Text>
                                    </MotionCard>
                                </Grid.Col>
                            ))}
                        </Grid>
                    </motion.div>
                </section>
            </Container>
        </Box>
    );
}