import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const fields = ["name", "email", "whatsapp", "course"];
    if (fields.some((field) => !String(form.get(field)).trim())) {
      setError("Preencha todos os campos para continuar.");
      return;
    }
    setError("");
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section id="inscricao" className="w-full bg-white px-5 py-24 sm:px-6 lg:px-8"><div className="mx-auto grid w-full max-w-7xl min-w-0 overflow-hidden rounded-[2rem] bg-blue-700 shadow-2xl shadow-blue-900/15 lg:grid-cols-[0.85fr_1.15fr]"><div className="relative min-w-0 overflow-hidden p-8 text-white sm:p-12"><div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full border-[35px] border-white/10" /><div className="relative"><p className="text-sm font-bold uppercase tracking-[3px] text-blue-200">Vamos conversar</p><h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Pronto para dar o próximo passo?</h2><p className="mt-5 max-w-sm leading-7 text-blue-100">Conte um pouco sobre o que você procura. Nossa equipe compartilha os próximos caminhos com você.</p></div></div><div className="min-w-0 bg-white p-8 sm:p-12"><form onSubmit={handleSubmit} noValidate className="grid min-w-0 gap-5 sm:grid-cols-2"><label className="min-w-0 text-sm font-semibold text-gray-700">Nome<input name="name" type="text" placeholder="Como podemos chamar você?" className="mt-2 block w-full min-w-0 rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-700/10" /></label><label className="min-w-0 text-sm font-semibold text-gray-700">E-mail<input name="email" type="email" placeholder="voce@email.com" className="mt-2 block w-full min-w-0 rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-700/10" /></label><label className="min-w-0 text-sm font-semibold text-gray-700">WhatsApp<input name="whatsapp" type="tel" placeholder="(00) 00000-0000" className="mt-2 block w-full min-w-0 rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-700/10" /></label><label className="min-w-0 text-sm font-semibold text-gray-700">Curso de interesse<select name="course" defaultValue="" className="mt-2 block w-full min-w-0 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-700/10"><option value="" disabled>Selecione uma opção</option><option>Medicina</option><option>Direito</option><option>Odontologia</option><option>Enfermagem</option><option>Administração</option><option>Sistemas de Informação</option></select></label><div className="min-w-0 sm:col-span-2"><button type="submit" className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 sm:w-auto">Quero saber mais <Send size={16} /></button>{error && <p className="mt-3 text-sm font-medium text-red-600">{error}</p>}{submitted && <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="mt-3 flex items-center gap-2 text-sm font-medium text-emerald-700"><CheckCircle2 size={17} /> Recebemos seus dados. Em breve, falaremos com você.</motion.p>}</div></form></div></div></section>
  );
}

export default LeadForm;