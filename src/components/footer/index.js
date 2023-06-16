import whiteNoiseRecordsPNG from '../../assets/images/icons/white-noise-records-logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-md text-white text-center p-3">
    
    <a 
      href='https://www.instagram.com/whitenoisercrds/' 
      alt='white-noise-ig-link' 
      rel="noopener noreferrer"
      target="_blank"
    >
      <img className='mx-auto h-28 p-3' src={whiteNoiseRecordsPNG} alt='white-noise-records-logo'/>
    </a>
    copyright © {(new Date().getFullYear())}. powered by <a className='underline underline-offset-8' href='mailto:nathanielrbowman@gmail.com'>nathaniel bowman</a>
    </footer>
  );
}

export default Footer;
