import Button from "@/components/Button";
import ClassInfo from "@/components/ClassInfo";
import Media from "@/components/Media";
import SectionHead from "@/components/SectionHead";
import SplitHeading from "@/components/SplitHeading";
import TestimonialSlider from "@/components/TestimonialSlider";
import Timetable from "@/components/Timetable";
import { classSlug } from "@/lib/slug";
import { classDescriptions, payment } from "@/data/classes";
import { dailyClassHeading } from "@/data/content";
import { site } from "@/data/site";
import { yogaclassTestimonials } from "@/data/testimonials";
import s from "./schedule.module.css";

export const metadata = {
  title: "Yoga Class Schedule",
  description:
    "Daily yoga classes open for all levels at Soul Yoga Bali in Sayan, Ubud: weekly timetable, class rates, guidelines, locations and descriptions of Hatha, Alignment Hatha, Hatha Flow, Vinyasa, Inside Flow and Stretch & Release.",
  alternates: { canonical: "/yogaclass" },
};

export default function SchedulePage() {
  return (
    <>
      <section className={s.hero} aria-labelledby="schedule-title">
        <div className={`container ${s.heroGrid}`}>
          <div className={s.heroText}>
            <SplitHeading as="h1" id="schedule-title" hero lines={dailyClassHeading} className={s.title} />
            <p className={s.lead} data-hero-item>
              {payment.reservation.replace(site.phone.displayCompact, "").trim()}{" "}
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                {site.phone.displayCompact}
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </p>
            <div data-hero-item>
              <Button href={site.whatsappUrl} variant="solid">
                Reserve on WhatsApp
              </Button>
            </div>
          </div>
          <Media name="schedule-hero" priority sizes="(min-width: 960px) 55vw, 100vw" className={s.heroMedia} position="45% 40%" data-hero-media="" />
        </div>
      </section>

      <section className={s.timetable} aria-label="Timetable">
        <div className="container" data-reveal>
          <Timetable linkClasses caption="Daily yoga class timetable — select a class name to read its description" />
        </div>
      </section>

      <section className={s.info} aria-label="Class rates and information">
        <div className="container">
          <ClassInfo />
        </div>
      </section>

      <section className={s.descriptions} aria-labelledby="class-descriptions-title" id="class-descriptions">
        <div className="container">
          <SectionHead index="01" label="Classes" id="class-descriptions-title" title="Class Description" align="stack" />
          <ol className={s.classList}>
            {classDescriptions.map((c, i) => (
              <li key={c.name} id={classSlug(c.name)} className={s.classItem}>
                <h3 className={s.className} data-reveal>
                  {c.name}
                </h3>
                <div className={s.classText} data-reveal>
                  {c.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Media name="schedule-class" sizes="100vw" className={s.wide} reveal="up" />

      <TestimonialSlider items={yogaclassTestimonials} tone="light" label="Student testimonials" />
    </>
  );
}
