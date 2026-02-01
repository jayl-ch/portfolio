import react from "@/assets/react.svg";
import { Button } from "../ui/button";
import type { DarkToggleProps } from "@/types/types";
import LocationIcon from "../../icons/location";
import EmailIcon from "../../icons/email";
import ResumeIcon from "@/icons/resume";
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

const Details = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className={`font-bold text-xl flex items-center gap-2`}>
        {profile.name} <img className="w-4" src={verifiedIcon} alt="" />
      </p>
      <p className="text-gray-500 flex items-center gap-1">
        <LocationIcon />
        {profile.address}
      </p>
      <p className={``}>{profile.role}</p>
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

const Profile = ({ isDark, toggleIsDark }: DarkToggleProps) => {
  return (
    <div className="max-w-250 flex justify-between items-start mx-auto">
      <div className="flex items-center gap-4">
        <Img />
        <Details />
      </div>
      <DarkToggle isDark={isDark} toggleIsDark={toggleIsDark} />
    </div>
  );
};

export default Profile;
