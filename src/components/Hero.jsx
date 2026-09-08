import { ArrowDownRight, ArrowRight, HeartPulse, Scale, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#102A43] pt-[76px] text-white">
      <div className="absolute inset-y-0 right-0 hidden w-[43%] bg-[#B8D334] lg:block" />
      <div className="relative mx-auto grid w-full max-w-7xl min-w-0 items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:min-h-[calc(100vh-76px)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="min-w-0 max-w-3xl"
        >
          <p className="mb-8 text-sm font-semibold tracking-wide text-[#D9E2EC]">Uma universidade para construir caminhos possíveis</p>
          <h1 className="max-w-3xl font-[Newsreader] text-5xl font-medium leading-[0.98] tracking-[-1.5px] text-[#F4F0E8] sm:text-7xl lg:text-[88px]">
            O seu próximo capítulo começa <em className="text-[#B8D334]">aqui.</em>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-[#D9E2EC] sm:text-lg">
            Conhecimento aplicado, professores próximos e uma comunidade que acompanha suas escolhas da sala de aula ao mundo.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#inscricao"
              className="group inline-flex items-center justify-center gap-2 bg-[#B8D334] px-6 py-4 text-sm font-extrabold text-[#102A43] hover:bg-[#D5E65B]"
            >
              Quero conhecer a Unex <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#cursos"
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-4 text-sm font-bold text-white hover:border-[#B8D334] hover:text-[#B8D334]"
            >
              Explorar cursos <ArrowDownRight size={17} />
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-6 text-sm text-[#D9E2EC]">
            <span><strong className="mr-2 text-2xl text-[#B8D334]">4</strong>campi na Bahia</span>
            <span><strong className="mr-2 text-2xl text-[#B8D334]">+20</strong>cursos</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto w-full min-w-0 max-w-[560px] lg:max-w-none"
        >
          <div className="relative border-l border-[#102A43]/20 py-4 pl-8 text-[#102A43] sm:pl-12 lg:py-10">
            <p className="text-sm font-extrabold tracking-wide">Três campos. Uma formação com horizonte.</p>
            <div className="mt-10 grid gap-7">
              {[[HeartPulse, "Saúde", "Cuidar exige ciência e presença."], [Scale, "Direito", "Argumentar também é transformar."], [Smartphone, "Tecnologia", "Criar soluções para o que vem." ]].map(([Icon, title, text], index) => (
                <div key={title} className="flex items-start gap-5 border-b border-[#102A43]/20 pb-6 last:border-0">
                  <span className="font-[Newsreader] text-3xl text-[#102A43]/55">0{index + 1}</span>
                  <div><Icon size={22} strokeWidth={1.8} /><h2 className="mt-2 font-[Newsreader] text-3xl font-medium">{title}</h2><p className="mt-1 max-w-xs text-sm leading-6 text-[#102A43]/75">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;