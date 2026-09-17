import { ArrowUpRight } from "lucide-react";

const courses = [
  { name: "Medicina", area: "Saúde", description: "Ciência, cuidado e decisão para transformar vidas." },
  { name: "Direito", area: "Humanidades", description: "Pensamento crítico para construir justiça e cidadania." },
  { name: "Odontologia", area: "Saúde", description: "Precisão técnica aliada a uma visão integral do paciente." },
  { name: "Enfermagem", area: "Saúde", description: "Conhecimento e acolhimento no centro do cuidado." },
  { name: "Administração", area: "Gestão", description: "Estratégia e liderança para mover organizações." },
  { name: "Sistemas de Informação", area: "Tecnologia", description: "Tecnologia aplicada a problemas que importam." },
];

function Courses() {
  return (
    <section id="cursos" className="w-full bg-[#F4F0E8] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div><h2 className="max-w-sm font-[Newsreader] text-5xl font-medium leading-none tracking-tight text-[#102A43] sm:text-6xl">Conhecimento que encontra o mundo.</h2><p className="mt-6 max-w-xs text-sm leading-6 text-[#486581]">Escolha uma formação e construa uma trajetória com repertório, prática e presença.</p></div>
          <div className="border-t border-[#102A43]/25">
            {courses.map(({ name, area, description }, index) => (
              <a href="#inscricao" key={name} className="group grid min-w-0 grid-cols-[42px_1fr_auto] items-center gap-3 border-b border-[#102A43]/20 py-5 sm:grid-cols-[52px_0.75fr_1fr_auto] sm:gap-5">
                <span className="font-[Newsreader] text-2xl text-[#486581]">0{index + 1}</span><div><p className="text-xs font-bold text-[#7A8C3A]">{area}</p><h3 className="mt-1 font-[Newsreader] text-2xl font-medium text-[#102A43] sm:text-3xl">{name}</h3></div><p className="hidden max-w-xs text-sm leading-6 text-[#486581] sm:block">{description}</p><ArrowUpRight size={20} className="text-[#102A43] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;