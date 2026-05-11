import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

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
        <ScrollToTop />
        <Header />

        <main className="min-h-screen pb-40 pt-20">
  {children}
</main>

        <Footer />

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hablar por WhatsApp"
          className="fixed bottom-24 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-xl transition hover:scale-105 hover:bg-green-600 sm:bottom-28"
        >
          <img src="/Icon/whatsapp.png" alt="WhatsApp" className="h-8 w-8" />
        </a>
      </body>
    </html>
  );
}