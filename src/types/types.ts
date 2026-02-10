export type Theme = "light" | "dark";

export type ThemeType = {
  theme: Theme;
  toggleTheme: () => void;
};

export interface JourneyItem {
  title: string;
  description: string;
  year: number;
  current?: boolean;
}

export interface TechStackItem {
  category: string;
  tools: string[];
}
