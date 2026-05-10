export default function Servicios() {
  const servicios = [
    {
      titulo: "Mesa por hora",
      precio: "Desde $5",
      imagen: "/img/F_2.png",
      descripcion:
        "Disfruta partidas casuales o competitivas en un ambiente elegante, cómodo y con buena atención.",
      detalles: ["Mesas cuidadas", "Ambiente cómodo", "Ideal para amigos"],
    },
    {
      titulo: "Eventos privados",
      precio: "Desde $25",
      imagen: "/img/E_1.png",
      descripcion:
        "Reserva espacios para cumpleaños, convivios, reuniones especiales o celebraciones privadas.",
      detalles: ["Grupos pequeños", "Atención personalizada", "Reservas por WhatsApp"],
    },
    {
      titulo: "Torneos",
      precio: "Desde $50",
      imagen: "/img/EP_1.png",
      descripcion:
        "Organiza competencias, noches temáticas y torneos para jugadores casuales o avanzados.",
      detalles: ["Competencias", "Premios", "Ambiente competitivo"],
    },
  ];

  return (
    <section className="min-h-screen bg-[#f7f6ef] text-[#263626]">
      <div className="relative bg-[#1c3323] px-6 py-24 text-white">
        <div className="absolute inset-0 bg-[url('/img/wood.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c8d9a1]">
            Servicios
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Experiencias pensadas para jugar, compartir y celebrar.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            En Billar El Doblete ofrecemos un espacio premium para disfrutar el
            billar con amigos, organizar eventos y vivir noches diferentes.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {servicios.map((servicio) => (
            <div
              key={servicio.titulo}
              className="overflow-hidden rounded-[2rem] bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
                className="relative h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${servicio.imagen})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <p className="absolute bottom-5 left-5 rounded-full bg-[#78964c] px-4 py-2 text-sm font-bold text-white">
                  {servicio.precio}
                </p>
              </div>

              <div className="p-7">
                <h2 className="text-2xl font-black">{servicio.titulo}</h2>
                <p className="mt-4 leading-7 text-[#657065]">
                  {servicio.descripcion}
                </p>

                <div className="mt-6 space-y-3">
                  {servicio.detalles.map((detalle) => (
                    <p key={detalle} className="flex items-center gap-3 text-sm">
                      <span className="h-2 w-2 rounded-full bg-[#78964c]" />
                      {detalle}
                    </p>
                  ))}
                </div>

                <a
                  href="/contacto"
                  className="mt-7 inline-block rounded-full bg-[#1c3323] px-6 py-3 font-bold text-white transition hover:bg-[#78964c]"
                >
                  Solicitar información
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-8 rounded-[2rem] bg-[#1c3323] p-8 text-white shadow-2xl lg:grid-cols-2 lg:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c8d9a1]">
              Reservas
            </p>
            <h2 className="mt-4 text-4xl font-black">
              ¿Quieres reservar una mesa o evento?
            </h2>
            <p className="mt-5 leading-8 text-white/75">
              Escríbenos por WhatsApp para consultar disponibilidad, horarios,
              precios especiales o reservar para grupos.
            </p>
          </div>

          <div className="flex items-center lg:justify-end">
            <a
              href="https://wa.me/50300000000?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Billar%20El%20Doblete"
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
  );
}