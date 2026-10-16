import SocialLinks from "@/components/SocialLinks";
import SplitHeading from "@/components/SplitHeading";
import { locations } from "@/data/classes";
import { site } from "@/data/site";
import s from "./contact.module.css";

export const metadata = {
  title: "Contact",
  description:
    "Contact Soul Yoga Bali in Kutuh, Sayan, Ubud: about 10 minutes from Ubud Center, surrounded by rice fields. Email soulyogabali@gmail.com or WhatsApp +62 81 727 9665.",
  alternates: { canonical: "/contact" },
};

const { lat, lng } = site.maps.studioCoords;
// Keyless Google Maps embed centred on the studio coordinates from the audit
// (the "Soul Yoga School" place the studio short link resolves to).
const MAP_SRC = `https://www.google.com/maps?q=${lat},${lng}&z=16&hl=en&output=embed`;

export default function ContactPage() {
  return (
    <>
      <section className={s.intro} aria-labelledby="contact-title">
        <div className={`container ${s.introGrid}`}>
            <SplitHeading as="h1" id="contact-title" hero lines="SOUL YOGA BALI" className={s.title} />
          <p className={s.lead} data-hero-item>
            {site.locationDescription}
          </p>
        </div>
      </section>

      <section className={s.main} aria-label="Contact details and map">
        <div className={`container ${s.mainGrid}`}>
          <dl className={s.details} data-reveal>
            <div>
              <dt>Address</dt>
              <dd>{site.address}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${site.phone.e164}`}>{site.phone.display}</a>
              </dd>
            </div>
            <div>
              <dt>WhatsApp</dt>
              <dd>
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {site.phone.display}
                  <span className="visually-hidden"> on WhatsApp (opens in a new tab)</span>
                </a>
              </dd>
            </div>
            <div>
              <dt>Follow</dt>
              <dd>
                <SocialLinks size={24} />
              </dd>
            </div>
          </dl>

          <div className={s.mapCol} data-reveal>
            <div className={s.map}>
              <iframe
                title="Map showing the location of Soul Yoga Bali in Sayan, Ubud"
                src={MAP_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <ul className={s.mapLinks}>
              {locations.map((l) => (
                <li key={l.name}>
                  <a href={site.maps[l.mapKey].url} target="_blank" rel="noopener noreferrer">
                    {l.name} — open in Google Maps<span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </>
  );
}
