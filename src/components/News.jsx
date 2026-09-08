import { ArrowUpRight, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const news = [
  { category: "Vida acadêmica", date: "12 ago 2026", title: "Laboratório aberto transforma ideias em protótipos", text: "Estudantes de diferentes cursos se reúnem para criar soluções em uma semana de experimentação." },
  { category: "Comunidade", date: "04 ago 2026", title: "Unex amplia agenda de projetos com impacto local", text: "Novas parcerias aproximam a universidade de iniciativas que movimentam as cidades." },
  { category: "Carreiras", date: "28 jul 2026", title: "Encontro conecta talentos e novos caminhos profissionais", text: "Uma programação especial convida empresas e estudantes para conversas sobre o futuro do trabalho." },
];

function News() {
  return (
    <section id="noticias" className="w-full bg-slate-50 px-5 py-24 sm:px-6 lg:px-8"><div className="mx-auto w-full max-w-7xl"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div className="min-w-0"><p className="text-sm font-bold uppercase tracking-[3px] text-blue-700">Caderno Unex</p><h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Ideias em movimento.</h2></div><a href="#inscricao" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-blue-700">Ver novidades <ArrowUpRight size={17} /></a></div><div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">{news.map(({ category, date, title, text }, index) => <motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white"><div className={`h-2 shrink-0 ${index === 1 ? "bg-cyan-500" : index === 2 ? "bg-amber-400" : "bg-blue-700"}`} /><div className="flex flex-1 flex-col p-7"><div className="flex flex-wrap items-center justify-between gap-3 text-xs font-bold uppercase tracking-wider text-blue-700"><span>{category}</span><span className="flex shrink-0 items-center gap-1 font-medium normal-case tracking-normal text-gray-500"><CalendarDays size={13} />{date}</span></div><h3 className="mt-6 text-xl font-bold leading-7 text-gray-950">{title}</h3><p className="mt-3 text-sm leading-6 text-gray-600">{text}</p><a href="#inscricao" className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-gray-900 group-hover:text-blue-700">Ler destaque <ArrowUpRight size={16} /></a></div></motion.article>)}</div></div></section>
  );
}

export default News;