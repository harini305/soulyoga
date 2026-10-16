import Link from "next/link";
import Media from "@/components/Media";
import SplitHeading from "@/components/SplitHeading";
import { about } from "@/data/content";
import { site } from "@/data/site";
import s from "./about.module.css";

export const metadata = {
  title: "About Us",
  description:
    "Soul Yoga Bali is a home-based yoga studio in the rice fields of Sayan, Ubud, run by founding couple Sandi Kalifadani and Sera. Read why Ubud, the studio story and the founders' biographies.",
  alternates: { canonical: "/aboutus" },
};

export default function AboutPage() {
  return (
    <>
      <section className={s.hero} aria-labelledby="about-title">
        <h1 id="about-title" className="visually-hidden">
          About Us
        </h1>
        <Media name="about-hero" priority sizes="100vw" className={s.heroMedia} position="50% 45%" data-hero-media="" />
      </section>

      <section className={s.ubud} aria-labelledby="ubud-title">
        <div className={`container ${s.ubudGrid}`}>
          <SplitHeading as="h2" id="ubud-title" lines={about.whyUbud.heading} className={s.ubudTitle} />
          <p className={s.ubudText} data-reveal>
            {about.whyUbud.text}
          </p>
        </div>
      </section>

      <section className={s.story} aria-labelledby="story-title">
        <div className={`container ${s.storyGrid}`}>
          <div className={s.storyText}>
            <SplitHeading as="h2" id="story-title" lines="Soul Yoga Bali" className={s.storyTitle} />
            <div className={s.prose} data-reveal>
              <p className={s.lead}>
                <a href={site.maps.studio.url} target="_blank" rel="noopener noreferrer">
                  Soul Yoga Bali<span className="visually-hidden"> on Google Maps (opens in a new tab)</span>
                </a>{" "}
                stands apart from Bali’s larger commercial studios by offering a deeply personal, home-based experience where students are
                welcomed into the family. Located in a scenic shala in the rice fields of Sayan, the studio is run by the{" "}
                <a href="#founders">founding couple</a>, Sandi and Sera, who live on-site with their four cats. Sandi, a local Indonesian
                teacher with over 20 years of experience, specializes in Alignment Hatha—a signature style that blends Iyengar-based precision
                with creative sequencing and the strategic use of props like walls and chairs and Alignment Flow, a slow deep power
                ashtanga-vinyasa inspired with alignment approach. Sera, a Korean teacher and master with over a decade of expertise, brings a
                background in dance and academic study to her Inside Flow and Recovering Yoga classes, which focus on rhythmic movement and
                therapeutic rehabilitation.
              </p>
              <p>
                The daily practice at Soul Yoga Bali is intentionally instructional and often feels like a mini-workshop, making it a
                favorite for both beginners and established yoga teachers. Instructions are exceptionally clear and patient, with teachers
                providing meticulous hands-on adjustments and personalized attention to ensure every student understands the finer details of
                alignment. This emphasis on education over simple exercise is why their Yoga Alliance-accredited{" "}
                <Link href="/200yogateachertraining">Teacher Trainings</Link> are kept small, typically limited to 16 students, to maintain
                an intimate atmosphere of self-transformation and healing. Whether attending a daily Vinyasa flow or a specialty workshop,
                students are immersed in a quiet, peaceful environment where the only distractions are the gentle sounds of nature and the
                resident cats occasionally joining the class.
              </p>
            </div>
          </div>
          <Media name="studio-ricefield" sizes="(min-width: 960px) 45vw, 100vw" className={s.storyMedia} reveal="right" position="40% 50%" />
        </div>
      </section>

      <section id="founders" className={s.founders} aria-label="Founders">
        {about.founders.map((f, i) => (
          <article key={f.name} className={`${s.founder} ${i % 2 ? s.founderReverse : ""}`} aria-labelledby={`founder-${i}`}>
            <div className={s.portraitWrap}>
              <Media name={f.image} sizes="(min-width: 960px) 42vw, 100vw" className={s.portrait} parallax position="50% 30%" />
            </div>
            <div className={s.bio}>
              <p className={s.bioIndex} aria-hidden="true" data-reveal>
                {i === 0 ? "Founder" : "Co-founder"}
              </p>
              <SplitHeading as="h2" id={`founder-${i}`} lines={f.name} className={s.bioName} />
              <div className={s.prose} data-reveal>
                {f.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
