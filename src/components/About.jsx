import { ArrowRight, CheckCircle2 } from "lucide-react";

function About() {
  return (
    <section id="sobre" className="w-full overflow-hidden bg-[#102A43] px-5 py-24 text-[#F4F0E8] sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div><h2 className="max-w-3xl font-[Newsreader] text-5xl font-medium leading-none sm:text-7xl">Educação que reconhece o território e amplia futuros.</h2><p className="mt-7 max-w-xl leading-7 text-[#D9E2EC]">Somos uma universidade feita de encontros: entre conhecimento e prática, talento e oportunidade, pessoas e comunidades. Uma jornada acadêmica com proximidade, inovação e propósito.</p><a href="#inscricao" className="mt-8 inline-flex items-center gap-2 border-b border-[#B8D334] pb-2 text-sm font-extrabold text-[#B8D334] hover:text-white">Conheça nossa proposta <ArrowRight size={17} /></a></div>
          <div className="border-t border-white/20 pt-6"><p className="text-sm leading-6 text-[#D9E2EC]">Unex em números</p><div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-8">{[['+20', 'cursos de graduação'], ['4', 'campi no interior'], ['1', 'comunidade conectada'], ['100%', 'foco no estudante']].map(([number, label]) => <div key={label}><strong className="font-[Newsreader] text-5xl font-medium text-[#B8D334]">{number}</strong><span className="mt-2 block max-w-28 text-sm leading-5 text-[#D9E2EC]">{label}</span></div>)}</div><div className="mt-10 flex items-center gap-3 border-t border-white/20 pt-5 text-sm text-[#D9E2EC]"><CheckCircle2 size={19} className="shrink-0 text-[#B8D334]" /> Um ambiente para aprender fazendo.</div></div>
        </div>
      </div>
    </section>
  );
}

export default About;