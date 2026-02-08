import { Card } from "../components/ui/card";
import { techstack } from "../mocks/data.json";
import TechStackIcon from "../icons/techstack";
import type { TechStackItem } from "../types/types";
import { Link } from "react-router-dom";

const TechStack = () => {
  return (
    <Card className="gap-2 overflow-hidden">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <TechStackIcon />
          <h2 className="font-bold text-xl">Tech Stack</h2>
        </div>
        <Link to="/techstack">
          See all <span className="text-gray-400">&gt;</span>
        </Link>
      </div>
      {techstack.slice(0, 3).map(({ category, tools }: TechStackItem) => (
        <div key={category} className="flex flex-col gap-2">
          <h3 className="font-bold">{category}</h3>
          <div className="flex gap-1 p-0 flex-wrap">
            {tools.slice(0, 5).map((tool) => (
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