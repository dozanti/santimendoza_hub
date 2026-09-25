import { profile, projects, site, social } from "./data/profile";

const personId = `${site.url}#person`;
const websiteId = `${site.url}#website`;

export function structuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: profile.brand,
        alternateName: profile.name,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}#profile`,
        url: site.url,
        name: `${profile.brand} | ${profile.name} — ${profile.role}`,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
        inLanguage: "en",
      },
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        alternateName: profile.brand,
        jobTitle: profile.role,
        description: profile.tagline,
        url: site.url,
        image: `${site.url}apple-touch-icon.png`,
        email: `mailto:${social.email}`,
        knowsAbout: [...profile.languages, ...profile.focus],
        sameAs: [social.github, social.linkedin, social.x],
      },
      ...projects.map((project) => ({
        "@type": "SoftwareSourceCode",
        "@id": `${site.url}#project-${project.id}`,
        name: project.name,
        description: project.description,
        codeRepository: project.repo,
        ...(project.languages.length > 0 && { programmingLanguage: project.languages }),
        ...(project.live && { url: project.live }),
        author: { "@id": personId },
      })),
    ],
  };
}
