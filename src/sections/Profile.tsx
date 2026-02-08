import react from "@/assets/react.svg";
import { Button } from "../components/ui/button";
import type { DarkToggleProps } from "../types/types";
import LocationIcon from "../icons/location";
import EmailIcon from "../icons/email";
import ResumeIcon from "../icons/resume";
import sunIcon from "@/assets/sun.svg";
import moonIcon from "@/assets/moon.svg";
import verifiedIcon from "@/assets/verified.svg";
import { profile } from "../mocks/data.json";

const DarkToggle = ({ isDark, toggleIsDark }: DarkToggleProps) => {
  return (
    <Button
      variant="outline"
      className="w-10 aspect-square p-3"
      onClick={toggleIsDark}
    >
      <img className="w-full" src={isDark ? moonIcon : sunIcon} alt="" />
    </Button>
  );
};

const Img = () => {
  return (
    <img
      className="border rounded-xl h-40 w-40"
      src={react}
      alt="profile placeholder"
    />
  );
};

const Details = ({ isDark, toggleIsDark }: DarkToggleProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex justify-between w-full">
        <div className="flex gap-2 items-center">
          <p className="font-bold text-lg tracking-tight sm:tracking-normal sm:text-2xl">
            {profile.name}
          </p>
          <img className="w-4" src={verifiedIcon} alt="" />
        </div>
        <DarkToggle isDark={isDark} toggleIsDark={toggleIsDark} />
      </div>
      <p className="text-gray-500 text-xs flex items-center gap-1 sm:text-sm">
        <LocationIcon />
        {profile.address}
      </p>
      <p className="text-xs sm:text-[1.125rem]">{profile.role}</p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button size="sm">
          <ResumeIcon />
          View Resume
        </Button>
        <Button size="sm" variant="outline">
          <EmailIcon /> Send Email
        </Button>
      </div>
    </div>
  );
};

const Profile = ({ isDark, toggleIsDark }: DarkToggleProps) => {
  return (
    <div className="max-w-250 flex justify-between items-start mx-auto">
      <div className="flex items-center gap-4 w-full">
        <Img />
        <Details isDark={isDark} toggleIsDark={toggleIsDark} />
      </div>
    </div>
  );
};

export default Profile;
