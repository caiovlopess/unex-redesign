import { ArrowUpRight, BriefcaseBusiness, Code2, Gavel, HeartPulse, Stethoscope, Syringe } from "lucide-react";
import { motion } from "framer-motion";

const courses = [
  { name: "Medicina", description: "Ciência, cuidado e decisão para transformar vidas.", icon: Stethoscope, color: "bg-blue-50 text-blue-700" },
  { name: "Direito", description: "Pensamento crítico para construir justiça e cidadania.", icon: Gavel, color: "bg-amber-50 text-amber-700" },
  { name: "Odontologia", description: "Precisão técnica aliada a uma visão integral do paciente.", icon: Syringe, color: "bg-cyan-50 text-cyan-700" },
  { name: "Enfermagem", description: "Conhecimento e acolhimento no centro do cuidado.", icon: HeartPulse, color: "bg-rose-50 text-rose-700" },
  { name: "Administração", description: "Estratégia e liderança para mover organizações.", icon: BriefcaseBusiness, color: "bg-emerald-50 text-emerald-700" },
  { name: "Sistemas de Informação", description: "Tecnologia aplicada a problemas que importam.", icon: Code2, color: "bg-violet-50 text-violet-700" },
];

function Courses() {
  return (
    <section id="cursos" className="w-full bg-slate-50 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[3px] text-blue-700">Escolha seu caminho</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Cursos para quem quer fazer acontecer.</h2>
          <p className="mt-4 text-base leading-7 text-gray-600">Formações pensadas para conectar repertório, prática e as oportunidades do nosso tempo.</p>
        </motion.div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map(({ name, description, icon: Icon, color }, index) => (
            <motion.article key={name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="group flex h-full min-w-0 flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}><Icon size={24} /></div>
              <h3 className="mt-6 text-xl font-bold text-gray-950">{name}</h3>
              <p className="mt-2 min-h-14 text-sm leading-6 text-gray-600">{description}</p>
              <a href="#inscricao" className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-blue-700 transition-colors group-hover:text-blue-900">Conhecer curso <ArrowUpRight size={16} /></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;