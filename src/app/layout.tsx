import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps } from '@mantine/core';
import { Providers } from './providers';
import Navbar from './components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const theme = createTheme({
  primaryColor: 'blue',
  colors: {
    blue: [
      '#E6F3FF',
      '#CCE7FF',
      '#99CFFF',
      '#66B7FF',
      '#339FFF',
      '#0087FF',
      '#004AAD',
      '#0069D9',
      '#004C9E',
      '#003A77',
    ],
    orange: [
      '#FFF5E6',
      '#FFE5CC',
      '#FFD1A8',
      '#FFBD85',
      '#FFA861',
      '#FF914D',
      '#FF7A3D',
      '#FF632D',
      '#FF4C1D',
      '#FF350D',
    ],
  },
  fontFamily: 'var(--font-geist-sans)',
  headings: {
    fontFamily: 'var(--font-geist-sans)',
  },
  components: {
    Card: {
      defaultProps: {
        bg: 'var(--mantine-color-blue-0)',
      },
    },
  },
});

export const metadata: Metadata = {
  title: "Health Tech Innovators Club",
  description: "A leading community of health tech enthusiasts, innovators, and professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MantineProvider theme={theme} defaultColorScheme="light">
            <Providers>
            <Navbar />
            {children}
            </Providers>
        </MantineProvider>
      </body>
    </html>
  );
}
