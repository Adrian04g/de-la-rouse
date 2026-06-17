import { Hero } from "./components/Hero";
import { FlowerCard } from "./components/FlowerCard";
import { AboutView } from "./components/AboutView";
import { CatalogView } from "./components/CatalogView";
import { useFlowers } from "./data/useFlowers";
import {
  Flower2,
  Mail,
  MessageCircle,
  Instagram,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

type View = "home" | "nosotros" | "catalogo";

function getViewFromLocation(): View {
  const vista = new URLSearchParams(window.location.search).get("vista");
  if (vista === "nosotros" || vista === "catalogo") {
    return vista;
  }

  return "home";
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [view, setView] = useState<View>(() => getViewFromLocation());
  const { flowers, loading, error } = useFlowers();

  useEffect(() => {
    const handlePopState = () => {
      setView(getViewFromLocation());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (nextView: View) => {
    const nextUrl = nextView === "home" ? "/" : `/?vista=${nextView}`;
    window.history.pushState({}, "", nextUrl);
    setView(nextView);
    setMobileMenuOpen(false);
  };

  if (view === "nosotros") {
    return <AboutView onGoHome={() => navigateTo("home")} />;
  }

  if (view === "catalogo") {
    return <CatalogView onGoHome={() => navigateTo("home")} />;
  }

  const navLinks = [
    { href: "#contacto", label: "Contacto" },
  ];

  const whatsappUrl = "https://wa.me/573224470254?text=Hola!%20Me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20sus%20productos.";

  return (
    <div className="min-h-screen bg-rosasuave">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b bg-rosasuave/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Flower2 className="h-6 w-6 text-rosaoscuro" />
            <span className="font-cursive text-2xl text-rosaoscuro">De la rose</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-neutral-600 transition-colors hover:text-rosaoscuro"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => navigateTo("catalogo")}
              className="text-neutral-600 transition-colors hover:text-rosaoscuro"
            >
              Catálogo
            </button>
            <button
              type="button"
              onClick={() => navigateTo("nosotros")}
              className="text-neutral-600 transition-colors hover:text-rosaoscuro"
            >
              Nosotros
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm text-white transition-colors hover:bg-rose-500 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Hacer pedido
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="rounded-md p-2 text-neutral-600 hover:bg-rosasuave md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t bg-rosasuave px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-neutral-700 transition-colors hover:text-rosaoscuro"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => navigateTo("catalogo")}
                className="text-left text-neutral-700 transition-colors hover:text-rosaoscuro"
              >
                Catálogo
              </button>
              <button
                type="button"
                onClick={() => navigateTo("nosotros")}
                className="text-left text-neutral-700 transition-colors hover:text-rosaoscuro"
              >
                Nosotros
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageCircle className="h-4 w-4" />
                Hacer pedido
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Stats bar */}
      <div className="border-y bg-rosasuave py-6">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-semibold text-rosaoscuro">+50</p>
              <p className="text-sm text-neutral-500">Clientes felices</p>
            </div>
            
            <div>
              <p className="text-2xl font-semibold text-rosaoscuro">100%</p>
              <p className="text-sm text-neutral-500">Hecho a mano</p>
            </div>
          </div>
        </div>
      </div>

      {/* Catalog Section */}
      <section id="catalogo" className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm text-rosaoscuro uppercase tracking-widest">
              Nuestros productos
            </p>
            <h2 className="mb-3 text-rosaoscuro">Catálogo de Flores</h2>
            <p className="text-neutral-600">
              Cada pieza es única y elaborada con materiales de la más alta calidad.
              Haz clic en "Consultar" para preguntar disponibilidad o pedir la tuya.
            </p>
          </div>

          {loading ? (
            <p className="rounded-xl border border-rosaoscuro/20 bg-white/70 px-4 py-6 text-center text-neutral-600">
              Cargando catálogo...
            </p>
          ) : error ? (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-6 text-center text-sm text-red-700">
              {error}
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {flowers.map((flower) => (
                <FlowerCard key={flower.id} {...flower} />
              ))}
            </div>
          )}

          <p className="mt-8 text-center text-sm text-neutral-500">
            ¿No encuentras lo que buscas?{" "}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-rosaoscuro font-semibold hover:underline">
              Contáctanos para un diseño personalizado
            </a>
          </p>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => navigateTo("catalogo")}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-rosaoscuro bg-white px-6 py-3 text-rosaoscuro transition-colors hover:bg-rosaclaro"
            >
              Ver catálogo completo
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="bg-rosasuave py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <p className="mb-2 text-sm text-rosaoscuro uppercase tracking-widest">
            Hablemos
          </p>
          <h2 className="mb-4 text-rosaoscuro">¿Lista/o para hacer tu pedido?</h2>
          <p className="mb-8 text-neutral-600">
            Contáctanos por WhatsApp o correo electrónico y te ayudamos a elegir
            la flor perfecta. También aceptamos pedidos personalizados para eventos
            especiales, bodas y regalos corporativos.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-white shadow-md transition-all hover:bg-green-600 hover:shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Escribir por WhatsApp
            </a>
            {/* <a
              href="mailto:info@floresartesanales.com"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-rosaoscuro bg-white px-6 py-3 text-rosaoscuro transition-colors hover:bg-rosaclaro"
            >
              <Mail className="h-5 w-5" />
              Enviar un correo
            </a> */}
            <a
              href="https://instagram.com/floresartesanales"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-neutral-300 bg-white px-6 py-3 text-neutral-700 transition-colors hover:border-rosaoscuro hover:bg-rosaclaro"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-rosasuave py-8">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <Flower2 className="h-5 w-5 text-rosaoscuro" />
              <span className="font-cursive text-xl text-rosaoscuro">De la rose</span>
            </div>
            <p className="text-sm text-neutral-500">
              © 2026 Flores Artesanales. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-rosaoscuro transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-emerald-600 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              {/* <a href="mailto:info@floresartesanales.com" className="text-neutral-400 hover:text-emerald-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a> */}
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-all hover:bg-emerald-600 hover:scale-110"
        title="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}