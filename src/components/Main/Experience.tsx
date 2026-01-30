import { Card } from "../ui/card";
import briefcase from "@/assets/briefcase.svg";
import type { JourneyItem } from "@/types/types";
import { journey } from "@/mocks/data";

const Experience = () => {
  return (
    <Card className="p-4 flex flex-col gap-2 md:row-span-2">
      <div className=" flex gap-2 items-center">
        <img className="w-4" src={briefcase} alt="" />
        <h2 className="font-bold text-xl">Experience</h2>
      </div>
      <div>
        <ul className="flex flex-col gap-2">
          {journey.map(({ title, description, year }: JourneyItem) => (
            <li key={title} className="flex flex-col gap-2">
              <h3 className="font-bold text-sm">{title}</h3>
              <div className="flex justify-between items-center text-xs">
                <p className="">{description}</p>
                <p className="border rounded-full px-2 py-1">{year}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default Experience;
