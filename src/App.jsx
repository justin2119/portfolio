import { useState } from 'react'
import { translations } from './i18n.js'
import ProfileImage from './components/ProfileImage.jsx'

const devStack = ['Flutter / Dart', 'Clean Architecture', 'Riverpod · fpdart · Hive', 'React / Node.js', 'Supabase']
const eduStack = ['Physique & Chimie', 'Démarche APC / APC approach', 'Ressources offline-first']

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'fr')
  const t = translations[lang]
  const switchLang = next => { setLang(next); localStorage.setItem('lang', next); document.documentElement.lang = next }
  return <div className="site-shell">
    <header className="topbar"><a className="brand" href="#top">JB<span>/</span></a><nav>{t.nav.map((item, i) => <a key={item} href={['#about','#skills','#projects','#contact'][i]}>{item}</a>)}</nav><div className="language" aria-label={t.langLabel}><button className={lang === 'fr' ? 'active' : ''} onClick={() => switchLang('fr')} aria-pressed={lang === 'fr'}>FR</button><button className={lang === 'en' ? 'active' : ''} onClick={() => switchLang('en')} aria-pressed={lang === 'en'}>EN</button></div></header>
    <main id="top">
      <section className="hero"><div className="hero-copy"><p className="eyebrow">01 — {t.heroKicker}</p><h1>{t.heroTitle}</h1><p className="lead">{t.heroText}</p><div className="actions"><a className="button" href="#contact">{t.contactCta} <span>↗</span></a><a className="text-link" href="https://github.com/justin2119" target="_blank" rel="noreferrer">GitHub ↗</a></div></div><ProfileImage copy={t} /></section>
      <section id="about" className="section split"><div><p className="eyebrow">02 — {t.aboutTitle}</p><h2>{t.philosophyTitle}</h2></div><div><p className="body-large">{t.aboutText}</p><p>{t.philosophyText}</p></div></section>
      <section id="skills" className="section"><p className="eyebrow">03 — {t.skillsTitle}</p><div className="skill-grid"><div className="panel"><h3>{t.dev}</h3>{devStack.map(x => <div className="skill" key={x}><span>↳</span>{x}</div>)}</div><div className="panel"><h3>{t.education}</h3>{eduStack.map(x => <div className="skill" key={x}><span>↳</span>{x}</div>)}</div></div></section>
      <section id="projects" className="section"><p className="eyebrow">04 — {t.projectsTitle}</p><div className="project-list">{t.projects.map(([name, desc], i) => <article className="project" key={name}><span className="index">0{i + 1}</span><div><h3>{name}</h3><p>{desc}</p></div><span className="arrow">↗</span></article>)}</div></section>
      <section className="section split context"><div><p className="eyebrow">05 — {t.contextTitle}</p><h2>FAST / VOGAN</h2></div><p className="body-large">{t.contextText}</p></section>
      <section id="contact" className="contact"><p className="eyebrow">06 — CONTACT</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p><a className="email" href="mailto:justinbina515@gmail.com">justinbina515@gmail.com ↗</a><div className="contact-links"><a href="https://t.me/justin219" target="_blank" rel="noreferrer">Telegram @justin219</a><span>{t.location}</span></div></section>
    </main><footer><span>© Justin BINA</span><span>{t.footer}</span></footer>
  </div>
}
