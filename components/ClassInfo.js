import { payment, rates, guidelines, locations, soulYogaClass } from "@/data/classes";
import { site } from "@/data/site";
import styles from "./ClassInfo.module.css";

function External({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}

// Rates, payment, guidelines and locations — shared by the home and schedule pages.
export default function ClassInfo({ ratesFooter }) {
  const [before] = payment.reservation.split(site.phone.displayCompact);
  return (
    <div className={styles.grid}>
      <section className={styles.rates} aria-labelledby="rates-title" data-reveal>
        <h3 id="rates-title" className={styles.title}>
          Class Rates
        </h3>
        {rates.map((group) => (
          <div key={group.title} className={styles.group}>
            <h4 className={styles.groupTitle}>{group.title}</h4>
            <dl className={styles.ledger}>
              {group.items.map((it, i) => (
                <div key={i} className={styles.row}>
                  <dt>
                    {it.label}
                    {it.note ? <span className={styles.note}> {it.note}</span> : null}
                  </dt>
                  <dd>{it.price}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
        {ratesFooter ? <div className={styles.ratesFooter}>{ratesFooter}</div> : null}
      </section>

      <div className={styles.side}>
        <section className={styles.panel} aria-labelledby="payment-title" data-reveal>
          <h3 id="payment-title" className={styles.subTitle}>
            Payment
          </h3>
          <ul className={styles.list}>
            <li>{payment.methods}</li>
            <li>
              {payment.bank.account} {payment.bank.bankName}
              <br />
              {payment.bank.holder}
            </li>
            <li>
              {payment.online.label} <a href={`mailto:${payment.online.email}`}>{payment.online.email}</a>
            </li>
            <li>{payment.cards}</li>
          </ul>
          <p className={styles.reserve}>
            {before}
            <External href={site.whatsappUrl}>{site.phone.displayCompact}</External>
          </p>
        </section>

        <section className={styles.panelPlain} aria-labelledby="guidelines-title" data-reveal>
          <h3 id="guidelines-title" className={styles.subTitle}>
            Class Guidelines
          </h3>
          <ul className={styles.list}>
            {guidelines.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </section>

        <section className={styles.panelPlain} aria-labelledby="location-title" data-reveal>
          <h3 id="location-title" className={styles.subTitle}>
            Our Location
          </h3>
          {locations.map((loc) => (
            <div key={loc.name} className={styles.loc}>
              <p>
                <External href={site.maps[loc.mapKey].url}>{loc.name}</External> {loc.lines[0]}
              </p>
              {loc.lines.slice(1).map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
          ))}
        </section>

        <section className={styles.panelPlain} aria-labelledby="soulclass-title" data-reveal>
          <h3 id="soulclass-title" className={styles.subTitle}>
            Soul Yoga Class
          </h3>
          {soulYogaClass.map((p) => (
            <p key={p} className={styles.para}>
              {p}
            </p>
          ))}
        </section>
      </div>
    </div>
  );
}
