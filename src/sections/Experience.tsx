import { Card } from "../components/ui/card";
import BriefCase from "../icons/briefcase";
import type { JourneyItem } from "../types/types";
import { journey } from "../mocks/data.json";
import { useTheme } from "../hooks/useDarkTheme";

const Experience = () => {
  const { theme } = useTheme();

  const currColor = theme === "dark" ? "bg-white" : "bg-black";
  const notCurr = theme === "dark" ? "bg-black border-2" : "bg-white border-2";

  return (
    <Card className="gap-3 md:row-span-2">
      <div className=" flex gap-2 items-center">
        <BriefCase />
        <h2 className="font-bold text-xl">Experience</h2>
      </div>
      <div>
        <ul className="flex flex-col gap-2 relative">
          {journey.map(({ title, description, year, current }: JourneyItem) => (
            <li key={title} className="flex gap-2 w-full items-start">
              <div className="absolute flex flex-col items-center h-full w-[.05rem] left-1 bg-gray-500 mt-0.5">
                <div
                  className={`w-3 h-3 rounded-full border-gray-500 ${current ? currColor : notCurr}`}
                ></div>
              </div>
              <div className="flex ml-5 flex-col gap-2 w-full">
                <h3 className="font-bold text-sm">{title}</h3>
                <div className="flex justify-between items-center text-xs">
                  <p className="">{description}</p>
                  <p className="border rounded-full px-2 py-1">{year}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default Experience;
