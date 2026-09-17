import { ArrowUpRight, MapPin } from "lucide-react";

const units = [
  { city: "Feira de Santana", region: "Portal do sertão", code: "FS" },
  { city: "Itabuna", region: "Sul da Bahia", code: "IT" },
  { city: "Jequié", region: "Médio Rio de Contas", code: "JQ" },
  { city: "Vitória da Conquista", region: "Sudoeste baiano", code: "VC" },
];

function Units() {
  return (
    <section id="unidades" className="w-full bg-[#F4F0E8] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]"><div><h2 className="max-w-sm font-[Newsreader] text-5xl font-medium leading-none text-[#102A43] sm:text-6xl">Perto de onde a vida acontece.</h2><p className="mt-6 max-w-sm text-sm leading-6 text-[#486581]">Quatro cidades, uma rede de possibilidades para estudar sem deixar de pertencer ao seu território.</p></div>
        <div className="relative border-l border-[#102A43]/25 pl-6 sm:pl-10"><div className="absolute bottom-0 left-[-5px] top-0 w-2 bg-[#B8D334]" />
          {units.map(({ city, region, code }) => (
            <a href="#inscricao" key={city} className="group grid min-w-0 grid-cols-[42px_1fr_auto] items-center gap-4 border-b border-[#102A43]/20 py-6 sm:grid-cols-[64px_1fr_1fr_auto] sm:gap-6"><span className="font-[Newsreader] text-3xl text-[#7A8C3A]">{code}</span><div><div className="flex items-center gap-2 text-xs font-bold text-[#7A8C3A]"><MapPin size={14} /> Campus</div><h3 className="mt-1 font-[Newsreader] text-2xl font-medium text-[#102A43]">{city}</h3></div><p className="hidden text-sm leading-6 text-[#486581] sm:block">{region}. Uma comunidade conectada ao que você quer construir.</p><ArrowUpRight size={20} className="text-[#102A43] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

export default Units;