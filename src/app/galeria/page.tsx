"use client";

import { useState } from "react";

export default function Galeria() {
  const images = [
    {
      src: "/img/F_4.png",
      title: "Ambiente agradable",
      text: "Un espacio comodo para disfrutar con amigos.",
    },
    {
      src: "/img/F_1.png",
      title: "Mesas de billar",
      text: "Área preparada para juego casual o competitivo.",
    },
    {
      src: "/img/F_2.png",
      title: "Zona social",
      text: "Ideal para convivios, cumpleaños y reuniones.",
    },
    {
      src: "/img/E_1.png",
      title: "Eventos privados",
      text: "Reservas especiales para grupos y celebraciones.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <main className="min-h-screen bg-[#f7f6ef] text-[#263626]">
      <section className="relative bg-[#1c3323] px-6 py-24 text-white">
        <div className="absolute inset-0 bg-[url('/img/wood.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c8d9a1]">
            Galería
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Ambiente de Billar El Doblete
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Conoce el ambiente, las mesas, los espacios sociales y la
            experiencia agradable que ofrece Billar El Doblete.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-[2rem] bg-black shadow-2xl">
            <img
              src={images[current].src}
              alt={images[current].title}
              className="h-[520px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8d9a1]">
                Foto {current + 1} de {images.length}
              </p>

              <h2 className="mt-3 text-4xl font-black">
                {images[current].title}
              </h2>

              <p className="mt-3 max-w-xl text-white/75">
                {images[current].text}
              </p>
            </div>

            <button
              onClick={prevImage}
              className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white backdrop-blur transition hover:bg-[#78964c]"
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white backdrop-blur transition hover:bg-[#78964c]"
            >
              ›
            </button>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#78964c]">
              Experiencia visual
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Cada rincón comunica estilo.
            </h2>

            <p className="mt-5 leading-8 text-[#657065]">
              La galería ayuda a mostrar el ambiente real del lugar: mesas,
              iluminación, eventos, zonas sociales y espacios para compartir.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`overflow-hidden rounded-2xl border-4 transition ${
                    current === index
                      ? "border-[#78964c]"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="h-28 w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[1.5rem] bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={img.src}
                alt={img.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-black">{img.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#657065]">
                  {img.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-[2rem] bg-[#1c3323] p-8 text-white shadow-2xl md:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c8d9a1]">
                Reservas
              </p>

              <h2 className="mt-4 text-4xl font-black">
                ¿Quieres vivir la experiencia?
              </h2>

              <p className="mt-5 leading-8 text-white/75">
                Reserva tu mesa por WhatsApp y disfruta de un ambiente comodo,
                cómodo y perfecto para compartir.
              </p>
            </div>

            <div className="flex items-center lg:justify-end">
              <a
                href="https://wa.me/50300000000?text=Hola,%20quiero%20hacer%20una%20reservaci%C3%B3n%20en%20Billar%20El%20Doblete"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#78964c] px-8 py-4 font-bold text-white transition hover:bg-[#637d3f]"
              >
                Reservar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}