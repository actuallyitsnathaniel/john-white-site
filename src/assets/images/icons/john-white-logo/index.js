import JohnWhiteSignature from './john-white-signature.svg'
const JohnWhiteLogo = () => {
  return (
    <div className=''>
      <img
        className="md:py-2 mx-auto px-12 md:px-0 mb-[25%] md:mb-[5%]"
        alt="john-white-logo"
        aria-label="john-white-logo"
        src={JohnWhiteSignature}
      />
    </div>
  );
}

export default JohnWhiteLogo;