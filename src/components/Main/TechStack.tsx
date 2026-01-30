import { Card } from "../ui/card";
import { techstack } from "@/mocks/data";
import techIcon from "@/assets/techstack.svg";
import type { TechStackItem } from "@/types/types";

const TechStack = () => {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-2">
        <img className="w-4" src={techIcon} alt="" />
        <h2 className="font-bold text-xl">Tech Stack</h2>
      </div>
      {techstack.map(({ category, tools }: TechStackItem) => (
        <div key={category} className="flex flex-col gap-2">
          <h3 className="font-bold">{category}</h3>
          <div className="flex gap-1 p-0">
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
