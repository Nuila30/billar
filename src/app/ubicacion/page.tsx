export default function Ubicacion() {
  const whatsapp =
    "https://wa.me/50300000000?text=Hola,%20quiero%20informaci%C3%B3n%20de%20ubicaci%C3%B3n%20y%20horarios%20de%20Billar%20El%20Doblete";

  return (
    <main className="min-h-screen bg-[#f7f6ef] text-[#263626]">
      <section className="relative bg-[#1c3323] px-6 py-24 text-white">
        <div className="absolute inset-0 bg-[url('/img/wood.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c8d9a1]">
            Ubicación
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Encuéntranos fácilmente
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Estamos ubicados en una zona accesible para que disfrutes del mejor
            ambiente de billar en San Salvador.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] bg-white p-8 shadow-xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#78964c]">
                Dirección
              </p>
              <h2 className="mt-4 text-2xl font-black">
                San Salvador, El Salvador
              </h2>
              <p className="mt-3 text-[#657065]">
                Fácil acceso, zona segura y cercana a puntos clave de la ciudad.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#78964c]">
                Horario
              </p>
              <h2 className="mt-4 text-2xl font-black">Lunes a Domingo</h2>
              <p className="mt-3 text-[#657065]">2:00 p.m. - 12:00 a.m.</p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#78964c]">
                Teléfono
              </p>
              <h2 className="mt-4 text-2xl font-black">+503 0000 0000</h2>
              <p className="mt-3 text-[#657065]">
                Escríbenos para reservas o consultas.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#1c3323] p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-black">
                ¿Necesitas ayuda para llegar?
              </h3>

              <p className="mt-4 text-white/75">
                Escríbenos por WhatsApp o abre la ubicación en tu app favorita.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-[#78964c] px-7 py-3 font-bold text-white transition hover:bg-[#637d3f]"
              >
                Contactar por WhatsApp
              </a>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://maps.app.goo.gl/hgV7R4JqRQboDsey5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/25 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[#263626]"
                >
                  Google Maps
                </a>

                <a
                  href="https://waze.com/ul?q=Billar%20El%20Doblete%20San%20Salvador&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/25 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[#263626]"
                >
                  Waze
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <div className="h-[420px] w-full">
              <iframe
                title="Ubicación Billar El Doblete"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d302.2053127768795!2d-89.20254934989106!3d13.700051051536486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63312ecc45bdb7%3A0x882306e157767584!2sBillar%20El%20Doblete!5e1!3m2!1ses!2ssv!4v1777000943616!5m2!1ses!2ssv"
                className="h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="border-t border-[#e7e4d8] bg-white p-6">
              <h3 className="text-xl font-black text-[#263626]">
                Billar El Doblete
              </h3>
              <p className="mt-2 text-[#657065]">
                Abre la ubicación en Google Maps o Waze para llegar fácilmente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#121a14] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c8d9a1]">
            Experiencia
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Un punto de encuentro para jugar y compartir.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            No solo es fácil llegar, es el lugar ideal para disfrutar con
            amigos, competir y vivir una experiencia premium.
          </p>
        </div>
      </section>
    </main>
  );
}