import { Compass, FlaskConical, Network, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { title: "Estrutura que acolhe", text: "Ambientes projetados para estudar, trocar e experimentar com conforto.", icon: Sparkles },
  { title: "Formação consistente", text: "Professores próximos e uma base sólida para decisões mais conscientes.", icon: Compass },
  { title: "Experiência prática", text: "Projetos e vivências que aproximam o conhecimento dos desafios reais.", icon: FlaskConical },
  { title: "Conexão com o mercado", text: "Pontes com pessoas, empresas e ideias que ampliam seu horizonte.", icon: Network },
];

function Benefits() {
  return (
    <section className="w-full bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-[3px] text-blue-700">Mais que uma graduação</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Uma experiência para ir além da sala de aula.</h2>
          <p className="mt-5 max-w-lg leading-7 text-gray-600">Na Unex, cada etapa é uma oportunidade para descobrir sua potência e construir uma trajetória com sentido.</p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map(({ title, text, icon: Icon }, index) => (
            <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="flex h-full min-w-0 flex-col rounded-3xl border border-gray-100 bg-slate-50 p-6">
              <Icon className="text-blue-700" size={26} />
              <h3 className="mt-6 font-bold text-gray-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;