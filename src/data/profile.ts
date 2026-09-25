export type ProjectCategory = "mobile" | "desktop" | "library" | "game" | "misc";

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  languages: string[];
  category: ProjectCategory;
  repo: string;
  live?: string;
  liveLabel?: string;
}

export const site = {
  url: "https://dozanti.com/",
};

export const profile = {
  brand: "Dozanti",
  monogram: "DZ",
  name: "Santiago Mendoza",
  role: "Backend Engineer",
  tagline: "APIs, systems, and small tools that solve a real problem for someone.",
  bio: "I write backend systems and the tools around them \u2014 APIs, small libraries, the occasional Android app. Most of what\u2019s below started as something I needed and kept because it turned out useful. Off-screen: video games, ping pong, and more push-ups than my back asks for.",
  languages: ["Java", "Rust", "C#", "C/C++", "Python"],
  focus: ["Backend", "API design", "Android"],
};

export const social = {
  github: "https://github.com/dozanti",
  linkedin: "https://www.linkedin.com/in/dozanti/",
  x: "https://x.com/dozanti",
  xHandle: "@dozanti",
  email: "santi@dozanti.com",
  emailAlt: "santiagoyasno@gmail.com",
};

export const projects: Project[] = [
  {
    id: "matema",
    name: "MateMa",
    description: "Android app that walks high schoolers through common math operations, step by step.",
    tech: ["Unity", "C#", "Android"],
    languages: ["C#"],
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
    languages: ["C#"],
    category: "desktop",
    repo: "https://github.com/dozanti/matrixma",
  },
  {
    id: "apologuest",
    name: "ApoloGuest",
    description: "Console number-guessing game with a handful of extra rules to keep it interesting.",
    tech: ["C#", "Console"],
    languages: ["C#"],
    category: "game",
    repo: "https://github.com/dozanti/apolo-guesser",
  },
  {
    id: "muxicmatchapi",
    name: "MuxicMatchApi",
    description: "C# library wrapping the Musixmatch API for track info and lyrics.",
    tech: ["C#", "Library"],
    languages: ["C#"],
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
    languages: ["C#"],
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
    languages: [],
    category: "misc",
    repo: "https://github.com/dozanti/junkcode",
  },
];
