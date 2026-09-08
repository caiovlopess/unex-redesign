import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  { quote: "A rotina de projetos me ajudou a transformar curiosidade em direção. Hoje tenho mais clareza sobre o profissional que quero ser.", name: "Marina Alves", course: "Estudante demonstrativa de Administração", initials: "MA" },
  { quote: "Encontrei professores que conhecem meu processo e me incentivam a ir além da resposta mais fácil.", name: "Rafael Santos", course: "Estudante demonstrativo de Sistemas de Informação", initials: "RS" },
  { quote: "A universidade abriu espaço para eu testar ideias e participar de experiências que fazem sentido para a minha comunidade.", name: "Luana Ribeiro", course: "Estudante demonstrativa de Enfermagem", initials: "LR" },
];

function Testimonials() {
  return (
    <section className="w-full bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl"><div className="text-center"><p className="text-sm font-bold uppercase tracking-[3px] text-blue-700">Vozes da jornada</p><h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Aprender também é encontrar seu lugar.</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600">Relatos acadêmicos demonstrativos, criados para ilustrar diferentes experiências na universidade.</p></div>
        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">{testimonials.map(({ quote, name, course, initials }, index) => <motion.article key={name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="flex h-full min-w-0 flex-col rounded-3xl border border-gray-100 bg-slate-50 p-7"><Quote className="shrink-0 text-blue-700" size={25} /><p className="mt-6 text-base leading-7 text-gray-700">“{quote}”</p><div className="mt-auto flex items-center gap-3 border-t border-gray-200 pt-5"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">{initials}</div><div className="min-w-0"><p className="text-sm font-bold text-gray-950">{name}</p><p className="mt-0.5 break-words text-xs text-gray-500">{course}</p></div></div></motion.article>)}</div>
      </div>
    </section>
  );
}

export default Testimonials;