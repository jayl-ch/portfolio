export interface DarkToggleProps {
  isDark: boolean;
  toggleIsDark?: () => void;
}

export interface JourneyItem {
  title: string;
  description: string;
  year: number;
}

export interface TechStackItem {
  category: string;
  tools: string[];
}
