import { Card } from "../ui/card";
import aboutIcon from "@/assets/about.svg";
import { about } from "@/mocks/data";

const AboutMe = () => {
  return (
    <Card className="p-4 flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <img className="w-4" src={aboutIcon} alt="" />
        <h2 className="font-bold text-xl">About Me</h2>
      </div>
      <p>{about}</p>
    </Card>
  );
};

export default AboutMe;
