import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Cursos", href: "#cursos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Unidades", href: "#unidades" },
    { name: "Notícias", href: "#noticias" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#102A43] text-white">
      <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#"
          className="text-[27px] font-extrabold tracking-[-1.5px] text-white"
        >
          unex<span className="text-[#B8D334]">.</span>
        </a>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[14px] font-semibold text-[#D9E2EC] transition-colors hover:text-[#B8D334]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="#inscricao"
          className="hidden border border-[#B8D334] bg-[#B8D334] px-5 py-2.5 text-sm font-extrabold text-[#102A43] transition hover:bg-[#D5E65B] md:block"
        >
          Inscreva-se
        </a>

        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#102A43] transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-7xl flex-col px-5 py-5 sm:px-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 py-4 text-base font-semibold text-[#D9E2EC] hover:text-[#B8D334]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#inscricao"
            onClick={() => setMenuOpen(false)}
            className="mt-5 bg-[#B8D334] px-6 py-3.5 text-center text-sm font-extrabold text-[#102A43] hover:bg-[#D5E65B]"
          >
            Inscreva-se
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;