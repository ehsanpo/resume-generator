import React from "react";
import type { Resume } from "../types/resume";
import { translations, type Language } from "../translations";
import { MapPin, Mail, Globe, Linkedin } from "lucide-react";

interface AsideProps {
  data: Resume["basics"];
  mainColor: string;
  language: Language;
}

export const Aside: React.FC<AsideProps> = ({ data, mainColor, language }) => {
  const t = translations[language].sections;

  return (
    <aside className=" space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2" style={{ color: mainColor }}>
          {t.about}
        </h2>
        <p className="text-sm">{data.about}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2" style={{ color: mainColor }}>
          {t.contact}
        </h2>
        <div className="space-y-2 text-sm">
          <p className="flex items-center gap-2">
            <MapPin size={16} style={{ color: mainColor }} />
            {data.location}
          </p>
          <p className="flex items-center gap-2">
            <Mail size={16} style={{ color: mainColor }} />
            {data.email}
          </p>
          {/* <a
            href={data.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Globe size={16} style={{ color: mainColor }} />
            {data.website}
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Linkedin size={16} style={{ color: mainColor }} />
            {data.linkedin}
          </a> */}
        </div>
      </div>
    </aside>
  );
};
