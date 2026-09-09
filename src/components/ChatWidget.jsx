import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

// Aponte para o backend Node/Express (pasta /backend).
const API_URL = import.meta.env.VITE_CHAT_API_URL || 'http://localhost:3001/api/chat';

const WELCOME_MESSAGE = {
  role: 'model',
  text: 'Oi! Eu sou o assistente da Unex. Posso te ajudar com dúvidas sobre cursos, unidades e o vestibular. O que você quer saber?',
};

const QUICK_REPLIES = ['Quais cursos vocês têm?', 'Onde ficam as unidades?', 'Como funciona o vestibular?'];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isLoading]);

  async function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const nextMessages = [...messages, { role: 'user', text: trimmed }];
    setMessages(nextMessages);
    setInput('');
    setError(null);
    setIsLoading(true);

    try {
      const history = nextMessages
        .slice(0, -1)
        .filter((m) => m !== WELCOME_MESSAGE)
        .map((m) => ({ role: m.role, text: m.text }));

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, history }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erro ao conversar com o assistente.');

      setMessages((prev) => [...prev, { role: 'model', text: data.reply }]);
    } catch (err) {
      setError('Não consegui responder agora. Verifique se o backend está rodando e tente de novo.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            role="dialog"
            aria-label="Assistente virtual da Unex"
            className="absolute bottom-[76px] right-0 flex h-[500px] w-[360px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl bg-[#0f2440] shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-white/10 px-5 pb-4 pt-5">
              <div>
                <p className="mb-0.5 text-xs font-bold tracking-wide text-[#c7e300]">Unex</p>
                <h2 className="font-serif text-lg font-medium text-[#f5f3ec]">Assistente do candidato</h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar chat"
                className="text-[#f5f3ec] hover:text-[#c7e300]"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-2.5 overflow-y-auto bg-[#12294a] px-5 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === 'model'
                      ? 'rounded-bl-sm bg-[#1b3559] text-[#f5f3ec]'
                      : 'ml-auto rounded-br-sm bg-[#c7e300] font-medium text-[#0f2440]'
                  }`}
                >
                  {m.text}
                </div>
              ))}

              {isLoading && (
                <div className="flex w-fit gap-1 rounded-2xl rounded-bl-sm bg-[#1b3559] px-4 py-3.5">
                  {[0, 0.2, 0.4].map((delay) => (
                    <span
                      key={delay}
                      className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#8fa3bf]"
                      style={{ animationDelay: `${delay}s` }}
                    />
                  ))}
                </div>
              )}

              {error && <div className="px-0.5 text-xs text-[#ffb4a2]">{error}</div>}
            </div>

            {/* Quick replies */}
            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-2 bg-[#12294a] px-5 pb-3">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => sendMessage(q)}
                    className="rounded-full border border-[#c7e300]/50 px-3 py-1.5 text-xs text-[#c7e300] hover:bg-[#c7e300]/10"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex gap-2 border-t border-white/10 bg-[#0f2440] p-3.5">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escreva sua dúvida..."
                aria-label="Escreva sua dúvida"
                className="flex-1 rounded-full bg-[#1b3559] px-4 py-2.5 text-sm text-[#f5f3ec] placeholder:text-[#8fa3bf] focus:outline-none focus:ring-2 focus:ring-[#c7e300]/50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                aria-label="Enviar"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#c7e300] text-[#0f2440] disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        whileHover={{ y: -2 }}
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'Fechar assistente' : 'Abrir assistente'}
        className="flex items-center gap-2 rounded-full bg-[#c7e300] px-5 py-3.5 font-bold text-[#0f2440] shadow-lg"
      >
        {isOpen ? <X size={18} /> : <MessageCircle size={18} />}
        {!isOpen && <span className="text-sm">Fale conosco</span>}
      </motion.button>
    </div>
  );
}
