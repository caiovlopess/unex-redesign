import { Quote } from "lucide-react";

const testimonials = [
  { quote: "A rotina de projetos me ajudou a transformar curiosidade em direção. Hoje tenho mais clareza sobre o profissional que quero ser.", name: "Marina Alves", course: "Estudante demonstrativa de Administração", initials: "MA" },
  { quote: "Encontrei professores que conhecem meu processo e me incentivam a ir além da resposta mais fácil.", name: "Rafael Santos", course: "Estudante demonstrativo de Sistemas de Informação", initials: "RS" },
  { quote: "A universidade abriu espaço para eu testar ideias e participar de experiências que fazem sentido para a minha comunidade.", name: "Luana Ribeiro", course: "Estudante demonstrativa de Enfermagem", initials: "LR" },
];

function Testimonials() {
  return (
    <section className="w-full bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl"><div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]"><div><h2 className="font-[Newsreader] text-5xl font-medium leading-none text-[#102A43] sm:text-6xl">Quem vive a jornada conta melhor.</h2><p className="mt-6 max-w-xs text-sm leading-6 text-[#486581]">Relatos acadêmicos demonstrativos sobre diferentes formas de encontrar seu lugar na universidade.</p></div><div className="border-t-2 border-[#102A43]">{testimonials.map(({ quote, name, course, initials }, index) => <article key={name} className="grid gap-5 border-b border-[#102A43]/20 py-7 sm:grid-cols-[52px_1fr_180px] sm:items-start sm:gap-7"><span className="font-[Newsreader] text-2xl text-[#B8D334]">0{index + 1}</span><div><Quote className="text-[#B8D334]" size={23} /><p className="mt-4 max-w-xl font-[Newsreader] text-2xl leading-tight text-[#102A43]">“{quote}”</p></div><div className="text-sm text-[#486581]"><strong className="block text-[#102A43]">{initials} · {name}</strong><span className="mt-1 block">{course}</span></div></article>)}</div></div>
      </div>
    </section>
  );
}

export default Testimonials;