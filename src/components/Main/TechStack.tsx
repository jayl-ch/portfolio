import { Card } from "../ui/card";
import { techstack } from "@/mocks/data";
import TechStackIcon from "../../icons/techstack";
import type { TechStackItem } from "@/types/types";

const TechStack = () => {
  return (
    <Card className="gap-2">
      <div className="flex items-center gap-2">
        <TechStackIcon />
        <h2 className="font-bold text-xl">Tech Stack</h2>
      </div>
      {techstack.map(({ category, tools }: TechStackItem) => (
        <div key={category} className="flex flex-col gap-2">
          <h3 className="font-bold">{category}</h3>
          <div className="flex gap-1 p-0 flex-wrap">
            {tools.map((tool) => (
              <p
                key={tool}
                className="text-xs inline border rounded-sm px-2 py-1"
              >
                {tool}
              </p>
            ))}
          </div>
        </div>
      ))}
    </Card>
  );
};

export default TechStack;
