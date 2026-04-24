export default function Home() {
  const whatsapp =
    "https://wa.me/50300000000?text=Hola,%20quiero%20informaci%C3%B3n%20o%20hacer%20una%20reservaci%C3%B3n%20en%20Billar%20El%20Doblete";

  return (
    <main className="min-h-screen bg-[#f7f6ef] text-[#263626]">
      {/* HERO */}
      <section className="relative min-h-[620px] overflow-hidden bg-[url('/img/F_1.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/55" />

        <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-white">
          <div>
            <h1 className="text-xl font-extrabold leading-tight tracking-wide">
              Billar
              <br />
              <span className="text-[#9ab46a]">El Doblete</span>
            </h1>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#galeria">Galería</a>
            <a href="#ubicacion">Ubicación</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#78964c] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#637d3f]"
          >
            Reservar ahora
          </a>
        </header>

        <div
          id="inicio"
          className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-6"
        >
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-extrabold leading-tight md:text-7xl">
              Billar en <br />
              <span className="text-[#9ab46a]">San Salvador</span>
            </h2>

            <p className="mt-5 text-xl font-medium leading-8">
              Donde el juego se vive con estilo. <br />
              Disfruta con amigos, precisión y buen ambiente.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#servicios"
                className="rounded-full bg-[#78964c] px-7 py-4 font-bold text-white shadow-md transition hover:bg-[#637d3f]"
              >
                Ver servicios
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#263626]"
              >
                WhatsApp directo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="bg-[#f7f6ef] py-14">
        <h2 className="text-center text-3xl font-bold">Una experiencia única</h2>

        <div className="mx-auto mt-10 grid max-w-7xl gap-8 px-6 md:grid-cols-4">
          {[
            ["🎱", "Mesas cómodas", "Superficie cuidada para una mejor experiencia."],
            ["🍹", "Buen ambiente", "Ideal para compartir con amigos."],
            ["🏆", "Torneos", "Espacio perfecto para competencias."],
            ["📱", "Reserva fácil", "Agenda rápido por WhatsApp."],
          ].map((item) => (
            <div key={item[1]} className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#6f8545] text-3xl text-white">
                {item[0]}
              </div>
              <div>
                <h3 className="font-bold">{item[1]}</h3>
                <p className="text-sm text-[#586658]">{item[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="bg-white py-16">
        <h2 className="text-center text-3xl font-bold">Nuestros servicios</h2>

        <div className="mx-auto mt-10 grid max-w-6xl gap-8 px-6 md:grid-cols-3">
          {[
            ["Mesa por hora", "Desde $5", "/img/F_2.png"],
            ["Eventos privados", "Desde $25", "/img/E_1.png"],
            ["Torneos", "Desde $50", "/img/EP_1.png"],
          ].map((item) => (
            <div
              key={item[0]}
              className="overflow-hidden rounded-xl bg-white shadow-lg"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${item[2]})` }}
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">{item[0]}</h3>

                <p className="mt-3 text-sm text-[#657065]">
                  Disfruta una experiencia diferente en un ambiente cómodo,
                  social y elegante.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <p className="font-bold text-[#6f8545]">{item[1]}</p>

                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#6f8545] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#587038]"
                  >
                    Reservar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BANNER */}
      <section className="relative bg-[url('/img/F_3.png')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-[#1d321f]/80" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 text-white md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl font-extrabold">¿Listo para jugar?</h2>
            <p className="mt-2 text-lg">
              Reserva tu mesa de forma rápida y directa.
            </p>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white px-8 py-4 font-bold transition hover:bg-white hover:text-[#263626]"
          >
            Reservar por WhatsApp
          </a>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="bg-[#f7f6ef] py-16">
        <h2 className="text-center text-3xl font-bold">Galería</h2>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-4 px-6 md:grid-cols-5">
          {["/img/F_4.png", "/img/F_4.png", "/img/F_4.png", "/img/F_4.png", "/img/F_4.png"].map(
            (img) => (
              <div
                key={img}
                className="h-40 rounded-xl bg-cover bg-center shadow-md"
                style={{ backgroundImage: `url(${img})` }}
              />
            )
          )}
        </div>
      </section>

      {/* UBICACIÓN */}
      
      <section id="ubicacion" className="grid bg-white md:grid-cols-2">
        <div className="p-10 md:p-16">
          <h2 className="text-3xl font-bold">Visítanos</h2>

          <div className="mt-8 space-y-5 text-[#4d5c4d]">
            <p>📍 San Salvador, El Salvador</p>
            <p>📞 +503 0000 0000</p>
            <p>🕒 Lunes a Domingo 2:00 p.m. - 12:00 a.m.</p>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-[#6f8545] px-8 py-4 font-bold text-white transition hover:bg-[#587038]"
          >
            WhatsApp
          </a>
        </div>

        <div className="min-h-[350px] w-full">
  <iframe
    title="Ubicación Billar El Doblete"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d302.2053127768795!2d-89.20254934989106!3d13.700051051536486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63312ecc45bdb7%3A0x882306e157767584!2sBillar%20El%20Doblete!5e1!3m2!1ses!2ssv!4v1777000943616!5m2!1ses!2ssv"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="h-full min-h-[350px] w-full"
  />
</div>
      </section>

      {/* FOOTER */}
      <footer id="contacto" className="bg-[#1c3323] px-6 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold">Billar El Doblete</h3>
            <p className="mt-3 text-sm text-white/70">
              Un lugar para jugar, compartir y disfrutar.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Enlaces rápidos</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-white/70">
              <a href="#servicios">Servicios</a>
              <a href="#galeria">Galería</a>
              <a href="#ubicacion">Ubicación</a>
              <a href="#contacto">Contacto</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold">Síguenos</h4>
            <a
    href="https://web.facebook.com/profile.php?id=100061913925400"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/Icon/facebook.png"
      alt="Facebook"
      className="h-8 w-8 transition hover:scale-110"
    />
  </a>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-4">
  
</div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-sm text-white/50">
          © 2026 Billar El Doblete. Todos los derechos reservados.
        </div>
      </footer>
{/* WHATSAPP FLOTANTE */}
<a
  href={whatsapp}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Hablar por WhatsApp"
  className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-xl transition hover:scale-105 hover:bg-green-600"
>
  <img 
    src="/Icon/whatsapp.png" 
    alt="WhatsApp" 
    className="h-8 w-8"
  />
</a>
    </main>
  );
}