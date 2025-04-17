"use client";

import { Box } from "@mantine/core";

interface SectionSeparatorProps {
  color?: string;
  glowColor?: string;
  height?: number;
  marginTop?: number;
  marginBottom?: number;
}

export default function SectionSeparator({
  color = "#004AAD",
  glowColor = "rgba(0, 74, 173, 0.6)",
  height = 3,
  marginTop = 60,
  marginBottom = 60,
}: SectionSeparatorProps) {
  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        height: `${height}px`,
        backgroundColor: color,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        boxShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}`,
        borderRadius: `${height}px`,
      }}
    />
  );
}
