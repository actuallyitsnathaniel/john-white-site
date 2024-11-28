// import { footerData } from "../../api/getFooter";
import WhiteNoiseLogo from "../../assets/images/icons/white-noise-records.svg";

const localFooterData = {
  copyrightName: "nathaniel bowman",
  copyrightNameLink: "https://dev.actuallyitsnathaniel.com",
};

const Footer = () => {
  return (
    <footer className="grid bg-black text-md text-white w-screen pb-3 bottom-0">
      <a
        className="flex justify-center pt-5 -mb-5"
        href="https://www.instagram.com/whitenoisercrds/"
        aria-label="white-noise-ig-link"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={WhiteNoiseLogo} />
      </a>
      <div className="text-end pr-4">
        copyright © {new Date().getFullYear()}. powered by&nbsp;
        <a
          className="underline underline-offset-8"
          href={`${localFooterData.copyrightNameLink}`}
        >
          {localFooterData.copyrightName}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
