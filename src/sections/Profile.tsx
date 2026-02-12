import react from "@/assets/react.svg";
import { Button } from "../components/ui/button";
import { useTheme } from "../hooks/useDarkTheme";
import LocationIcon from "../icons/location";
import EmailIcon from "../icons/email";
import ResumeIcon from "../icons/resume";
import sunIcon from "@/assets/sun.svg";
import moonIcon from "@/assets/moon.svg";
import verifiedIcon from "@/assets/verified.svg";
import { profile } from "../mocks/data.json";

const DarkToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      className="w-10 aspect-square p-3"
      onClick={toggleTheme}
    >
      <img
        className="w-full"
        src={theme === "dark" ? moonIcon : sunIcon}
        alt=""
      />
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

const Details = () => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex justify-between w-full">
        <div className="flex gap-2 items-center">
          <p className="font-bold text-lg tracking-tight sm:tracking-normal sm:text-2xl">
            {profile.name}
          </p>
          <img className="w-4" src={verifiedIcon} alt="" />
        </div>
        <DarkToggle />
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

const Profile = () => {
  return (
    <div className="max-w-220 flex justify-between items-start mx-auto">
      <div className="flex items-center gap-4 w-full">
        <Img />
        <Details />
      </div>
    </div>
  );
};

export default Profile;
