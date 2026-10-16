import Button from "@/components/Button";
import Curriculum from "@/components/Curriculum";
import Media from "@/components/Media";
import Picture from "@/components/Picture";
import SectionHead from "@/components/SectionHead";
import SplitHeading from "@/components/SplitHeading";
import TestimonialSlider from "@/components/TestimonialSlider";
import TrainingDates from "@/components/TrainingDates";
import Registration from "@/components/ttc/Registration";
import Tuition from "@/components/ttc/Tuition";
import { ttc200Testimonials } from "@/data/testimonials";
import { ttc200 } from "@/data/trainings";
import s from "../ttc.module.css";

export const metadata = {
  title: "200 Hours Yoga Teacher Training",
  description:
    "Soul Yoga Bali Academy by Sandi Kalifadani: 200 hours Yoga Alliance teacher training in Ubud, limited to 16 students — schedule, tuition, highlights, curriculum and registration.",
  alternates: { canonical: "/200yogateachertraining" },
};

const CURRICULUM_INTRO = [
  "SOUL YOGA'S CURRICULUM EXPANDS YOUR KNOWLEDGE OF YOGA, ADVANCES YOUR ABILITY TO TEACH, AND GIVES YOU A DEEPER UNDERSTANDING OF TOPICS OFTEN MISSED IN OTHER TRAININGS. WHETHER YOU WANT TO DEEPEN YOUR PRACTICE, EMBARK ON A PERSONAL JOURNEY, OR BECOME A PROFESSIONAL TEACHER,",
  "SOUL YOGA HELPS YOU TAP INTO YOUR UNLIMITED POTENTIAL.",
];

export default function Ttc200Page() {
  return (
    <>
      <section className={s.hero200} aria-labelledby="ttc200-title">
        <Media name="ttc200-hero" priority sizes="100vw" fill position="50% 35%" data-hero-media="" />
        <div className={s.hero200Scrim} />
        <Picture name="badge-rys200" sizes="140px" className={s.hero200Badge} priority />
        <div className={`container ${s.hero200Inner}`}>
            <SplitHeading as="h1" id="ttc200-title" hero lines={["200 HOURS", "Yoga Teacher Training"]} className={s.hero200Title} lineClasses={[s.big, s.small]} />
          <div className={s.hero200Dates} data-hero-item>
            <TrainingDates heading={ttc200.datesHeading} dates={ttc200.dates} tone="dark" />
            <Button href="#registration" variant="accent">
              Contact &amp; Registration
            </Button>
          </div>
        </div>
      </section>

      <section className={s.quoteBlock} aria-label="Quote">
        <Media name="ttc200-quote" sizes="(min-width: 960px) 50vw, 100vw" className={s.quoteMedia} reveal="left" position="50% 50%" />
        <blockquote className={s.quoteText} data-reveal>
          <p>{ttc200.quote}</p>
        </blockquote>
      </section>

      <Tuition program={ttc200} id="tuition-200" />

      <Media name="ttc200-strip-1" sizes="100vw" className={s.strip} parallax />

      <section className={s.transform} aria-labelledby="transform-title">
        <div className={`container ${s.transformInner}`}>
          <SplitHeading as="h2" id="transform-title" lines={ttc200.transformation.heading} className={s.transformTitle} />
          <ol className={s.transformList} data-reveal>
            {ttc200.transformation.blocks.map((b, i) => (
              <li key={b.title} className={s.transformItem}>
                <div>
                  <h3 className={s.transformSub}>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Media name="ttc200-strip-2" sizes="100vw" className={s.strip} parallax position="50% 40%" />

      <section className={s.curriculum} aria-labelledby="curriculum-200">
        <div className="container">
          <SectionHead
            index="03"
            label="Curriculum"
            id="curriculum-200"
            title="CURRICULUM"
            intro={CURRICULUM_INTRO.map((p) => (
              <p key={p} className={s.caps}>
                {p}
              </p>
            ))}
          />
          <Curriculum
            modules={ttc200.curriculum}
            variant="grid"
            footer={
              <>
                <p className={s.curricFooterTitle}>CONTACT &amp; REGISTRATION</p>
                <Button href="#registration" variant="solid">
                  Register
                </Button>
              </>
            }
          />
        </div>
      </section>

      <Media name="ttc200-strip-3" sizes="100vw" className={s.strip} parallax position="50% 55%" />

      <TestimonialSlider items={ttc200Testimonials} tone="light" label="Teacher training graduate testimonials" />

      <div className={`container ${s.graduation}`}>
        <Media name="ttc200-graduation" sizes="(min-width: 1400px) 1360px, 100vw" className={s.graduationMedia} reveal="up" />
      </div>

      <Registration program="200 Hours Yoga Teacher Training" id="register-200" />

      <section className={s.iyengar} aria-label="Quote by BKS Iyengar">
        <Media name="ttc200-iyengar" sizes="100vw" fill alt="" parallax />
        <div className={s.iyengarScrim} />
        <figure className={`container ${s.iyengarInner}`}>
          <blockquote>
            <SplitHeading as="p" lines={ttc200.closingQuote.text} className={s.iyengarQuote} />
          </blockquote>
          <figcaption className={s.iyengarCite} data-reveal>
            {ttc200.closingQuote.author}
          </figcaption>
        </figure>
      </section>
    </>
  );
}
