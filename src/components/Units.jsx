import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const units = [
  { city: "Feira de Santana", region: "Portal do sertão", code: "FS" },
  { city: "Itabuna", region: "Sul da Bahia", code: "IT" },
  { city: "Jequié", region: "Médio Rio de Contas", code: "JQ" },
  { city: "Vitória da Conquista", region: "Sudoeste baiano", code: "VC" },
];

function Units() {
  return (
    <section id="unidades" className="w-full bg-slate-50 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-[3px] text-blue-700">Onde estamos</p><h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Perto de onde a vida acontece.</h2></div><p className="max-w-sm text-sm leading-6 text-gray-600">Uma rede de campi para levar ensino de qualidade a diferentes pontos da Bahia.</p></div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {units.map(({ city, region, code }, index) => (
            <motion.a href="#inscricao" key={city} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="group relative flex min-h-56 min-w-0 h-full flex-col overflow-hidden rounded-3xl bg-blue-900 p-6 text-white shadow-lg shadow-blue-900/10"><div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border-[18px] border-white/10" /><span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sm font-black">{code}</span><div className="relative mt-auto pr-8"><div className="flex items-center gap-2 text-blue-200"><MapPin size={15} /> <span className="text-xs uppercase tracking-wider">Campus</span></div><h3 className="mt-2 text-xl font-bold break-words">{city}</h3><p className="mt-1 text-sm text-blue-200">{region}</p></div><ArrowUpRight size={19} className="absolute bottom-6 right-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Units;