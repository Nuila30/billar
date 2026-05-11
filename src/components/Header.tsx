"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const whatsapp =
    "https://wa.me/50300000000?text=Hola,%20quiero%20hacer%20una%20reservaci%C3%B3n%20en%20Billar%20El%20Doblete";

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Galería", href: "/galeria" },
    { name: "Ubicación", href: "/ubicacion" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#1c3323]/95 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="leading-tight">
          <h1 className="text-lg font-black tracking-wide sm:text-xl">
            Billar <span className="text-[#9ab46a]">El Doblete</span>
          </h1>
          <p className="hidden text-[10px] uppercase tracking-[0.3em] text-[#c8d9a1] sm:block">
         comentarios y reservas al WhatsApp
          </p>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[#c8d9a1]">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#78964c] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#637d3f]"
          >
            Reservar
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 lg:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-white transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-6 bg-white transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#1c3323] px-4 py-5 shadow-2xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-white/5 px-5 py-4 font-bold text-white transition hover:bg-white/10 hover:text-[#c8d9a1]"
              >
                {link.name}
              </a>
            ))}

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl bg-[#78964c] px-5 py-4 text-center font-bold text-white transition hover:bg-[#637d3f]"
            >
              Reservar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}