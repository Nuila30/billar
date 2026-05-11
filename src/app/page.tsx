export default function Home() {
  const whatsapp =
    "https://wa.me/50300000000?text=Hola,%20quiero%20hacer%20una%20reservaci%C3%B3n%20en%20Billar%20El%20Doblete";

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative min-h-[calc(100vh-96px)] bg-[url('/img/F_1.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/5 to-black/5" />
          <div className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl text-white">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-[#c8d9a1]">
                Billar  · Experiencia
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Billar El Doblete
                <span className="mt-3 block text-[#9ab46a]">
                  en San Salvador
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/85 md:text-xl">
                Donde el juego se vive con estilo. Disfruta mesas de billar,
                ambiente comodo, música, reservas y una experiencia ideal para
                compartir con amigos.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/servicios"
                  className="rounded-full bg-[#78964c] px-8 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#637d3f]"
                >
                  Ver servicios
                </a>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/40 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white hover:text-[#263626]"
                >
                  Reservar por WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/45 p-6 shadow-2xl backdrop-blur-xl md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c8d9a1]">
                Experiencia
              </p>

              <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">
                Juega, compite y comparte.
              </h2>

              <div className="mt-7 space-y-4">
                {[
                  ["Reservas rápidas", "Atención directa por WhatsApp."],
                  ["Eventos y grupos", "Cumpleaños, convivios y torneos."],
                  [
                    "Ambiente cómodo",
                    "Madera, verde oscuro.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="font-bold text-[#c8d9a1]">{title}</p>
                    <p className="mt-1 text-sm text-white/70">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6ef] px-6 py-24 text-[#263626]">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#78964c]">
              Sobre nosotros
            </p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Un espacio creado para disfrutar el billar con estilo.
            </h2>
          </div>

          <div className="text-lg leading-8 text-[#4f5d4f]">
            <p>
              Billar El Doblete es un lugar pensado para quienes buscan más que
              una mesa de juego. Combinamos ambiente cómodo, atención cercana y
              una experiencia social ideal para reuniones, torneos y noches con
              amigos.
            </p>
            <p className="mt-5">
              Nuestro objetivo es ofrecer un espacio ordenado, agradable, donde cada visita se sienta especial.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1c3323] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c8d9a1]">
            Lo que encontrarás
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-5xl">
            Todo listo para jugar, reservar y pasarla bien.
          </h2>




          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
  {[
    {
      icon: "/Icon/mesa-de-billar.png",
      title: "Mesas de billar",
      text: "Espacios cómodos para juego casual o competitivo.",
    },
    {
      icon: "/Icon/de-billar.png",
      title: "Torneos",
      text: "Organización de competencias y eventos especiales.",
    },
    {
      icon: "/Icon/companero-de-equipo.png",
      title: "Grupos",
      text: "Ideal para convivios, cumpleaños y reuniones.",
    },
    {
      icon: "/Icon/whatsapp.png",
      title: "WhatsApp",
      text: "Reservas rápidas y atención directa.",
    },
  ].map((item) => (
    <div
      key={item.title}
      className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-xl"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
        <img
          src={item.icon}
          alt={item.title}
          className="h-12 w-12 object-contain"
        />
      </div>

      <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>

      <p className="mt-3 leading-7 text-white/70">
        {item.text}
      </p>
    </div>
  ))}
</div>
        </div>



      </section>

      <section className="bg-[#f7f6ef] px-6 py-24 text-[#263626]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="/img/F_1.png"
              alt="Ambiente de Billar El Doblete"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#78964c]">
              Reservas
            </p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Reserva tu mesa en pocos segundos.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#4f5d4f]">
              Escríbenos por WhatsApp para consultar disponibilidad, reservar
              una mesa o pedir información sobre eventos privados.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-[#78964c] px-8 py-4 font-bold text-white transition hover:bg-[#637d3f]"
            >
              Reservar ahora
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#121a14] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c8d9a1]">
            Visítanos
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black md:text-5xl">
            El punto de encuentro perfecto para jugar y compartir.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white/5 p-8">
              <h3 className="text-xl font-bold text-[#c8d9a1]">Ubicación</h3>
              <p className="mt-3 text-white/70">San Salvador, El Salvador</p>
            </div>

            <div className="rounded-3xl bg-white/5 p-8">
              <h3 className="text-xl font-bold text-[#c8d9a1]">Horario</h3>
              <p className="mt-3 text-white/70">
                Lunes a domingo · 2:00 PM a 12:00 AM
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 p-8">
              <h3 className="text-xl font-bold text-[#c8d9a1]">Contacto</h3>
              <p className="mt-3 text-white/70">WhatsApp directo</p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="/ubicacion"
              className="rounded-full border border-white/25 px-8 py-4 font-bold transition hover:bg-white hover:text-[#263626]"
            >
              Ver ubicación
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
