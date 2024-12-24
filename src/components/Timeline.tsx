import React from "react";

interface TimelineItem {
  title: string;
  subtitle?: string;
  startDate: string;
  endDate: string;
  description: string[];
  tags?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
  mainColor: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, mainColor }) => {
  function calculateDuration(
    startDate: string,
    endDate: string
  ): React.ReactNode {
    // Parse the input dates
    const parseDate = (date: string) => {
      const parts = date.split("-");
      const year = parseInt(parts[0], 10);
      const month = parts.length > 1 ? parseInt(parts[1], 10) - 1 : 0; // Default month to January (0)
      return new Date(year, month);
    };

    const start = parseDate(startDate);
    const end = parseDate(endDate);

    // Calculate difference in years and months
    const yearsDiff = end.getFullYear() - start.getFullYear();
    let monthsDiff = end.getMonth() - start.getMonth();

    // Adjust if monthsDiff is negative
    if (monthsDiff < 0) {
      monthsDiff += 12;
    }

    return (
      <>
        {yearsDiff > 0 &&
          ` ( ${yearsDiff} ${yearsDiff === 1 ? "year" : "years"} `}
        {monthsDiff > 0
          ? `${yearsDiff < 0 ? "(" : ""}  ${monthsDiff} ${
              monthsDiff === 1 ? "month" : "months )"
            }`
          : yearsDiff > 0 && ")"}
      </>
    );
  }

  return (
    <div className="">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative pl-8 pb-4  border-l-2 border-current"
          style={{ color: mainColor }}
        >
          <div className="absolute w-4 h-4 bg-current rounded-full -left-[9px] top-1" />
          <div className="mb-1 text-black">
            <div className="flex justify-between items-baseline">
              <h3
                className="text-lg font-bold mb-1"
                style={{ color: mainColor }}
              >
                {item.title}
              </h3>
              <span className="text-sm">
                {item.startDate} - {item.endDate}{" "}
                {calculateDuration(item.startDate, item.endDate)}
              </span>
            </div>
            {item.subtitle && (
              <div className="text-sm font-bold">{item.subtitle}</div>
            )}
          </div>
          <p className="text-sm mb-2  text-black">
            {item.description.map((desc) => (
              <li>{desc}</li>
            ))}
          </p>
          {item.tags && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  style={{ color: mainColor }}
                  className="px-2 py-1 text-xs rounded-full bg-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
