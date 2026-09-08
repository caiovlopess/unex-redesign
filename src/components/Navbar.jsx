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
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#"
          className="text-[26px] font-black tracking-[-1.5px] text-blue-700"
        >
          unex<span className="text-gray-900">.</span>
        </a>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[15px] font-medium text-gray-600 transition-colors hover:text-blue-700"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="#inscricao"
          className="hidden rounded-full bg-blue-700 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md md:block"
        >
          Inscreva-se
        </a>

        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-gray-800 transition-colors hover:bg-gray-100 md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-7xl flex-col px-5 py-5 sm:px-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-gray-100 py-4 text-base font-medium text-gray-700 hover:text-blue-700"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#inscricao"
            onClick={() => setMenuOpen(false)}
            className="mt-5 rounded-full bg-blue-700 px-6 py-3.5 text-center text-sm font-bold text-white hover:bg-blue-800"
          >
            Inscreva-se
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;