import React from "react";
import { Timeline } from "./Timeline";
import type { Resume } from "../types/resume";
import { Section } from "./Section";
import { Tag } from "./Tag";
import { translations, type Language } from "../translations";

interface MainProps {
  data: Resume;
  mainColor: string;
  language: Language;
}

export const Main: React.FC<MainProps> = ({ data, mainColor, language }) => {
  const t = translations[language].sections;

  return (
    <main className="lg:col-span-2 space-y-8">
      <Section title={t.experience} mainColor={mainColor}>
        <Timeline
          items={data.experience.map((exp) => ({
            title: exp.company,
            subtitle: exp.position,
            startDate: exp.startDate,
            endDate: exp.endDate,
            description: exp.description,
            tags: exp.tags,
          }))}
          mainColor={mainColor}
        />
      </Section>

      <Section title={t.education} mainColor={mainColor}>
        <Timeline
          items={data.education.map((edu) => ({
            title: edu.institution,
            subtitle: edu.degree,
            startDate: edu.startDate,
            endDate: edu.endDate,
            description: edu.description,
          }))}
          mainColor={mainColor}
        />
      </Section>

      {/* <Section title={t.certificates} mainColor={mainColor}>
        <ul className="space-y-2">
          {data.certificates.map((cert, index) => (
            <li key={index} className="flex justify-between items-baseline">
              <span className="font-medium">{cert.name}</span>
              <span className="text-sm text-gray-600">{cert.date}</span>
            </li>
          ))}
        </ul>
      </Section> */}

      <Section title={t.skills} mainColor={mainColor}>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <Tag key={index}>{skill}</Tag>
          ))}
        </div>
      </Section>

      <Section title={t.languages} mainColor={mainColor}>
        <div className="flex flex-wrap gap-2">
          {data.languages.map((lang, index) => (
            <Tag key={index}>{lang}</Tag>
          ))}
        </div>
      </Section>
    </main>
  );
};
