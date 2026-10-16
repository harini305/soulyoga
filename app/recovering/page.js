import Button from "@/components/Button";
import Media from "@/components/Media";
import QuoteBand from "@/components/QuoteBand";
import SplitHeading from "@/components/SplitHeading";
import TrainingDates from "@/components/TrainingDates";
import { quotes } from "@/data/content";
import { site } from "@/data/site";
import { recovering, recoveringEvents } from "@/data/trainings";
import s from "./recovering.module.css";

export const metadata = {
  title: "RecoveRing Therapy",
  description:
    "RecoveRing Therapy Training Level 1 (2 days, 15 hours) with Soul Yoga Bali: tuition, what you will get, qualification, and the 4 top benefits of RecoveRing — myofascia release, pressure massage, deep stretching and core practice.",
  alternates: { canonical: "/recovering" },
};

function DashList({ label, items }) {
  return (
    <div className={s.block}>
      <h3 className={s.blockLabel}>{label}</h3>
      <ul className={s.dash}>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default function RecoveringPage() {
  const pageEvent = recoveringEvents.find((e) => e.id === "recovering-page");
  const [line1, line2] = recovering.statement.split(", ");

  return (
    <>
      <section className={s.hero} aria-labelledby="recovering-title">
        <Media name="recovering-hero" priority sizes="100vw" className={s.heroMedia} position="50% 60%" data-hero-media="" />
        <div className={s.heroCard}>
          <div className={s.heroTitleWrap}>
            <SplitHeading as="h1" id="recovering-title" hero lines={recovering.title} className={s.title} />
          </div>
          <div data-hero-item>
            <TrainingDates dates={[pageEvent]} />
            <p className={s.note}>For upcoming training dates, please contact the studio.</p>
          </div>
        </div>
      </section>

      <section className={s.details} aria-labelledby="tuition-title">
        <div className={`container ${s.detailsGrid}`}>
          <div className={s.detailsText} data-tilt>
            <h2 id="tuition-title" className={s.detailsHeading}>
              {recovering.tuition.heading}
            </h2>
            <div className={s.block}>
              <h3 className={s.blockLabel}>{recovering.tuition.label}</h3>
              <p className={s.price}>{recovering.tuition.price}</p>
              <p>{recovering.tuition.otherCountries}</p>
              <ul className={s.dash}>
                {recovering.tuition.partners.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <DashList label={recovering.youWillGet.label} items={recovering.youWillGet.items} />
            <DashList label={recovering.qualification.label} items={recovering.qualification.items} />
            <DashList label={recovering.goodFor.label} items={recovering.goodFor.items} />
            <div className={s.enquire}>
              <Button href={`mailto:${site.email}?subject=${encodeURIComponent("RecoveRing Therapy Training enquiry")}`} variant="solid">
                Enquire by email
              </Button>
              <Button href={site.whatsappUrl}>WhatsApp</Button>
            </div>
          </div>
          <Media name="recovering-details" sizes="(min-width: 960px) 45vw, 100vw" className={s.detailsMedia} reveal="up" position="50% 40%" />
        </div>
      </section>

      <section className={s.statement} aria-label={recovering.statement}>
        <h2 className={s.statementText}>
          <span className={s.statementLine} data-drift="left">
            {line1},
          </span>{" "}
          <span className={`${s.statementLine} ${s.statementLine2}`} data-drift="right">
            {line2}
          </span>
        </h2>
      </section>

      <div className={`container ${s.bandWrap}`}>
        <Media name="recovering-band" sizes="(min-width: 1100px) 1100px, 100vw" className={s.band} reveal="up" position="50% 55%" />
      </div>

      <section className={s.benefits} aria-labelledby="benefits-title">
        <div className={`container ${s.benefitsHead}`}>
          <SplitHeading as="h2" id="benefits-title" lines={recovering.benefitsHeading} className={s.benefitsTitle} />
          <p className={s.benefitsIntro} data-reveal>
            {recovering.intro}
          </p>
        </div>
        <ol className={s.checker}>
          {recovering.benefits.map((b, i) => (
            <li key={b.title} className={`${s.cell} ${i % 2 ? s.cellReverse : ""}`}>
              <Media name={b.image} sizes="(min-width: 900px) 50vw, 100vw" className={s.cellMedia} reveal={i % 2 ? "right" : "left"} />
              <div className={s.cellText}>
                <h3 className={s.cellTitle} data-reveal>
                  {b.title}
                </h3>
                <p data-reveal>{b.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <QuoteBand lines={quotes.recoveringWorkshop.lines} layout="offset" />

      <Media name="recovering-closing" sizes="100vw" className={s.closing} parallax />
    </>
  );
}
