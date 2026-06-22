import { memo, useEffect, useState } from "react";
import SEO from "../../components/seo";
import { getAboutPage } from "../../api/getAboutData";

type Contact = { fullName: string; email: string };

// Edit policy wording here — routing/layout don't depend on this content.
const POLICY = {
  owner: "John White",
  sections: [
    {
      heading: "Copyright",
      body: "All music, audio, recordings, compositions, lyrics, stems, and related materials on this site are the copyrighted work of John White. All rights reserved.",
    },
    {
      heading: "Permitted Use",
      body: "You may listen to this music for personal, non-commercial purposes, or use it as explicitly licensed in writing by John White. No other use is permitted without prior written approval.",
    },
    {
      heading: "No AI / ML Use",
      body: "John White does not grant permission for any of his music, audio, recordings, or stems to be used for artificial intelligence or machine learning training, fine-tuning, evaluation, or dataset creation. Specifically, you may NOT:",
      list: [
        "Include any of his audio in any AI/ML dataset.",
        "Use any of his audio to train, fine-tune, or evaluate any AI or ML model.",
        "Use his audio to build tools or services that generate music “in the style of” John White, or that imitate his sound, voice, or production.",
      ],
    },
    {
      heading: "Licenses Exclude AI Rights",
      body: "Any license John White grants does not include AI or ML rights unless those rights are explicitly granted in writing.",
    },
    {
      heading: "Research & Tech Projects",
      // Body is rendered dynamically with management contact — see `contact` slot.
      key: "research",
      body: "If you want to use this music for research or technology projects of any kind, you must obtain written approval before doing so.",
    },
    {
      heading: "Agreement",
      body: "By accessing, streaming, or downloading any content from this site, you agree to respect these restrictions. Unauthorized use may violate John White's rights and applicable laws.",
    },
  ],
};

const UsageAiPolicy = memo(() => {
  const [contact, setContact] = useState<Contact | null>(null);

  useEffect(() => {
    getAboutPage()
      .then((data) => {
        // First point of contact is John White's management.
        const poc = data?.pointOfContact?.[0];
        if (poc?.email) {
          setContact({ fullName: poc.fullName, email: poc.email });
        }
      })
      .catch(() => {
        /* graceful fallback — static copy below covers the no-contact case */
      });
  }, []);

  return (
    <>
      <SEO
        title="Usage & AI Policy"
        description="Usage and AI policy for the music of John White. Not licensed for AI or machine learning training."
        url="https://johnwhitesmusic.com/usage-and-ai-policy"
      />
      <main className="flex grow items-center justify-center text-white px-4 pb-8 pt-24">
        <div className="mx-auto w-full max-w-5xl rounded-xl bg-black/70 p-6 backdrop-blur-sm sm:p-10">
          <header className="mb-8 border-b border-white/10 pb-5">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Usage &amp; AI Policy
            </h1>
            <p className="mt-1 text-sm text-white/60">{POLICY.owner}</p>
          </header>
          <div className="gap-x-10 text-sm leading-relaxed sm:columns-2">
            {POLICY.sections.map((s) => (
              <section key={s.heading} className="mb-6 break-inside-avoid">
                <h2 className="mb-1 font-semibold tracking-tight text-white">
                  {s.heading}
                </h2>
                <p className="text-white/80">
                  {s.key === "research" ? (
                    <>
                      {s.body}{" "}
                      {contact ? (
                        <>
                          Direct all inquiries to {contact.fullName} at{" "}
                          <a className="link" href={`mailto:${contact.email}`}>
                            {contact.email}
                          </a>
                          .
                        </>
                      ) : (
                        "Direct all inquiries to John White's management."
                      )}
                    </>
                  ) : (
                    s.body
                  )}
                </p>
                {s.list && (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-white/80">
                    {s.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
});

UsageAiPolicy.displayName = "UsageAiPolicy";
export default UsageAiPolicy;
