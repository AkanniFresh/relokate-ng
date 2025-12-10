import { useEffect, useRef } from "react";

export default function AboutUs() {
  const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const paragraphs = paragraphsRef.current;

    // Fade-up animation on scroll
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    // "Reading" highlight animation
    const readingObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);

        if (!visible.length) return;

        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const active = visible[0].target;

        paragraphs.forEach((p) => {
          if (!p) return;
          if (p === active) {
            p.classList.add("ring-2", "ring-blue-400/40", "bg-blue-50/40");
          } else {
            p.classList.remove("ring-2", "ring-blue-400/40", "bg-blue-50/40");
          }
        });
      },
      { threshold: [0.2, 0.5, 0.75, 1] }
    );

    paragraphs.forEach((p) => {
      if (!p) return;
      revealObserver.observe(p);
      readingObserver.observe(p);
    });

    return () => {
      paragraphs.forEach((p) => {
        if (!p) return;
        revealObserver.unobserve(p);
        readingObserver.unobserve(p);
      });
    };
  }, []);

  const paragraphs = [
    "Relokate.ng is a trusted relocation and global opportunity platform dedicated to helping individuals achieve their dreams of studying, working, and building a life abroad. We provide clear guidance, reliable information, and professional support every step of the way from the first consultation to successful relocation.",

    "We understand that relocating to a new country is more than just paperwork. It’s a life-changing decision. That’s why we focus on personalized solutions, transparent processes, and honest communication, ensuring our clients feel confident, informed, and supported throughout their journey.",

    "At Relokate.ng, we work closely with international institutions, recruitment partners, and trusted global networks to connect our clients with genuine opportunities. Whether you are seeking admission into a reputable institution, a skilled or unskilled job placement, or legal migration pathways, our goal is to make the process simple, safe, and achievable.",

    "We pride ourselves on integrity, professionalism, and results. Our team is committed to removing barriers, reducing stress, and helping people move forward with clarity and confidence.",

    "With Relokate.ng, your global future starts with the right guidance, the right support, and the right partner.",
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          About Us
        </h2>
        <p className="text-slate-500 mb-8">
          Relokate.ng - <i>From here to anywhere...</i>
        </p>

        <div className="space-y-6">
          {paragraphs.map((text, index) => (
            <p
              key={index}
              ref={(el: HTMLParagraphElement | null) => (paragraphsRef.current[index] = el)}
              className="
                opacity-0 translate-y-4
                transition-all duration-500 ease-out
                p-5 rounded-xl
                bg-gradient-to-b from-white to-slate-50
                text-slate-700 leading-relaxed
              "
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
