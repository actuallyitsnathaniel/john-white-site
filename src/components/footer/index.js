const Footer = () => {
  return (
    <footer className="bg-black text-md text-white text-center p-6">
      copyright © {(new Date().getFullYear())} white noise records, nathaniel bowman
    </footer>
  );
}

export default Footer;
