import RegistrationForm from "../RegistrationForm";
import SplitHeading from "../SplitHeading";
import { registrationIntro } from "@/data/trainings";
import { site } from "@/data/site";
import styles from "./Registration.module.css";

// "CONTACT & REGISTRATION" section shared by both teacher-training pages.
export default function Registration({ program, id }) {
  return (
    <section className={styles.section} aria-labelledby={id} id="registration">
      <div className={`container ${styles.grid}`}>
        <div className={styles.info}>
          <SplitHeading as="h2" id={id} lines={registrationIntro.heading} className={styles.title} />
          <p className={styles.name} data-reveal>
            SOUL YOGA BALI
          </p>
          <p className={styles.text} data-reveal>
            {site.locationDescription}
          </p>
          <ul className={styles.contact} data-reveal>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp {site.phone.displayCompact}
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.formWrap} data-reveal>
          <RegistrationForm program={program} />
        </div>
      </div>
    </section>
  );
}
