
import React from "react";

interface ContributionChartProps {
  data: number[][];
}

const ContributionChart: React.FC<ContributionChartProps> = ({ data }) => {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  
  const days = ["", "Mon", "", "Wed", "", "Fri", ""];

  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex flex-col min-w-max">
        <div className="flex text-xs text-gray-400 mb-1">
          <div className="w-10"></div>
          {months.map((month, index) => (
            <div key={index} className="w-14 text-center">{month}</div>
          ))}
        </div>
        <div className="flex">
          <div className="flex flex-col h-full justify-around pr-2">
            {days.map((day, index) => (
              <div key={index} className="h-4 text-xs text-gray-400">{day}</div>
            ))}
          </div>
          <div className="grid grid-flow-col gap-[3px]">
            {data.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col">
                {week.map((value, dayIndex) => (
                  <div 
                    key={dayIndex} 
                    className={`contribution-cell level-${value}`}
                    title={`${value} contributions`}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center text-xs text-gray-400 mt-2">
        <span className="mr-2">Less</span>
        <div className="contribution-cell level-0"></div>
        <div className="contribution-cell level-1"></div>
        <div className="contribution-cell level-2"></div>
        <div className="contribution-cell level-3"></div>
        <div className="contribution-cell level-4"></div>
        <span className="ml-2">More</span>
      </div>
    </div>
  );
};

export default ContributionChart;
