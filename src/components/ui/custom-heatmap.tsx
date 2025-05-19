"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface MonthLabel {
  month: string;
  index: number;
}

interface CustomHeatmapProps {
  username: string;
  className?: string;
}

export function CustomHeatmap({ username, className }: CustomHeatmapProps) {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const dayLabels = ["mon", "", "wed", "", "fri", "", "sun"];
  const months: MonthLabel[] = [
    { month: "jun", index: 5 },
    { month: "jul", index: 6 },
    { month: "aug", index: 7 },
    { month: "sep", index: 8 },
    { month: "oct", index: 9 },
    { month: "nov", index: 10 },
    { month: "dec", index: 11 },
    { month: "jan", index: 0 },
    { month: "feb", index: 1 },
    { month: "mar", index: 2 },
    { month: "apr", index: 3 },
    { month: "may", index: 4 },
  ];

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true);

        // Use our internal API route to avoid CORS issues
        const apiUrl = `/api/github/contributions?username=${username}`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch contributions");
        }

        const data = await response.json();

        // Process data
        let total = 0;
        const processedData: ContributionDay[] = [];

        if (data.contributions) {
          // Map the contributions to our format
          for (const day of Object.keys(data.contributions)) {
            const count = data.contributions[day];
            total += count;

            // Determine level (0-4) based on count
            let level: 0 | 1 | 2 | 3 | 4 = 0;
            if (count > 0 && count <= 3) level = 1;
            else if (count <= 6) level = 2;
            else if (count <= 9) level = 3;
            else if (count > 9) level = 4;

            processedData.push({
              date: day,
              count,
              level,
            });
          }
        }

        setContributions(processedData);
        setTotalCount(total);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub contributions:", error);
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username]);

  // Create a 7x53 grid (days of week x weeks in year)
  const renderGrid = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center h-32">
          <div className="flex flex-col items-center gap-2">
            <div className="h-5 w-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            <div className="text-sm text-muted-foreground">
              Loading contributions...
            </div>
          </div>
        </div>
      );
    }

    // Generate weeks (52 weeks in a year + buffer)
    const weeks = Array.from({ length: 53 }, (_, weekIndex) => {
      return (
        <div key={`week-${weekIndex}`} className="flex flex-col gap-1">
          {Array.from({ length: 7 }, (_, dayIndex) => {
            // Calculate the date for this cell
            const oneYearAgo = new Date();
            oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
            const cellDate = new Date(oneYearAgo);
            cellDate.setDate(cellDate.getDate() + weekIndex * 7 + dayIndex);

            // Format as YYYY-MM-DD for lookup
            const dateKey = cellDate.toISOString().split("T")[0];

            // Find contribution data for this date
            const dayData = contributions.find((d) => d.date === dateKey);
            const level = dayData?.level || 0;

            return (
              <div
                key={`day-${weekIndex}-${dayIndex}`}
                className={cn(
                  "w-4 h-4 rounded-md",
                  level === 0 && "bg-[#1d242c]",
                  level === 1 && "bg-[#0e6e6a]",
                  level === 2 && "bg-[#0d9e99]",
                  level === 3 && "bg-[#0ac2bd]",
                  level === 4 && "bg-[#07eae4]"
                )}
                title={`${dayData?.count || 0} contributions on ${dateKey}`}
              />
            );
          })}
        </div>
      );
    });

    return weeks;
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
        <div className="flex items-center justify-between gap-1">
          <span>{totalCount} contributions</span>
          <div className="flex items-center ml-4">
            <span>less</span>
            <div className="flex gap-1 mx-2">
              <div className="w-4 h-4 rounded-md bg-[#1d242c]" />
              <div className="w-4 h-4 rounded-md bg-[#0e6e6a]" />
              <div className="w-4 h-4 rounded-md bg-[#0d9e99]" />
              <div className="w-4 h-4 rounded-md bg-[#0ac2bd]" />
            </div>
            <span>more</span>
          </div>
        </div>
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
                className="w-16 text-center"
                style={{
                  marginLeft: index === 0 ? 0 : month.index === 0 ? "12px" : 0,
                }}
              >
                {month.month}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
