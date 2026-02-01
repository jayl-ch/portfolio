import { Card } from "../ui/card";
import { about } from "@/mocks/data";
import AboutIcon from "@/icons/about";

const AboutMe = () => {
  return (
    <Card className="gap-2">
      <div className="flex gap-2 items-center">
        <AboutIcon />
        <h2 className="font-bold text-xl">About Me</h2>
      </div>
      <p>{about}</p>
    </Card>
  );
};

export default AboutMe;
