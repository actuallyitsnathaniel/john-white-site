import JohnWhiteSignature from './john-white-signature.svg'
const JohnWhiteLogo = () => {
  return (
    <div>
      <img
        className="mx-auto px-12 w-[700px] h-auto md:px-0 mb-10"
        alt="john-white-logo"
        aria-label="john-white-logo"
        src={JohnWhiteSignature}
      />
    </div>
  );
}

export default JohnWhiteLogo;