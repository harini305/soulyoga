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
import { ttc300Testimonials } from "@/data/testimonials";
import { ttc300 } from "@/data/trainings";
import s from "../ttc.module.css";

export const metadata = {
  title: "300 Hours Yoga Teacher Training",
  description:
    "Soul Yoga Bali Academy by Sandi Kalifadani: 300 hours advanced yoga teacher training in Ubud — tuition, highlights, daily schedule, advanced curriculum and registration. Date to be announced.",
  alternates: { canonical: "/300yogateachertraining" },
};

const CURRICULUM_INTRO = [
  "SOUL YOGA'S CURRICULUM EXPANDS YOUR KNOWLEDGE OF YOGA, ADVANCES YOUR ABILITY TO TEACH, AND GIVES YOU A DEEPER UNDERSTANDING OF TOPICS OFTEN MISSED IN OTHER TRAININGS. WHETHER YOU WANT TO DEEPEN YOUR PRACTICE, EMBARK ON A PERSONAL JOURNEY, OR BECOME A PROFESSIONAL TEACHER,",
  "SOUL YOGA HELPS YOU TAP INTO YOUR UNLIMITED POTENTIAL.",
];

export default function Ttc300Page() {
  return (
    <>
      <section className={s.hero300} aria-labelledby="ttc300-title">
        <div className={s.hero300Panel}>
          <SplitHeading as="h1" id="ttc300-title" hero lines={["300 HOURS", "Yoga Teacher Training"]} className={s.hero300Title} lineClasses={[s.big, s.small]} />
          <div data-hero-item>
            <TrainingDates heading={ttc300.datesHeading} dates={ttc300.dates} emptyText={ttc300.datesText} tone="dark" />
          </div>
          <div data-hero-item>
            <Button href="#registration" variant="accent">
              Contact &amp; Registration
            </Button>
          </div>
        </div>
        <div className={s.hero300Media}>
          <Media name="ttc300-hero" priority sizes="(min-width: 960px) 58vw, 100vw" fill position="50% 50%" data-hero-media="" />
          <Picture name="badge-rys200" sizes="140px" className={s.hero300Badge} priority />
        </div>
      </section>

      <section className={`${s.quoteBlock} ${s.quoteBlockReverse}`} aria-label="Quote">
        <Media name="ttc300-quote" sizes="(min-width: 960px) 50vw, 100vw" className={s.quoteMedia} reveal="right" position="50% 50%" />
        <blockquote className={s.quoteText} data-reveal>
          <p>{ttc300.quote}</p>
        </blockquote>
      </section>

      <Tuition program={ttc300} id="tuition-300" tone="cream" />

      <Media name="ttc300-strip-1" sizes="100vw" className={s.strip} parallax />

      <section className={s.curriculumDark} aria-labelledby="curriculum-300">
        <div className="container">
          <SectionHead
            index="03"
            label="Curriculum"
            id="curriculum-300"
            title="CURRICULUM"
            tone="light"
            intro={CURRICULUM_INTRO.map((p) => (
              <p key={p} className={s.caps}>
                {p}
              </p>
            ))}
          />
          <Curriculum modules={ttc300.curriculum} variant="index" />
        </div>
      </section>

      <Media name="ttc300-strip-2" sizes="100vw" className={s.strip} parallax />

      <section className={s.difference} aria-labelledby="difference-title">
        <div className={`container ${s.differenceInner}`}>
          <SplitHeading as="h2" id="difference-title" lines={ttc300.difference.heading} className={s.differenceTitle} />
          <div className={s.differenceList} data-reveal>
            {ttc300.difference.paragraphs.map((p, i) => (
              <div key={i} className={s.differenceItem}>
                <p className={s.differenceNum} aria-hidden="true">
                  {i === 0 ? "200" : "300"}
                  <span>hours</span>
                </p>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Media name="ttc300-strip-3" sizes="100vw" className={s.strip} parallax />

      <TestimonialSlider items={ttc300Testimonials} tone="dark" label="Teacher training graduate testimonials" />

      <div className={`container ${s.graduation}`}>
        <Media name="ttc300-graduation" sizes="(min-width: 1400px) 1360px, 100vw" className={s.graduationMedia} reveal="up" />
      </div>

      <Registration program="300 Hours Yoga Teacher Training" id="register-300" />

      <Media name="studio-ricefield" sizes="100vw" className={s.closing} parallax />
    </>
  );
}
