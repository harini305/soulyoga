"use client";

import { useId, useRef, useState } from "react";
import { registrationIntro } from "@/data/trainings";
import { site } from "@/data/site";
import styles from "./RegistrationForm.module.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};
  if (!values.name?.trim()) errors.name = "Please enter your name.";
  if (!values.email?.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = "Please enter a valid email address, for example name@example.com.";
  return errors;
}

function summary(program, values) {
  return [
    `Registration enquiry: ${program}`,
    "",
    ...registrationIntro.fields.filter((f) => values[f.name]?.trim()).map((f) => `${f.label}: ${values[f.name].trim()}`),
  ].join("\n");
}

/*
  TTC "Contact & Registration" form, rebuilt from the Wix form fields
  (Name* · Nationality · Email* · Phone · How you find our program · Your questions or comment).

  The audit could not establish where Wix delivered submissions, so no back end is wired up
  (site.registration.endpoint is null). In that mode the form validates, then tells the
  visitor plainly that nothing was sent and offers to open their own email app or WhatsApp
  with the details filled in. Nothing is transmitted unless the visitor chooses to send it.
  When an endpoint is configured, the form POSTs JSON to it instead.
*/
export default function RegistrationForm({ program }) {
  const uid = useId();
  const formRef = useRef(null);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | sent | not-connected | error
  const statusRef = useRef(null);
  const endpoint = site.registration.endpoint;

  const onChange = (e) => {
    const next = { ...values, [e.target.name]: e.target.value };
    setValues(next);
    if (touched[e.target.name]) setErrors(validate(next));
    if (status === "not-connected" || status === "error") setStatus("idle");
  };

  const onBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate(values));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "submitting") return; // guards against double submission
    const errs = validate(values);
    setErrors(errs);
    setTouched({ name: true, email: true });
    if (Object.keys(errs).length) {
      const first = formRef.current.querySelector(`[name="${Object.keys(errs)[0]}"]`);
      first?.focus();
      return;
    }

    if (!endpoint) {
      setStatus("not-connected");
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ program, ...values }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  };

  const text = summary(program, values);
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`Registration enquiry: ${program}`)}&body=${encodeURIComponent(text)}`;
  const whatsapp = `${site.whatsappUrl}?text=${encodeURIComponent(text)}`;

  if (status === "sent") {
    return (
      <div className={styles.status} role="status" tabIndex={-1} ref={statusRef}>
        <p className={styles.statusTitle}>Thanks for submitting!</p>
      </div>
    );
  }

  return (
    <form ref={formRef} className={styles.form} noValidate onSubmit={onSubmit} aria-describedby={`${uid}-req`}>
      <p id={`${uid}-req`} className={styles.req}>
        Fields marked <span aria-hidden="true">*</span>
        <span className="visually-hidden">with an asterisk</span> are required.
      </p>
      <div className={styles.fields}>
        {registrationIntro.fields.map((f) => {
          const id = `${uid}-${f.name.replace(/\s+/g, "-")}`;
          const err = touched[f.name] && errors[f.name];
          const common = {
            id,
            name: f.name,
            value: values[f.name] || "",
            onChange,
            onBlur,
            required: f.required || undefined,
            "aria-required": f.required || undefined,
            "aria-invalid": err ? true : undefined,
            "aria-describedby": err ? `${id}-err` : undefined,
            autoComplete: f.autoComplete,
            className: styles.input,
          };
          return (
            <div key={f.name} className={`${styles.field} ${f.type === "textarea" ? styles.full : ""}`}>
              <label htmlFor={id} className={styles.label}>
                {f.label}
                {f.required ? <span aria-hidden="true"> *</span> : null}
              </label>
              {f.type === "textarea" ? <textarea rows={5} {...common} /> : <input type={f.type} {...common} />}
              {err ? (
                <p id={`${id}-err`} className={styles.error}>
                  {err}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.submit} disabled={status === "submitting"} aria-disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Submit"}
        </button>
      </div>

      <div aria-live="polite">
        {status === "not-connected" ? (
          <div className={styles.status} tabIndex={-1} ref={statusRef}>
            <p className={styles.statusTitle}>Your details have not been sent.</p>
            <p>
              Online registration is not connected yet, so nothing was sent to the studio. To register, send your details
              directly — the buttons below open your own email app or WhatsApp with the form filled in, and you choose whether to send.
            </p>
            <div className={styles.statusActions}>
              <a href={mailto} className={styles.altBtn}>
                Email {site.email}
              </a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={styles.altBtn}>
                WhatsApp {site.phone.displayCompact}
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        ) : null}
        {status === "error" ? (
          <div className={styles.status} tabIndex={-1} ref={statusRef}>
            <p className={styles.statusTitle}>Something went wrong and your registration was not sent.</p>
            <p>
              Please try again, or contact the studio at <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
        ) : null}
      </div>
    </form>
  );
}
