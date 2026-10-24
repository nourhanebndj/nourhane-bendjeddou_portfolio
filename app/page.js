"use client";
import { Avatar, Skills, Work, Timeline, ThemeToggle, LangSwitch, Motion, Icon, Marquee } from "./components";
import { hasIcon } from "./icons";
import { useLang } from "./i18n";
import { profile, projects, skills } from "./data";

const serviceIcons = ["WordPress", "Laravel", "Flutter", "Python"];
const years = new Date().getFullYear() - 2022;
const strip = skills.flatMap(([, items]) => items).filter(hasIcon);

export default function Home() {
  const { t } = useLang();
  return (
    <>
      <Motion />
      <header className="top">
        <div className="bar-in">
          <a href="#top" className="brand">Nourhane Bendjeddou</a>
          <nav>
            <a href="#services">{t.nav[0]}</a>
            <a href="#work">{t.nav[1]}</a>
            <a href="#skills">{t.nav[2]}</a>
            <a href="#journey">{t.nav[3]}</a>
          </nav>
          <div className="actions">
            <LangSwitch />
            <ThemeToggle />
            <a className="btn solid sm" href="#contact">{t.contact}</a>
          </div>
        </div>
      </header>

      <main>
        <section id="top" className="hero">
          <div className="intro">
            <p className="status"><i /> {t.status}</p>
            <h1>{t.h1}</h1>
            <p className="lead">{t.lead}</p>
            <div className="cta">
              <a className="btn solid" href="#work">{t.cta[0]}</a>
              <a className="btn" href={`mailto:${profile.email}`}>{t.cta[1]}</a>
            </div>
            <div className="stats">
              <div><b data-count={projects.length}>0</b><span>{t.stats[0]}</span></div>
              <div><b data-count={years}>0</b><span>{t.stats[1]}</span></div>
            </div>
          </div>
          <div className="photo-wrap">
            <div className="photo"><Avatar /></div>
            <span className="float f1"><Icon name="WordPress" size={34} /></span>
            <span className="float f2"><Icon name="Laravel" size={34} /></span>
            <span className="float f3"><Icon name="Flutter" size={34} /></span>
            <span className="float f4"><Icon name="Python" size={34} /></span>
          </div>
        </section>

        <div className="strip"><Marquee names={strip} /></div>

        <section id="services" className="sec">
          <div className="head" data-reveal>
            <h2>{t.svcH}</h2>
            <p>{t.svcP}</p>
          </div>
          <div className="svc-grid">
            {t.svc.map(([title, desc], i) => (
              <article className="svc" key={i} data-reveal>
                <span className="svc-ico"><Icon name={serviceIcons[i]} size={36} /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="sec alt">
          <div className="inner">
            <div className="head" data-reveal>
              <h2>{t.workH}</h2>
              <p>{t.workP}</p>
            </div>
            <Work />
          </div>
        </section>

        <section id="skills" className="sec">
          <div className="head" data-reveal>
            <h2>{t.toolsH}</h2>
            <p>{t.toolsP}</p>
          </div>
          <Skills />
        </section>

        <section id="journey" className="sec alt">
          <div className="inner">
            <div className="head" data-reveal>
              <h2>{t.jH}</h2>
              <p>{t.jP}</p>
            </div>
            <Timeline />
          </div>
        </section>

        <section id="contact" className="sec">
          <div className="cta-band" data-reveal>
            <h2>{t.ctaH}</h2>
            <p>{t.ctaP}</p>
            <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
            <div className="links">
              <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">© {new Date().getFullYear()} {profile.name} · {t.loc}</footer>
    </>
  );
}
