// import { footerData } from "../../api/getFooter";
import { Link } from "react-router-dom";
import WhiteNoiseLogo from "../../assets/images/icons/white-noise-records.svg";
import { SocialLinks } from "../social-links";

const localFooterData = {
  copyrightName: "nathaniel bowman",
  copyrightNameLink: "https://dev.actuallyitsnathaniel.com",
};

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full">
      <div className="mx-auto max-w-6xl p-6">
        {/* Top tier: wordmark anchor (left) + socials (right) */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-end md:justify-between">
          <a
            className="block"
            href="https://www.instagram.com/whitenoisercrds/"
            aria-label="white-noise-ig-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="h-14 w-auto md:h-16"
              src={WhiteNoiseLogo}
              alt="White Noise Records"
            />
          </a>
          <SocialLinks />
        </div>

        {/* Statement tier: AI stance as a deliberate line, link in accent */}
        <div className="mt-6 border-t border-white/10 pt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-center text-sm leading-relaxed text-white/70 md:text-start">
            John White&apos;s music is not licensed for AI or machine learning
            training. Any violation of this policy will be pursued to the
            fullest extent of the law.{" "}
            <Link className="link whitespace-nowrap" to="/usage-and-ai-policy">
              Usage &amp; AI Policy
            </Link>
          </p>
          <p className="text-center text-xs text-white/50 md:whitespace-nowrap md:text-end">
            copyright © {new Date().getFullYear()}. powered by{" "}
            <a
              className="link"
              href={localFooterData.copyrightNameLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              {localFooterData.copyrightName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
