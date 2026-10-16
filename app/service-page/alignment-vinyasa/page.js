import Button from "@/components/Button";
import Media from "@/components/Media";
import { alignmentVinyasa } from "@/data/classes";
import { site } from "@/data/site";
import s from "../../legacy.module.css";

// Legacy Wix Bookings service page. Real class description, but the source marks the
// service unavailable, so there is no booking action — only the contact routes.
export const metadata = {
  title: "Alignment Vinyasa",
  description: alignmentVinyasa.description,
  alternates: { canonical: "/service-page/alignment-vinyasa" },
  robots: { index: false, follow: true },
};

export default function AlignmentVinyasaPage() {
  return (
    <section className={s.page} aria-labelledby="av-title">
      <div className="container">
        <p className={`eyebrow ${s.eyebrow}`}>{alignmentVinyasa.subtitle}</p>
        <h1 id="av-title" className={s.title}>
          {alignmentVinyasa.name}
        </h1>
        <p className={s.unavailable} role="status">
          {alignmentVinyasa.availabilityText}
        </p>
        <div className={s.card}>
          <Media name="alignment-vinyasa" sizes="(min-width: 860px) 40vw, 100vw" className={s.media} priority />
          <div className={s.cardBody}>
            <h2 className={s.cardTitle}>Service Description</h2>
            <p className={s.lead}>{alignmentVinyasa.description}</p>
            <p className={s.meta}>
              <span>{alignmentVinyasa.price}</span>
              <span>{alignmentVinyasa.location}</span>
            </p>
            <div className={s.actions}>
              <Button href={`mailto:${site.email}`} variant="solid">
                Email the studio
              </Button>
              <Button href={site.whatsappUrl}>WhatsApp</Button>
              <Button href="/yogaclass">Class schedule</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
