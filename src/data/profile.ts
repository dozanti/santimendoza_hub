export type ProjectCategory = "mobile" | "desktop" | "library" | "game" | "misc";

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  repo: string;
  live?: string;
  liveLabel?: string;
}

export const profile = {
  brand: "Dozanti",
  monogram: "DZ",
  name: "Santiago Mendoza",
  role: "Backend Engineer",
  tagline: "APIs, systems, and small tools that solve a real problem for someone.",
  bio: "I write backend systems and the tools around them \u2014 APIs, small libraries, the occasional Android app. Most of what's below started as something I needed and kept because it turned out useful. Off-screen: video games, ping pong, and more push-ups than my back asks for.",
  cvUrl: "/cv.pdf",
  skills: ["Java", "Rust", "C#", "C/C++", "Python", "Android", "Backend", "API Design"],
};

export const social = {
  github: "https://github.com/dozanti",
  linkedin: "https://www.linkedin.com/in/dozanti/",
  email: "santimendoza@dozanti.com",
  emailAlt: "santiagoyasno@gmail.com",
};

export const projects: Project[] = [
  {
    id: "matema",
    name: "MateMa",
    description: "Android app that walks high schoolers through common math operations, step by step.",
    tech: ["Unity", "C#", "Android"],
    category: "mobile",
    repo: "https://github.com/dozanti/matema",
    live: "https://github.com/dozanti/MateMa/releases",
    liveLabel: "Releases",
  },
  {
    id: "matrixma",
    name: "MatrixMa",
    description: "Desktop app for solving matrix operations and systems of equations.",
    tech: ["C#", "Desktop"],
    category: "desktop",
    repo: "https://github.com/dozanti/matrixma",
  },
  {
    id: "apologuest",
    name: "ApoloGuest",
    description: "Console number-guessing game with a handful of extra rules to keep it interesting.",
    tech: ["C#", "Console"],
    category: "game",
    repo: "https://github.com/dozanti/apolo-guesser",
  },
  {
    id: "muxicmatchapi",
    name: "MuxicMatchApi",
    description: "C# library wrapping the Musixmatch API for track info and lyrics.",
    tech: ["C#", "Library"],
    category: "library",
    repo: "https://github.com/dozanti/MuxicMatchApi",
    live: "https://www.nuget.org/packages/MuxicMatchApi",
    liveLabel: "NuGet",
  },
  {
    id: "musiclyrics",
    name: "MusicLyrics",
    description: "C# library for fetching song lyrics from a single call.",
    tech: ["C#", "Library"],
    category: "library",
    repo: "https://github.com/dozanti/musiclyrics",
    live: "https://www.nuget.org/packages/musiclyrics",
    liveLabel: "NuGet",
  },
  {
    id: "junkcode",
    name: "JunkCode",
    description: "Where snippets, half-finished ideas, and test code go to live.",
    tech: ["Various"],
    category: "misc",
    repo: "https://github.com/dozanti/junkcode",
  },
];
