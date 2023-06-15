import { ReactComponent as InstagramSVG } from "../../../assets/images/icons/instagram-logo.svg";

const InstagramLogo = () => {
  return (
    <a
      className="transition-all duration-100 p-3 md:hover:-translate-y-2"
      href="https://instagram.com/johnwhitesmusic"
      target="_blank"
      rel="noopener noreferrer"
    >
      <InstagramSVG className="transition ease-in-out duration-100 h-16 w-auto rounded-[15px] bg-white hover:fill-white hover:scale-110 hover:bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf]" />
    </a>
  );
}

export default InstagramLogo;
