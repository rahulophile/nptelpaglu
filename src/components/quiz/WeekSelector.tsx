import { useRef, useEffect } from "react";

type WeekSelectorProps = {
  totalWeeks: number;
  selectedWeek: number;
  onSelectWeek: (week: number) => void;
};

const WeekSelector = ({ totalWeeks, selectedWeek, onSelectWeek }: WeekSelectorProps) => {
  const weeks = Array.from({ length: totalWeeks }, (_, i) => i + 1);

  // Store refs for each week item
  const weekRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Auto scroll to selected week
  useEffect(() => {
    const active = weekRefs.current[selectedWeek - 1];
    if (active?.scrollIntoView) {
      active.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [selectedWeek]);

  return (
    <div className="bg-white shadow-sm flex items-center p-1.5">
      <div
        className={`
          flex-grow flex items-center gap-2 overflow-x-auto py-2 px-2 scrollbar-hide
          md:flex-wrap md:justify-center md:overflow-x-visible md:gap-3
        `}
      >
        {weeks.map((week, index) => (
          <div
            key={week}
            ref={(el) => { weekRefs.current[index] = el; }} // ✅ void return
            onClick={() => onSelectWeek(week)}
            className="cursor-pointer"
          >
            <div
              className={`
                w-12 h-12 rounded-lg flex flex-col items-center justify-center
                flex-shrink-0 transition-all duration-200
                ${
                  selectedWeek === week
                    ? "bg-purple-600 text-white shadow-lg scale-105"
                    : "bg-gray-200 text-gray-600 hover:bg-purple-100 hover:text-purple-600"
                }
              `}
            >
              <span className="text-[10px] font-medium opacity-70">WEEK</span>
              <span className="font-bold text-base leading-tight">{week}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekSelector;
