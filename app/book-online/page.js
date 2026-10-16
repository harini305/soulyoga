import Link from "next/link";
import Button from "@/components/Button";
import Media from "@/components/Media";
import { alignmentVinyasa, payment } from "@/data/classes";
import { site } from "@/data/site";
import s from "../legacy.module.css";

// Legacy Wix Bookings URL (in the old sitemap, not in the navigation). The three
// untouched "Service Name / US$19,99" template services are not reproduced; the only
// real service is shown as unavailable, exactly as the source states. Classes are
// reserved by WhatsApp, which is the studio's actual booking process.
export const metadata = {
  title: "Book Online",
  description: "How to reserve a class at Soul Yoga Bali.",
  alternates: { canonical: "/book-online" },
  robots: { index: false, follow: true },
};

export default function BookOnlinePage() {
  return (
    <section className={s.page} aria-labelledby="book-title">
      <div className="container">
        <h1 id="book-title" className={s.title}>
          Our Services
        </h1>
        <p className={s.lead}>
          {payment.reservation.replace(site.phone.displayCompact, "").trim()}{" "}
          <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
            {site.phone.displayCompact}
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </p>
        <div className={s.actions}>
          <Button href="/yogaclass" variant="solid">
            Class schedule
          </Button>
          <Button href={site.whatsappUrl}>WhatsApp</Button>
        </div>

        <article className={s.card} aria-labelledby="av-title">
          <Media name="alignment-vinyasa" sizes="(min-width: 860px) 40vw, 100vw" className={s.media} />
          <div className={s.cardBody}>
            <h2 id="av-title" className={s.cardTitle}>
              <Link href="/service-page/alignment-vinyasa">{alignmentVinyasa.name}</Link>
            </h2>
            <p className={s.meta}>
              <span>{alignmentVinyasa.subtitle}</span>
              <span>{alignmentVinyasa.price}</span>
            </p>
            <p className={s.unavailable}>{alignmentVinyasa.availabilityText}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
