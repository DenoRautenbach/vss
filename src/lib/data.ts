export type NewsItem = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  image: string;
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: "Annual Science Fair Winners Announced",
    date: "April 15, 2026",
    excerpt: "Congratulations to our senior students who took home the top prizes at the regional science and engineering fair this weekend.",
    category: "Academics",
    image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Varsity Soccer Team Reaches State Finals",
    date: "April 12, 2026",
    excerpt: "A thrilling overtime victory has secured our spot in the state championship game. Come support the team this Friday!",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1518605368461-1ee7e1613286?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Spring Arts Festival Opens Next Week",
    date: "April 10, 2026",
    excerpt: "Join us for a week-long celebration of student creativity, featuring art exhibitions, musical performances, and theater productions.",
    category: "Arts",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=600&q=80"
  }
];

export const SUBJECTS: string[] = [
  "Mathematics", "Sciences", "English Literature", "History & Geography", 
  "Foreign Languages", "Computer Science", "Physical Education", "Fine Arts"
];
