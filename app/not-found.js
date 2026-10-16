import Button from "@/components/Button";
import Media from "@/components/Media";
import s from "./legacy.module.css";

export const metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className={s.page} aria-labelledby="nf-title">
      <div className={`container ${s.card}`} style={{ borderTop: 0, marginTop: 0, paddingTop: 0 }}>
        <div className={s.cardBody}>
          <p className={`eyebrow ${s.eyebrow}`}>404</p>
          <h1 id="nf-title" className={s.title}>
            This page could not be found
          </h1>
          <p className={s.lead}>The page you are looking for does not exist on the Soul Yoga Bali website.</p>
          <div className={s.actions}>
            <Button href="/" variant="solid">
              Home
            </Button>
            <Button href="/yogaclass">Schedule</Button>
            <Button href="/contact">Contact</Button>
          </div>
        </div>
        <Media name="contact-sunset" sizes="(min-width: 860px) 45vw, 100vw" className={s.media} />
      </div>
    </section>
  );
}
