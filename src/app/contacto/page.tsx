export default function Contacto() {
  const whatsapp =
    "https://wa.me/50300000000?text=Hola,%20quiero%20informaci%C3%B3n%20o%20hacer%20una%20reservaci%C3%B3n%20en%20Billar%20El%20Doblete";

  return (
    <main className="min-h-screen bg-[#f7f6ef] text-[#263626]">
      <section className="relative bg-[#1c3323] px-6 py-24 text-white">
        <div className="absolute inset-0 bg-[url('/img/wood.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c8d9a1]">
              Contacto
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
              Reserva, consulta o escríbenos directamente.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Estamos listos para ayudarte con reservas de mesa, eventos
              privados, torneos, horarios y cualquier información sobre Billar
              El Doblete.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#78964c] px-8 py-4 font-bold text-white transition hover:bg-[#637d3f]"
              >
                Escribir por WhatsApp
              </a>

              <a
                href="https://web.facebook.com/profile.php?id=100061913925400"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#263626]"
              >
                Ver Facebook
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-md">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c8d9a1]">
              Atención directa
            </p>

            <h2 className="mt-4 text-3xl font-black">
              ¿Qué puedes consultar?
            </h2>

            <div className="mt-7 space-y-4">
              {[
                ["Reservar mesa", "Consulta disponibilidad y horarios."],
                ["Eventos privados", "Cumpleaños, convivios y grupos."],
                ["Torneos", "Información sobre competencias y actividades."],
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
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#78964c]">
              Teléfono
            </p>
            <h2 className="mt-4 text-2xl font-black">+503 0000 0000</h2>
            <p className="mt-4 leading-7 text-[#657065]">
              Escríbenos para reservas, consultas o información general.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#78964c]">
              Horario
            </p>
            <h2 className="mt-4 text-2xl font-black">
              Lunes a Domingo
            </h2>
            <p className="mt-4 leading-7 text-[#657065]">
              2:00 p.m. - 12:00 a.m. Consulta horarios especiales por WhatsApp.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#78964c]">
              Redes sociales
            </p>
            <h2 className="mt-4 text-2xl font-black">Síguenos</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://web.facebook.com/profile.php?id=100061913925400"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#1c3323] px-5 py-3 text-sm font-bold text-white hover:bg-[#78964c]"
              >
                Facebook
              </a>
              <a
                href="#"
                className="rounded-full bg-[#1c3323] px-5 py-3 text-sm font-bold text-white hover:bg-[#78964c]"
              >
                Instagram
              </a>
              <a
                href="#"
                className="rounded-full bg-[#1c3323] px-5 py-3 text-sm font-bold text-white hover:bg-[#78964c]"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 rounded-[2rem] bg-[#1c3323] p-8 text-white shadow-2xl lg:grid-cols-2 lg:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c8d9a1]">
              WhatsApp
            </p>
            <h2 className="mt-4 text-4xl font-black">
              Atención rápida para tus reservas.
            </h2>
            <p className="mt-5 leading-8 text-white/75">
              Usa el botón para abrir WhatsApp con un mensaje listo. Solo cambia
              el número por el número real del negocio.
            </p>
          </div>

          <div className="flex items-center lg:justify-end">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#78964c] px-8 py-4 font-bold text-white transition hover:bg-[#637d3f]"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}