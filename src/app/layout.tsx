import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const whatsapp =
    "https://wa.me/50300000000?text=Hola,%20quiero%20informaci%C3%B3n%20o%20hacer%20una%20reservaci%C3%B3n%20en%20Billar%20El%20Doblete";

  return (
    <html lang="es">
      <body>
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#1c3323]/95 text-white backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <a href="/" className="text-xl font-extrabold tracking-wide">
              Billar <span className="text-[#9ab46a]">El Doblete</span>
            </a>

            <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
              <a href="/">Inicio</a>
              <a href="/servicios">Servicios</a>
              <a href="/galeria">Galería</a>
              <a href="/ubicacion">Ubicación</a>
              <a href="/contacto">Contacto</a>
            </nav>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#78964c] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#637d3f]"
            >
              Reservar
            </a>
          </div>
        </header>

        <main className="pt-24">{children}</main>

        <footer className="bg-[#1c3323] px-6 py-10 text-white">
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
                <a href="/servicios">Servicios</a>
                <a href="/galeria">Galería</a>
                <a href="/ubicacion">Ubicación</a>
                <a href="/contacto">Contacto</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold">Síguenos</h4>
              <a
                href="https://web.facebook.com/profile.php?id=100061913925400"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block"
              >
                <img
                  src="/Icon/facebook.png"
                  alt="Facebook"
                  className="h-8 w-8 transition hover:scale-110"
                />
              </a>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-sm text-white/50">
            © 2026 Billar El Doblete. Todos los derechos reservados.
          </div>
        </footer>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hablar por WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-xl transition hover:scale-105 hover:bg-green-600"
        >
          <img src="/Icon/whatsapp.png" alt="WhatsApp" className="h-8 w-8" />
        </a>
      </body>
    </html>
  );
}