import JohnWhiteSignature from './john-white-signature.svg'
const JohnWhiteLogo = () => {
  return (
    <div>
      <img
        className="mx-auto px-12 h-auto md:px-0 mb-10"
        alt="john-white-logo"
        width={"700px"}
        aria-label="john-white-logo"
        src={JohnWhiteSignature}
      />
    </div>
  );
}

export default JohnWhiteLogo;