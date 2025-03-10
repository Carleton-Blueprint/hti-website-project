import { Card, TextInput, Button, Group } from "@mantine/core";
import { IconSearch, IconFilter } from "@tabler/icons-react";
import styles from "./styles.module.css";

interface SearchFilterProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  categories: string[];
}

export function SearchFilter({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
}: SearchFilterProps) {
  return (
    <Card
      p="xl"
      radius="md"
      className="glassmorphism"
      style={{ marginTop: "-60px", marginBottom: "40px" }}
    >
      <div className={styles["search-filter-container"]}>
        <TextInput
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
          leftSection={<IconSearch size={16} style={{ color: "#004AAD" }} />}
          size="md"
          className={styles["search-input"]}
        />
        <div className={styles["filter-buttons"]}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "filled" : "light"}
              color={selectedCategory === category ? "blue" : "gray"}
              onClick={() => setSelectedCategory(category)}
              leftSection={category === "all" ? null : <IconFilter size={16} />}
              className={styles["filter-button"]}
              size="sm"
            >
              {category === "all" ? "All" : category}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}
