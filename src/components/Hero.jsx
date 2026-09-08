import { ArrowRight, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-20">

      {/* Elementos decorativos */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-50 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-50/60 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl min-w-0 items-center gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:min-h-[calc(100vh-72px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-16">

        {/* =========================================
            LADO ESQUERDO
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="min-w-0 max-w-2xl"
        >

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <GraduationCap size={17} />
            Seu próximo passo começa aqui
          </div>

          {/* Título */}
          <h1 className="text-4xl font-black leading-[1.08] tracking-[-1.5px] text-gray-950 sm:text-5xl lg:text-[58px]">
            Seu futuro começa com uma{" "}
            <span className="text-blue-700">escolha.</span>
          </h1>

          {/* Descrição */}
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Encontre o curso que combina com seus objetivos e dê o primeiro
            passo para construir a carreira que você deseja.
          </p>

          {/* Botões */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#inscricao"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
            >
              Quero estudar na Unex

              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#cursos"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-bold text-gray-700 transition-all hover:border-blue-700 hover:text-blue-700"
            >
              Conhecer cursos
            </a>

          </div>

          {/* Estatísticas */}
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-gray-200 pt-7">

            <div>
              <strong className="block text-2xl font-black text-gray-950">
                4
              </strong>

              <span className="text-sm text-gray-500">
                unidades
              </span>
            </div>

            <div>
              <strong className="block text-2xl font-black text-gray-950">
                +20
              </strong>

              <span className="text-sm text-gray-500">
                opções de cursos
              </span>
            </div>

            <div>
              <strong className="block text-2xl font-black text-gray-950">
                BA
              </strong>

              <span className="text-sm text-gray-500">
                presença regional
              </span>
            </div>

          </div>
        </motion.div>


        {/* =========================================
            LADO DIREITO
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full min-w-0 max-w-[500px] lg:max-w-none"
        >

          {/* Card principal */}
          <div className="relative overflow-hidden rounded-[2rem] bg-blue-700 p-2.5 shadow-2xl shadow-blue-900/15">

            {/* Área interna */}
            <div className="relative flex aspect-[4/4.2] items-center justify-center overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-blue-600 to-blue-800">

              {/* Formas decorativas */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/5" />

              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border-[40px] border-white/5" />

              {/* Conteúdo */}
              <div className="relative z-10 px-8 text-center text-white">

                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <GraduationCap size={42} strokeWidth={1.5} />
                </div>

                <p className="mb-2 text-sm font-medium uppercase tracking-[3px] text-blue-200">
                  Educação
                </p>

                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Comece sua jornada.
                </h2>

                <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-blue-100 sm:text-base">
                  Transforme seus planos em possibilidades e prepare-se para
                  o mercado.
                </p>

              </div>
            </div>

            {/* Card flutuante */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute bottom-5 left-5 rounded-2xl bg-white px-4 py-3 shadow-xl sm:bottom-7 sm:left-7 sm:px-5 sm:py-4"
            >
              <p className="text-xs font-medium text-gray-500">
                Seu futuro
              </p>

              <p className="mt-0.5 text-base font-black text-gray-950">
                começa agora.
              </p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;