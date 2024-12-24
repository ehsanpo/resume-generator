import React from "react";
import { Download, Languages } from "lucide-react";

interface ToolbarProps {
  onColorChange: (color: string) => void;
  onLanguageChange: (lang: "en" | "sv") => void;
  onExportPDF: () => void;
  currentLanguage: "en" | "sv";
}

export const Toolbar: React.FC<ToolbarProps> = ({
  onColorChange,
  onLanguageChange,
  onExportPDF,
  currentLanguage,
}) => {
  const colors = ["#0891b2", "#4f46e5", "#059669", "#db2777", "#d97706"];

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 print:hidden">
      <div className="max-w-4xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => onColorChange(color)}
                className="w-6 h-6 rounded-full border-2 border-gray-200"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          <button
            onClick={() =>
              onLanguageChange(currentLanguage === "en" ? "sv" : "en")
            }
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <Languages className="w-5 h-5" />
          </button>
        </div>

        <button
          onClick={onExportPDF}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <Download className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
