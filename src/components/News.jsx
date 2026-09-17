import { ArrowUpRight, CalendarDays } from "lucide-react";

const news = [
  { category: "Vida acadêmica", date: "12 ago 2026", title: "Laboratório aberto transforma ideias em protótipos", text: "Estudantes de diferentes cursos se reúnem para criar soluções em uma semana de experimentação." },
  { category: "Comunidade", date: "04 ago 2026", title: "Unex amplia agenda de projetos com impacto local", text: "Novas parcerias aproximam a universidade de iniciativas que movimentam as cidades." },
  { category: "Carreiras", date: "28 jul 2026", title: "Encontro conecta talentos e novos caminhos profissionais", text: "Uma programação especial convida empresas e estudantes para conversas sobre o futuro do trabalho." },
];

function News() {
  return (
    <section id="noticias" className="w-full bg-[#F4F0E8] px-5 py-24 sm:px-6 lg:px-8"><div className="mx-auto w-full max-w-7xl"><div className="flex flex-col justify-between gap-6 border-b-2 border-[#102A43] pb-6 sm:flex-row sm:items-end"><div><h2 className="font-[Newsreader] text-5xl font-medium leading-none text-[#102A43] sm:text-6xl">Caderno Unex</h2><p className="mt-4 text-sm text-[#486581]">Ideias, pessoas e movimentos do nosso cotidiano acadêmico.</p></div><a href="#inscricao" className="inline-flex shrink-0 items-center gap-2 text-sm font-extrabold text-[#102A43] hover:text-[#7A8C3A]">Ver novidades <ArrowUpRight size={17} /></a></div><div className="grid gap-8 pt-8 lg:grid-cols-[1.15fr_0.85fr]"><article className="border-b-4 border-[#B8D334] pb-8 lg:border-b-0 lg:border-r lg:pr-10"><p className="flex items-center gap-2 text-xs font-bold text-[#7A8C3A]"><CalendarDays size={14} /> {news[0].date} · {news[0].category}</p><h3 className="mt-5 max-w-2xl font-[Newsreader] text-4xl font-medium leading-tight text-[#102A43] sm:text-5xl">{news[0].title}</h3><p className="mt-5 max-w-xl text-sm leading-7 text-[#486581]">{news[0].text}</p><a href="#inscricao" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#102A43]">Ler destaque <ArrowUpRight size={16} /></a></article><div>{news.slice(1).map(({ category, date, title, text }) => <article key={title} className="border-b border-[#102A43]/20 py-6 first:pt-0 last:border-0"><p className="flex items-center gap-2 text-xs font-bold text-[#7A8C3A]"><CalendarDays size={14} /> {date} · {category}</p><h3 className="mt-3 font-[Newsreader] text-2xl font-medium leading-tight text-[#102A43]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#486581]">{text}</p></article>)}</div></div></div></section>
  );
}

export default News;