import { ArrowUpRight, Compass, FlaskConical, Network, Sparkles } from "lucide-react";

const benefits = [
  { title: "Estrutura que acolhe", text: "Ambientes projetados para estudar, trocar e experimentar com conforto.", icon: Sparkles },
  { title: "Formação consistente", text: "Professores próximos e uma base sólida para decisões mais conscientes.", icon: Compass },
  { title: "Experiência prática", text: "Projetos e vivências que aproximam o conhecimento dos desafios reais.", icon: FlaskConical },
  { title: "Conexão com o mercado", text: "Pontes com pessoas, empresas e ideias que ampliam seu horizonte.", icon: Network },
];

function Benefits() {
  return (
    <section className="w-full bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div><h2 className="max-w-sm font-[Newsreader] text-5xl font-medium leading-none text-[#102A43] sm:text-6xl">Uma formação que não cabe numa sala.</h2><p className="mt-6 max-w-sm text-sm leading-6 text-[#486581]">A experiência universitária acontece nas relações, nos projetos e na coragem de fazer perguntas melhores.</p></div>
          <div className="border-t-2 border-[#B8D334]">
            {benefits.map(({ title, text, icon: Icon }, index) => (
              <div key={title} className="grid gap-4 border-b border-[#102A43]/20 py-6 sm:grid-cols-[56px_0.8fr_1fr_auto] sm:items-center sm:gap-6"><span className="font-[Newsreader] text-3xl text-[#B8D334]">0{index + 1}</span><Icon size={24} strokeWidth={1.7} className="text-[#102A43]" /><div><h3 className="font-[Newsreader] text-2xl font-medium text-[#102A43]">{title}</h3><p className="mt-1 text-sm leading-6 text-[#486581]">{text}</p></div><ArrowUpRight size={19} className="hidden text-[#102A43] sm:block" /></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;