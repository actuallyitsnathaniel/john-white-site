import { ReactComponent as GmailColor } from "../../../assets/images/icons/gmail-color.svg";

function GmailLogo() {
  return (
    <a
      className="transition-all duration-100 p-3 md:hover:-translate-y-2 group"
      href="mailto:copamgmtt@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GmailColor className="h-16 saturate-0 hover:saturate-100 contrast-[150%] to-black hover:contrast-100 transition ease-in-out duration-100 hover:scale-110 " />
    </a>
  );
}

export default GmailLogo;
