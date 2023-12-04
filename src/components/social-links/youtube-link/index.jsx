import YouTubeSVG from "../../../assets/images/icons/music-platforms/youtube.svg";

export const YoutubeLogo = () => {
  return (
    <a
      className="transition-all duration-100 p-3 md:hover:-translate-y-2"
      href="https://www.youtube.com/@officialjohnwhite"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={YouTubeSVG}
        className="transition-all duration-75 h-16 w-auto hover:scale-110 hover:fill-[#FF0000]"
        alt="youtube-alt"
      />
    </a>
  );
};

export default YoutubeLogo;
