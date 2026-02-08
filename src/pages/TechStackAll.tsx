import { Link } from "react-router-dom";
import { techstack } from "../mocks/data.json";
import type { TechStackItem } from "../types/types";

const TechStackAll = () => {
  return (
    <div className="max-w-250 mx-auto flex flex-col gap-5 animate-appear">
      <div className="flex gap-2 items-center">
        <Link to="/">
          <span className="text-gray-400">&lt;</span> Back to home
        </Link>
        <h2 className="font-bold text-2xl">Tech Stack</h2>
      </div>
      {techstack.map(({ category, tools }: TechStackItem) => (
        <div key={category} className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">{category}</h3>
          <div className="flex gap-1 p-0 flex-wrap">
            {tools.map((tool) => (
              <p
                key={tool}
                className="text-sm inline border-2 rounded-sm px-2 py-1"
              >
                {tool}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStackAll;
