import Button from "@/components/Button";
import ClassInfo from "@/components/ClassInfo";
import InstagramGrid from "@/components/InstagramGrid";
import Media from "@/components/Media";
import Picture from "@/components/Picture";
import QuoteBand from "@/components/QuoteBand";
import SectionHead from "@/components/SectionHead";
import SplitHeading from "@/components/SplitHeading";
import TestimonialSlider from "@/components/TestimonialSlider";
import Timetable from "@/components/Timetable";
import TrainingDates from "@/components/TrainingDates";
import { dailyClassHeading, homeHero, instagram, merch, quotes } from "@/data/content";
import { site } from "@/data/site";
import { homeTestimonials } from "@/data/testimonials";
import { recovering, recoveringEvents, ttc200, ttc300 } from "@/data/trainings";
import s from "./home.module.css";

export const metadata = {
  title: { absolute: "Soul Yoga Bali | Daily Yoga Class & Yoga Teacher Training in Ubud" },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const recoveringEvent = recoveringEvents.find((e) => e.id === recovering.teaser.eventId);

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      {/* Split first screen: welcome text left, studio photograph fills the right */}
      <section className={s.hero} aria-labelledby="home-title">
        <div className={s.heroText}>
          <SplitHeading
            as="h1"
            id="home-title"
            hero
            lines={["SOUL", "YOGA BALI"]}
            className={s.heroTitle}
            lineClasses={[s.heroTitleBig, s.heroTitleBig]}
          />
          <p className={s.heroSub} data-hero-item>
            {homeHero.subtitle}
          </p>
          <div className={s.heroCtas} data-hero-item>
            <Button href="/yogaclass" variant="solid">
              Class schedule
            </Button>
            <Button href="/200yogateachertraining">Teacher training</Button>
          </div>
        </div>
        <div className={s.heroMediaWrap}>
          <Media name="home-hero" priority sizes="(min-width: 960px) 58vw, 100vw" fill position="50% 40%" data-hero-media="" />
          <div className={s.credentials} data-hero-item>
            <Picture name="badge-rys200" sizes="96px" className={s.badge} />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- Daily classes */}
      <section className={s.classes} aria-labelledby="classes-title">
        <div className="container">
          <SectionHead
            index="01"
            label="Schedule"
            id="classes-title"
            title={dailyClassHeading}
            tone="teal"
            intro={
              <p>
                Reservation by WhatsApp{" "}
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {site.phone.displayCompact}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </p>
            }
          />
          <div data-reveal>
            <Timetable caption="Daily yoga class timetable" />
          </div>
          <div className={s.classInfo}>
            <ClassInfo
              ratesFooter={
                <span className={s.classMore}>
                  <Button href="/yogaclass#class-descriptions">Class descriptions</Button>
                </span>
              }
            />
          </div>
        </div>
      </section>

      <Media name="home-strip" sizes="100vw" className={s.strip} parallax position="50% 45%" />

      {/* ------------------------------------------------------ Teacher training */}
      <section className={s.training} aria-labelledby="training-title">
        <div className="container">
          <SectionHead index="02" label="Teacher Training" id="training-title" title="Teacher Training" align="stack" />

          <article className={s.program} aria-labelledby="ttc200-title">
            <div className={s.programMedia}>
              <Media name="home-200h" className={s.programImg} sizes="(min-width: 960px) 40vw, 100vw" reveal="up" position="50% 40%" />
              <Picture name="badge-rys200" sizes="120px" className={s.programBadge} />
            </div>
            <div className={s.programBody}>
              <h3 id="ttc200-title" className={s.programTitle} data-reveal>
                {ttc200.teaser.heading.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </h3>
              <p className={s.accred} data-reveal>
                {ttc200.teaser.accreditation}
              </p>
              <div className={s.price} data-reveal>
                <p className={s.priceLabel}>{ttc200.teaser.priceLabel}</p>
                <p className={s.priceValue}>{ttc200.teaser.price}</p>
                <p className={s.priceNote}>{ttc200.teaser.priceNote}</p>
              </div>
              <ul className={s.bullets} data-reveal>
                {ttc200.teaser.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div data-reveal>
                <TrainingDates heading={ttc200.datesHeading} dates={ttc200.dates} />
              </div>
              <div className={s.programCta} data-reveal>
                <Button href="/200yogateachertraining">Read More</Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <QuoteBand lines={quotes.studio.lines} />

      <TestimonialSlider items={homeTestimonials} tone="dark" background="home-testimonials-bg" label="Teacher training testimonials" />

      <section className={s.training} aria-labelledby="ttc300-title">
        <div className="container">
          <article className={`${s.program} ${s.programReverse}`}>
            <div className={s.programMedia}>
              <Media name="home-300h" className={s.programImg} sizes="(min-width: 960px) 40vw, 100vw" reveal="up" position="50% 35%" />
            </div>
            <div className={s.programBody}>
              <h3 id="ttc300-title" className={s.programTitle} data-reveal>
                {ttc300.teaser.heading.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </h3>
              <p className={s.accred} data-reveal>
                {ttc300.teaser.accreditation}
              </p>
              <div className={s.price} data-reveal>
                <p className={s.priceLabel}>{ttc300.teaser.priceLabel}</p>
                <ul className={s.priceList}>
                  {ttc300.teaser.prices.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className={s.prose} data-reveal>
                {ttc300.teaser.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <p>{ttc300.teaser.bulletsIntro}</p>
              </div>
              <ul className={s.bullets} data-reveal>
                {ttc300.teaser.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className={s.prose} data-reveal>
                {ttc300.teaser.closing}
              </p>
              <div data-reveal>
                <TrainingDates heading={ttc300.datesHeading} dates={ttc300.dates} emptyText={ttc300.datesText} />
              </div>
              <div className={s.programCta} data-reveal>
                <Button href="/300yogateachertraining">Read More</Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <QuoteBand lines={quotes.grateful.lines} layout="offset" />

      {/* -------------------------------------------------------------- RecoveRing */}
      <section className={s.recovering} aria-labelledby="recovering-title">
        <Media name="home-recovering" sizes="(min-width: 960px) 50vw, 100vw" className={s.recMedia} reveal="left" position="50% 40%" />
        <div className={s.recBody}>
          <h3 id="recovering-title" className={s.programTitle} data-reveal>
            {recovering.teaser.heading.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h3>
          <p className={s.prose} data-reveal>
            {recovering.intro}
          </p>
          <div data-reveal>
            <TrainingDates heading={recovering.teaser.datesHeading} dates={[recoveringEvent]} />
            <p className={s.dateNote}>For upcoming training dates, please contact the studio.</p>
          </div>
          <div className={s.programCta} data-reveal>
            <Button href="/recovering">Read More</Button>
          </div>
        </div>
      </section>

      <QuoteBand lines={quotes.recoveringWorkshop.lines} />

      {/* --------------------------------------------------------------- Instagram */}
      <section className={s.instagram} aria-labelledby="instagram-title">
        <div className="container">
          <SectionHead
            index="04"
            label="Instagram"
            id="instagram-title"
            title={instagram.heading}
            intro={
              <p>
                <a href={site.social.instagram.url} target="_blank" rel="noopener noreferrer" className={s.handle}>
                  {site.social.instagram.label}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </p>
            }
          />
          <InstagramGrid />
        </div>
      </section>

      {/* ------------------------------------------------------------------ Merch */}
      <section className={s.merch} aria-labelledby="merch-title">
        <Media name="merch-shirts" sizes="(min-width: 960px) 33vw, 100vw" className={s.merchImg} reveal="up" />
        <div className={s.merchBody} data-reveal>
          <h2 id="merch-title" className={s.merchTitle}>
            <span className={s.merchSmall}>{merch.heading[0]}</span>{" "}
            <span>{merch.heading[1]}</span> <span>{merch.heading[2]}</span>
          </h2>
          <dl className={s.merchList}>
            {merch.details.map((d) => (
              <div key={d.label}>
                <dt>{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
            <div>
              <dt>{merch.orderLabel}</dt>
              <dd>
                <a href={`tel:${site.phone.e164}`}>{site.phone.display}</a>
              </dd>
            </div>
          </dl>
          <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className={s.merchWa}>
            Order on WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>
        <Media name="merch-print" sizes="(min-width: 960px) 33vw, 100vw" className={s.merchImg} reveal="up" />
      </section>
    </>
  );
}
