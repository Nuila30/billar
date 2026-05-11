export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-40 w-full border-t border-white/10 bg-[#1c3323]/95 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 sm:py-4">
        <div>
          <h3 className="text-xs font-black sm:text-base">
            Billar El Doblete
          </h3>

          <p className="hidden text-xs text-white/60 sm:block">
            © 2026 Todos los derechos reservados.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://web.facebook.com/profile.php?id=100061913925400"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/10 p-2 transition hover:bg-white hover:text-[#263626]"
          >
            <img
              src="/Icon/facebook.png"
              alt="Facebook"
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
          </a>

          <a
            href="#"
            className="rounded-full bg-white/10 px-3 py-2 text-[11px] font-bold transition hover:bg-white hover:text-[#263626]"
          >
            <img
              src="/Icon/instagram.png"
              alt="Facebook"
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
          </a>

          <a
            href="#"
            className="rounded-full bg-white/10 px-3 py-2 text-[11px] font-bold transition hover:bg-white hover:text-[#263626]"
          >
           <img
              src="/Icon/tik-tok.png"
              alt="Facebook"
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}