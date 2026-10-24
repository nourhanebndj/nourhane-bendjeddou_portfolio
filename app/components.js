"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { files, slug } from "./icons";
import { useLang, loc } from "./i18n";
import { categories, projects, experience, education, skills } from "./data";

gsap.registerPlugin(ScrollTrigger);

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const calm = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Icônes locales : public/icons/*.svg ---------- */

export function Icon({ name, size = 40 }) {
  const [ok, setOk] = useState(true);
  const f = files[name];
  if (!f || !ok) return <span className="ico-fb" style={{ width: size, height: size }}>{name[0]}</span>;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`${base}/icons/${f}.svg`} alt="" width={size} height={size} onError={() => setOk(false)} />;
}

/* ---------- Thème ---------- */
export function ThemeToggle() {
  const [t, setT] = useState("dark");
  useEffect(() => setT(document.documentElement.dataset.theme || "dark"), []);
  const flip = () => {
    const n = t === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = n;
    try { localStorage.setItem("theme", n); } catch (e) {}
    setT(n);
  };
  return (
    <button className="theme" onClick={flip} aria-label={t === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
      {t === "dark" ? "☀" : "☾"}
    </button>
  );
}

/* ---------- Animations : intro, compteurs, apparitions ---------- */
export function Motion() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll("[data-count]").forEach((el) => {
        const to = +el.dataset.count, o = { v: 0 };
        if (calm()) { el.textContent = to; return; }
        gsap.to(o, { v: to, duration: 1.6, delay: 0.6, ease: "power2.out", onUpdate: () => (el.textContent = Math.round(o.v)) });
      });
      ScrollTrigger.create({ start: 40, end: "max", onToggle: (s) => document.querySelector(".top")?.classList.toggle("scrolled", s.isActive) });
      if (calm()) return;
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".top", { y: -30, opacity: 0, duration: 0.6 })
        .from(".intro > *", { y: 36, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.3")
        .from(".photo", { scale: 0.92, opacity: 0, duration: 0.9 }, "-=0.9");
      gsap.to(".float", { y: "+=12", duration: 2.4, ease: "sine.inOut", repeat: -1, yoyo: true, stagger: 0.4 });
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 90%", once: true,
        onEnter: (els) => gsap.fromTo(els, { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }),
      });
    });
    return () => ctx.revert();
  }, []);
  return null;
}

export function Avatar() {
  const [ok, setOk] = useState(true);
  if (!ok) return <div className="avatar fb">N</div>;
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      className="avatar"
      src={`${base}/images/photo_profil.png`}
      alt="Portrait of Nourhane Bendjeddou"
      onError={() => setOk(false)}
    />
  );
}

/* ---------- Skills ---------- */
export function Skills() {
  const { t } = useLang();
  return (
    <div className="skills">
      {skills.map(([g, items], gi) => (
        <div className="sg" key={g} data-reveal>
          <h3>{t.groups[gi]}</h3>
          <ul>
            {items.map((s) => (
              <li key={s}><Icon name={s} size={38} /><span>{s}</span></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ---------- Projets : couvertures dessinées (aucune capture nécessaire) ---------- */
const catIcon = { WordPress: "WordPress", "Web development": "Laravel", Applications: "Flutter", "Big Data": "Python" };
const hash = (s) => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) % 997, 7);

const EXTS = ["jpg", "webp", "png", "jpeg"];

function Card({ p }) {
  const { t } = useLang();
  const [e, setE] = useState(0);
  const ref = useRef(null);
  // si l'image a échoué avant l'hydratation, on passe à l'extension suivante
  useEffect(() => {
    const im = ref.current;
    if (im && im.complete && im.naturalWidth === 0) setE((x) => x + 1);
  }, [e]);
  const host = new URL(p.url).hostname.replace("www.", "");
  const code = /github|kaggle/.test(p.url);
  return (
    <a className="pc" href={p.url} target="_blank" rel="noopener noreferrer">
      <div className="cover" style={{ "--ang": `${110 + (hash(p.name) % 80)}deg` }}>
        <span className="bar"><i /><i /><i /><em>{host}</em></span>
        <span className="ci"><Icon name={catIcon[p.cat]} size={44} /></span>
{p.image && (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={`${base}${p.image}`}
    alt={`Capture d’écran du projet ${p.name}`}
    loading="lazy"
    onError={(event) => {
      event.currentTarget.style.display = "none";
    }}
  />
)}

      </div>
      <div className="meta">
        <div className="mt">
          <span className="n">{p.name}</span>
          <span className="c">{t.cats[p.cat]}</span>
        </div>
        <span className="go">{code ? t.code : t.visit} ↗</span>
      </div>
    </a>
  );
}

export function Work() {
  const { t } = useLang();
  const [cat, setCat] = useState("All");
  const box = useRef(null);
  const list = projects.filter((p) => cat === "All" || p.cat === cat);
  useEffect(() => {
    if (calm()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".pc", { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.05, ease: "power3.out" });
    }, box);
    return () => ctx.revert();
  }, [cat]);
  return (
    <div ref={box}>
      <div className="tabs" role="tablist" aria-label="Filter projects">
        {categories.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} className={cat === c ? "on" : ""} onClick={() => setCat(c)}>{t.cats[c]}</button>
        ))}
      </div>
      <div className="pgrid">{list.map((p) => <Card key={p.name} p={p} />)}</div>
    </div>
  );
}

/* ---------- Timeline unique : expérience + études ---------- */
const MONTHS = "JanFebMarAprMayJunJulAugSepOctNovDec";
const key = (s) => {
  const m = s.match(/([A-Z][a-z]{2}) (\d{4})/);
  return m ? +m[2] * 12 + MONTHS.indexOf(m[1]) / 3 : 0;
};
const items = [
  ...education.map((e, idx) => ({ kind: "Study", e, idx })),
  ...experience.map((e, idx) => ({ kind: "Work", e, idx })),
].sort((a, b) => key(b.e[0]) - key(a.e[0]));

export function Timeline() {
  const { t, lang } = useLang();
  const ref = useRef(null);
  useEffect(() => {
    if (calm()) { gsap.set(".fill", { scaleY: 1 }); return; }
    const ctx = gsap.context(() => {
      gsap.fromTo(".fill", { scaleY: 0 }, {
        scaleY: 1, ease: "none", transformOrigin: "top",
        scrollTrigger: { trigger: ref.current, start: "top 65%", end: "bottom 75%", scrub: true },
      });
      gsap.utils.toArray(".tli").forEach((li) => {
        gsap.timeline({ scrollTrigger: { trigger: li, start: "top 85%" } })
          .from(li.querySelector(".dot"), { scale: 0, duration: 0.4, ease: "back.out(3)" })
          .from(li.querySelector(".tc"), { x: matchMedia("(min-width:821px)").matches ? (li.classList.contains("r") ? 60 : -60) : 30, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.2");
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <ol className="tl" ref={ref}>
      <span className="rail"><span className="fill" /></span>
      {items.map(({ kind, e, idx }, i) => { const [when, role, where, text] = loc(kind, idx, e, lang); return (
        <li key={role + when} className={`tli ${i % 2 ? "r" : "l"}`}>
          <span className={`dot ${kind}`} />
          <div className="tc">
            <div className="tt">
              <span className={`badge ${kind}`}>{kind === "Work" ? t.work : t.edu}</span>
              <time>{when}</time>
            </div>
            <h3>{role}</h3>
            <p className="where">{where}</p>
            <p>{text}</p>
          </div>
        </li>
      ); })}
    </ol>
  );
}

/* ---------- Bande de skills : défilement infini ---------- */
export function Marquee({ names }) {
  const ref = useRef(null);
  useEffect(() => {
    if (calm()) return;
    const tw = gsap.to(ref.current, { xPercent: -50, duration: 36, ease: "none", repeat: -1 });
    const wrap = ref.current.parentElement;
    const slow = () => gsap.to(tw, { timeScale: 0.2, duration: 0.4 });
    const fast = () => gsap.to(tw, { timeScale: 1, duration: 0.4 });
    wrap.addEventListener("pointerenter", slow);
    wrap.addEventListener("pointerleave", fast);
    return () => {
      tw.kill();
      wrap.removeEventListener("pointerenter", slow);
      wrap.removeEventListener("pointerleave", fast);
    };
  }, []);
  const row = [...names, ...names];
  return (
    <div className="mq-wrap" role="img" aria-label={`Technologies: ${names.join(", ")}`}>
      <div className="mq" ref={ref}>
        {[...row, ...row].map((n, i) => (
          <span className="mi" key={n + i}><Icon name={n} size={34} /><em>{n}</em></span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Sélecteur de langue ---------- */
export function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang" role="group" aria-label="Language">
      {["en", "fr", "ar"].map((l) => (
        <button key={l} className={lang === l ? "on" : ""} aria-pressed={lang === l} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
      ))}
    </div>
  );
}
