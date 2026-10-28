'use client';
import { useEffect, useRef, useState } from 'react';
import { athletes, type Athlete } from './athletes';
const initials = (name: string) => `${name.split(' ')[0][0]}${name.split(' ').at(-1)?.[0]}`;
const weekdays: Record<string, string> = { '2026-10-21': 'Miércoles', '2026-10-22': 'Jueves', '2026-10-23': 'Viernes', '2026-10-24': 'Sábado', '2026-10-25': 'Domingo', '2026-10-26': 'Lunes', '2026-10-27': 'Martes' };
const formatDay = (date: string) => `${weekdays[date] ?? ''} ${date.slice(8, 10)}/${date.slice(5, 7)}`.trim();
const toHundredths = (t: string) => t.split(':').reduce((acc, part) => acc * 60 + Number(part), 0) * 100;
const formatDelta = (h: number) => { const abs = Math.abs(Math.round(h)); const m = Math.floor(abs / 6000); const sec = ((abs % 6000) / 100).toFixed(2); return `${h < 0 ? '−' : '+'}${m ? `${m}:${sec.padStart(5, '0')}` : sec} s`; };
export default function SwimApp() {
  const [route, setRoute] = useState('');
  const heading = useRef<HTMLHeadingElement>(null);
  const didNavigate = useRef(false);
  useEffect(() => {
    const sync = () => { if (location.hash === '#contenido') return; try { setRoute(decodeURIComponent(location.hash.slice(1))); } catch { setRoute(''); } };
    sync(); window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);
  useEffect(() => { if (didNavigate.current) { window.scrollTo(0, 0); heading.current?.focus({ preventScroll: true }); } didNavigate.current = true; }, [route]);
  const athlete = athletes.find(a => route === a.id);
  const card = (a: Athlete) => <article className="athlete-card" key={a.id}>
    <div className="card-top"><div className="avatar" aria-hidden="true">{initials(a.name)}</div></div>
    <h3><a className="card-main-link" href={`#${a.id}`}>{a.name}</a></h3>
    <p className="athlete-meta">{a.age} años <span>·</span> Categoría {a.category}</p>
    <div className="card-bottom"><span>{a.events.length} pruebas</span><span className="view-label">Ver resultados <span aria-hidden="true">→</span></span></div>
  </article>;
  return <>
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    <header><div className="header-inner"><a className="brand" href="#equipo" aria-label="Natación Estudiantes, volver al equipo"><img src="/escudo-edlp.webp" alt="Escudo de Estudiantes de La Plata" width="37" height="60"/><span>ESTUDIANTES DE LA PLATA<strong>Natación Masters</strong></span></a></div></header>
    <main id="contenido" tabIndex={-1}>
      {athlete ? <section className="detail"><a className="back" href="#equipo">← Volver al equipo</a><div className="profile-heading"><div className="profile-avatar avatar" aria-hidden="true">{initials(athlete.name)}</div><div><p className="eyebrow">NATACIÓN · ESTUDIANTES DE LA PLATA</p><h1 ref={heading} tabIndex={-1}>{athlete.name}</h1><p className="profile-meta">EDELP <span>·</span> {athlete.age} años <span>·</span> Categoría {athlete.category}</p></div></div><div className="section-title"><h2>Sus resultados</h2><span className="count">{athlete.events.length} inscripciones</span></div><p className="info-note"><span aria-hidden="true">ⓘ</span> Resultados finales del campeonato. La diferencia se calcula contra el tiempo de inscripción de cada prueba.</p><div className="event-grid">{athlete.events.map(e => <article className="event-card" key={e.eventNumber}><div className="event-top"><span className="stroke">{e.stroke}</span><span>Evento #{e.eventNumber}</span></div><h3>{e.distance} m {e.stroke}</h3>{e.result ? <div className={`result${e.position !== undefined && e.position <= 3 ? ' podium' : ''}`}><div className="result-main"><div><span>Tiempo final</span><strong>{e.result}</strong></div>{e.position !== undefined && <div className="place"><span>Puesto</span><strong>{e.position}º</strong></div>}</div><p className="result-compare">Inscripción {e.seedTime}{(() => { const d = toHundredths(e.result) - toHundredths(e.seedTime); return d === 0 ? <span> · Igualó su tiempo</span> : <span className={d < 0 ? 'better' : 'slower'}> · {d < 0 ? 'Mejoró' : 'Diferencia'} {formatDelta(d)}</span>; })()}</p></div> : <div className="seed"><span>Tiempo de inscripción</span><strong>{e.seedTime}</strong></div>}{e.date && e.time && e.heat !== undefined && e.lane !== undefined && <dl className="schedule"><div className="schedule-when"><dt>Inicio de la serie</dt><dd><time dateTime={`${e.date}T${e.time}`}>{formatDay(e.date)} · {e.time} h</time></dd></div><div><dt>Serie</dt><dd><strong>{e.heat}</strong>{e.heatCount !== undefined && <span> de {e.heatCount}</span>}</dd></div><div><dt>Línea</dt><dd><strong>{e.lane}</strong></dd></div></dl>}</article>)}</div></section>
      : <>
      <section className="hero"><div className="hero-copy"><p className="eyebrow"><span className="red-dot"/> PANAMERICANO MASTERS · BUENOS AIRES 2026</p><h1 ref={heading} tabIndex={-1}>Seguí a <span>EDELP.</span></h1><p className="intro">Acompañá a nuestros nadadores.<br/>Todas sus pruebas y resultados, en un solo lugar.</p><div className="stats"><span><b>8</b> nadadores</span></div></div><div className="hero-art" aria-hidden="true"><div className="lanes"/><div className="art-label">ORGULLO PINCHARRATA</div><img src="/escudo-edlp.webp" alt=""/><span>EL PINCHA EN EL AGUA</span></div></section>
      <section className="team"><div className="team-heading"><div><p className="eyebrow">NUESTROS REPRESENTANTES</p><h2>El equipo <span className="count">{athletes.length}</span></h2><p>Elegí un nadador para ver cómo le fue en cada prueba.</p></div></div>
      <div className="athlete-grid">{athletes.map(card)}</div>
      </section></>}
      <footer><div className="footer-brand"><img src="/escudo-edlp.webp" alt="" width="24" height="39"/><strong>Vamos, Pincha.</strong></div><div><p>PanAm Aquatics Masters Championships · Buenos Aires 2026</p><p>Inscripciones según el Psych Sheet; resultados finales del torneo.</p><p>Espacio de seguimiento del equipo · No es el sitio oficial del torneo.</p></div><span className="footer-mark">EDELP / 2026</span></footer>
    </main>
  </>;
}
