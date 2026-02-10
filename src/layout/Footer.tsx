import { profile } from "../mocks/data.json";

const Footer = () => {
  return (
    <footer className="mt-5 animate-appear">
      <div className="max-w-250 mx-auto text-center border-t py-5">
        &copy; 2026 {profile.name}. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
