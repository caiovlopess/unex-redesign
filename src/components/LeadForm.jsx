import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";

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
    <section id="inscricao" className="w-full bg-[#F4F0E8] px-5 py-24 sm:px-6 lg:px-8"><div className="mx-auto grid w-full max-w-7xl min-w-0 border-t-4 border-[#B8D334] bg-[#102A43] lg:grid-cols-[0.9fr_1.1fr]"><div className="min-w-0 p-8 text-[#F4F0E8] sm:p-12 lg:p-16"><p className="text-sm font-semibold text-[#B8D334]">Vamos conversar</p><h2 className="mt-5 max-w-md font-[Newsreader] text-5xl font-medium leading-none sm:text-6xl">Pronto para dar o próximo passo?</h2><p className="mt-6 max-w-sm leading-7 text-[#D9E2EC]">Conte um pouco sobre o que você procura. Nossa equipe compartilha os próximos caminhos com você.</p></div><div className="min-w-0 bg-white p-8 sm:p-12 lg:p-16"><form onSubmit={handleSubmit} noValidate className="grid min-w-0 gap-6 sm:grid-cols-2"><label className="min-w-0 text-sm font-bold text-[#102A43]">Nome<input name="name" type="text" placeholder="Como podemos chamar você?" className="mt-2 block w-full min-w-0 border-0 border-b border-[#102A43]/30 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#486581]/70 focus:border-[#7A8C3A]" /></label><label className="min-w-0 text-sm font-bold text-[#102A43]">E-mail<input name="email" type="email" placeholder="voce@email.com" className="mt-2 block w-full min-w-0 border-0 border-b border-[#102A43]/30 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#486581]/70 focus:border-[#7A8C3A]" /></label><label className="min-w-0 text-sm font-bold text-[#102A43]">WhatsApp<input name="whatsapp" type="tel" placeholder="(00) 00000-0000" className="mt-2 block w-full min-w-0 border-0 border-b border-[#102A43]/30 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#486581]/70 focus:border-[#7A8C3A]" /></label><label className="min-w-0 text-sm font-bold text-[#102A43]">Curso de interesse<select name="course" defaultValue="" className="mt-2 block w-full min-w-0 border-0 border-b border-[#102A43]/30 bg-white px-0 py-3 text-sm outline-none focus:border-[#7A8C3A]"><option value="" disabled>Selecione uma opção</option><option>Medicina</option><option>Direito</option><option>Odontologia</option><option>Enfermagem</option><option>Administração</option><option>Sistemas de Informação</option></select></label><div className="min-w-0 sm:col-span-2"><button type="submit" className="inline-flex items-center justify-center gap-2 bg-[#102A43] px-6 py-4 text-sm font-extrabold text-white hover:bg-[#1E405F]">Quero saber mais <Send size={16} /></button>{error && <p className="mt-4 text-sm font-semibold text-red-700">{error}</p>}{submitted && <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#527000]"><CheckCircle2 size={17} /> Recebemos seus dados. Em breve, falaremos com você.</p>}</div></form></div></div></section>
  );
}

export default LeadForm;