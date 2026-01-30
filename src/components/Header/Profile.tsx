import react from "@/assets/react.svg";
import { Button } from "../ui/button";
import type { DarkToggleProps } from "@/types/types";
import locationPin from "@/assets/location-pin.svg";
import emailIcon from "@/assets/email.svg";
import resumeIcon from "@/assets/resume.svg";
import sunIcon from "@/assets/sun.svg";
import moonIcon from "@/assets/moon.svg";
import verifiedIcon from "@/assets/verified.svg";
import { profile } from "@/mocks/data";

const Img = () => (
  <img
    className="border rounded-xl h-35 w-35"
    src={react}
    alt="profile placeholder"
  />
);

const Details = ({ isDark }: DarkToggleProps) => {
  return (
    <div className="flex flex-col gap-1">
      <p
        className={`font-bold text-xl flex items-center gap-2 ${isDark ? "text-white" : "text-black"}`}
      >
        {profile.name} <img className="w-4" src={verifiedIcon} alt="" />
      </p>
      <p className="text-gray-500 flex items-center gap-1">
        <img className="inline w-4" src={locationPin} alt=" " />
        {profile.address}
      </p>
      <p className={`${isDark ? "text-white" : "text-black"}`}>
        {profile.role}
      </p>
      <div className="flex gap-2">
        <Button size="sm">
          <img className="w-4" src={resumeIcon} alt=" " /> View Resume
        </Button>
        <Button size="sm" variant="outline">
          <img className="w-4" src={emailIcon} alt=" " /> Send Email
        </Button>
      </div>
    </div>
  );
};

const DarkToggle = ({ isDark, toggleIsDark }: DarkToggleProps) => {
  return (
    <Button
      variant={isDark ? "default" : "outline"}
      className="w-10 aspect-square p-3"
      onClick={toggleIsDark}
    >
      <img className="w-full" src={isDark ? moonIcon : sunIcon} alt="" />
    </Button>
  );
};

const Profile = ({ isDark, toggleIsDark }: DarkToggleProps) => {
  return (
    <div className="max-w-250 flex justify-between items-start mx-auto">
      <div className="flex items-center gap-4">
        <Img />
        <Details isDark={isDark} />
      </div>
      <DarkToggle isDark={isDark} toggleIsDark={toggleIsDark} />
    </div>
  );
};

export default Profile;
