import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Clock3, MapPin, Waves, Wine, Goal } from "lucide-react";
import { Button } from "@/components/ui/button";

const MAP_URL = "https://maps.app.goo.gl/Fdo83HPnoNjBn3ic8?g_st=iw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kawan 22 anos | 01 de novembro" },
      { name: "description", content: "Convite para o aniversário de 22 anos do Kawan. Dia 01 de novembro de 2026, às 13h. Piscina, futebol society e muito mais." },
      { property: "og:title", content: "Kawan 22 anos | 01 de novembro" },
      { property: "og:description", content: "Você está convidado para comemorar os 22 anos do Kawan. 01 de novembro, às 13h." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Crest({ small = false }: { small?: boolean }) {
  return (
    <svg className={small ? "crest crest-small" : "crest"} viewBox="0 0 240 254" role="img" aria-label="Escudo com estrela" xmlns="http://www.w3.org/2000/svg">
      <path className="crest-edge" d="M120 14C86 14 72 36 20 36v58c0 67 39 119 100 151 61-32 100-84 100-151V36c-52 0-66-22-100-22Z" />
      <path className="crest-inner" d="M120 24C89 24 70 46 30 46v48c0 60 33 108 90 140 57-32 90-80 90-140V46c-40 0-59-22-90-22Z" />
      <path className="crest-star" d="m120 48 17 53h56l-45 33 17 53-45-33-45 33 17-53-45-33h56z" />
    </svg>
  );
}

const notes = [
  { number: "01", title: "Piscina", description: "Vai ter piscina no local.", Icon: Waves },
  { number: "02", title: "Bebidas", description: "Quem for beber bebida alcoólica, leva a sua.", Icon: Wine },
  { number: "03", title: "Futebol society", description: "Campo reservado das 16:00 às 18:00. Traga sua chuteira pra jogar!", Icon: Goal },
];

function Index() {
  return (
    <main className="invitation-shell">
      <section className="cover" aria-labelledby="invitation-title">
        <div className="cover-grain" aria-hidden="true" />
        <div className="cover-topline" aria-hidden="true"><span>CONVITE ESPECIAL</span><span>01.11.2026</span></div>
        <div className="crest-stage" aria-hidden="true">
          <div className="ribbon ribbon-one" /><div className="ribbon ribbon-two" /><div className="ribbon ribbon-three" />
          <div className="crest-motion"><Crest /></div>
        </div>
        <div className="cover-copy">
          <p className="eyebrow cover-eyebrow">ANIVERSÁRIO DO</p>
          <h1 id="invitation-title">KAWAN</h1>
          <p className="age">22 ANOS</p>
          <div className="cover-rule" />
          <p className="invitation-line">BORA COMEMORAR ESSE DIA JUNTOS!</p>
          <div className="date-row"><span>01 <small>NOVEMBRO</small></span><span className="date-divider" aria-hidden="true" /><span>13<small>HORAS</small></span></div>
        </div>
        <a className="scroll-cue" href="#detalhes" aria-label="Ver detalhes do convite"><span>CONFIRA OS DETALHES</span><ArrowDown size={16} strokeWidth={1.8} /></a>
      </section>

      <section className="details" id="detalhes" aria-labelledby="details-title">
        <div className="details-inner">
          <div className="details-heading">
            <div className="small-mark"><Crest small /><span>É DIA DE FESTA</span></div>
            <h2 id="details-title">CHEGA MAIS<span className="period">.</span></h2>
            <p>Dia 01 de novembro, a partir das 13:00.</p>
          </div>
          <div className="notes-list">
            {notes.map(({ number, title, description, Icon }) => (
              <div className="note" key={number}>
                <span className="note-number">{number}</span>
                <div className="note-content"><h3>{title}</h3><p>{description}</p></div>
                <Icon className="note-icon" size={32} strokeWidth={1.35} aria-hidden="true" />
              </div>
            ))}
          </div>
          <div className="location-block">
            <div className="location-label"><MapPin size={18} strokeWidth={1.8} /><span>LOCAL DA FESTA</span></div>
            <h3>TE ESPERO LÁ.</h3>
            <Button asChild variant="invitation" size="lg"><a href={MAP_URL} target="_blank" rel="noopener noreferrer">ABRIR LOCALIZAÇÃO <ArrowUpRight aria-hidden="true" /></a></Button>
          </div>
          <div className="details-footer"><span>KAWAN · 22 ANOS</span><span><Clock3 size={13} aria-hidden="true" /> 01 NOV · 13:00</span></div>
        </div>
      </section>
    </main>
  );
}
