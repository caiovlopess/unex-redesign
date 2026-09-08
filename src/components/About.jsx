import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="sobre" className="w-full overflow-hidden bg-blue-700 px-5 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-[3px] text-blue-200">Sobre a Unex</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight sm:text-5xl">Educação que reconhece o território e amplia futuros.</h2>
          <p className="mt-6 max-w-xl leading-7 text-blue-100">Somos uma universidade feita de encontros: entre conhecimento e prática, talento e oportunidade, pessoas e comunidades. Uma jornada acadêmica com proximidade, inovação e propósito.</p>
          <a href="#inscricao" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-blue-700 transition hover:bg-blue-50">Conheça nossa proposta <ArrowRight size={17} /></a>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="grid min-w-0 grid-cols-2 gap-3">
          {[['+20', 'cursos de graduação'], ['4', 'campi no interior'], ['1', 'comunidade conectada'], ['100%', 'foco no estudante']].map(([number, label]) => (
            <div key={label} className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm"><strong className="block text-3xl font-black">{number}</strong><span className="mt-2 block text-sm leading-5 text-blue-100">{label}</span></div>
          ))}
          <div className="col-span-2 flex items-center gap-3 rounded-3xl bg-blue-800/60 p-5 text-sm text-blue-100"><CheckCircle2 size={20} className="shrink-0 text-cyan-300" /> Um ambiente para você aprender fazendo.</div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;