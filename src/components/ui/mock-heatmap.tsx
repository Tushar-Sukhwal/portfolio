"use client";

import { cn } from "@/lib/utils";

interface MockHeatmapProps {
  className?: string;
}

export function MockHeatmap({ className }: MockHeatmapProps) {
  const dayLabels = ["mon", "", "wed", "", "fri", "", "sun"];
  const months = [
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
  ];

  // Generate a 7x53 grid of empty cells
  const renderGrid = () => {
    // Generate weeks (53 columns)
    return Array.from({ length: 53 }, (_, weekIndex) => (
      <div key={`week-${weekIndex}`} className="flex flex-col gap-1">
        {Array.from({ length: 7 }, (_, dayIndex) => (
          <div
            key={`day-${weekIndex}-${dayIndex}`}
            className="w-4 h-4 rounded-md bg-[#1d242c]"
          />
        ))}
      </div>
    ));
  };

  return (
    <div className={cn("w-full text-xs", className)}>
      <div className="flex justify-between items-center mb-2 text-muted-foreground">
        <div className="flex items-center gap-1">
          <span>last 12 months</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
        <span>contributions</span>
      </div>

      <div className="flex">
        <div className="flex flex-col justify-between mr-2 text-muted-foreground">
          {dayLabels.map((day, index) => (
            <div key={`label-${index}`} className="h-4 flex items-center">
              {day}
            </div>
          ))}
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-1">{renderGrid()}</div>

          <div className="flex mt-1 text-muted-foreground">
            {months.map((month, index) => (
              <div
                key={`month-${index}`}
                className="text-center"
                style={{
                  width: "4.5rem",
                }}
              >
                {month}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
