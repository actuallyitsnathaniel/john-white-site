import { ReactComponent as AppleMusicSVG } from "../../../assets/images/icons/music-platforms/apple-music.svg";

function AppleMusicLink() {
  return (
    <a
      className="transition-all duration-100 p-3 md:hover:-translate-y-2"
      href="https://music.apple.com/us/artist/john-white/1476661227"
      target="_blank"
      rel="noopener noreferrer"
    >
      <AppleMusicSVG
        className="transition-all duration-75 h-[52px] w-[52px] rounded-[13px] hover:scale-110 hover:bg-gradient-to-b from-[#fa57c1] via-[#b166cc] to-[#69a6f9]"
        alt="apple-music-alt"
      />
    </a>
  );
}

export default AppleMusicLink;
