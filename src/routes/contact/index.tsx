import SEO from "../../components/seo";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with John White for bookings, collaborations, and inquiries."
        url="https://johnwhitesmusic.com/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact John White",
          url: "https://johnwhitesmusic.com/contact",
        }}
      />
      <h1 className="sr-only">Contact John White</h1>
      <div className="flex items-center justify-center min-h-screen text-4xl text-white">
        <div>📲 📧</div>
      </div>
    </>
  );
};

export default Contact;
