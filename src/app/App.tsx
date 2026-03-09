import { Hero } from "./components/Hero";
import { FlowerCard } from "./components/FlowerCard";
import {
  Flower2,
  Mail,
  MessageCircle,
  Instagram,
  Heart,
  Sparkles,
  Package,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const flowers = [
    {
      id: 1,
      title: "Rosas de Papel",
      material: "Papel crepé y alambre",
      image: "https://images.unsplash.com/photo-1665953495580-c9a5a2a1759d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHBhcGVyJTIwZmxvd2VycyUyMGNyYWZ0c3xlbnwxfHx8fDE3NzMwODEwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$45",
      badge: "Más vendido",
    },
    {
      id: 2,
      title: "Lirios de Tela",
      material: "Seda y algodón",
      image: "https://images.unsplash.com/photo-1771585655058-1772ec95b84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwZmFicmljJTIwZmxvd2Vyc3xlbnwxfHx8fDE3NzMwODEwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$65",
    },
    {
      id: 3,
      title: "Margaritas de Fieltro",
      material: "Lana y fieltro",
      image: "https://images.unsplash.com/photo-1772381943253-a88b52c09921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZWx0JTIwd29vbCUyMGZsb3dlcnMlMjBoYW5kbWFkZXxlbnwxfHx8fDE3NzMwODEwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$38",
      badge: "Nuevo",
    },
    {
      id: 4,
      title: "Origami Floral",
      material: "Papel washi",
      image: "https://images.unsplash.com/photo-1731504802116-d0307730189c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmlnYW1pJTIwZmxvd2VycyUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MzA4MTA3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$52",
    },
    {
      id: 5,
      title: "Flores de Cerámica",
      material: "Arcilla esmaltada",
      image: "https://images.unsplash.com/photo-1725590249885-de0796581827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwZmxvd2VyJTIwc2N1bHB0dXJlfGVufDF8fHx8MTc3MzA4MTA3OHww&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$120",
    },
    {
      id: 6,
      title: "Flores de Madera",
      material: "Madera tallada y pintada",
      image: "https://images.unsplash.com/photo-1709993608773-b7b81f77f005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmbG93ZXIlMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc3MzA4MTA3OHww&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$95",
      badge: "Premium",
    },
  ];

  const navLinks = [
    { href: "#catalogo", label: "Catálogo" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ];

  const whatsappUrl = "https://wa.me/1234567890?text=Hola!%20Me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20sus%20productos.";

  return (
    <div className="min-h-screen bg-rosasuave">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b bg-rosasuave/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Flower2 className="h-6 w-6 text-rosaoscuro" />
            <span className="font-semibold text-rosaoscuro">Flores Artesanales</span>
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
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-semibold text-rosa-oscuro">+200</p>
              <p className="text-sm text-neutral-500">Clientes felices</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-rosa-oscuro">6</p>
              <p className="text-sm text-neutral-500">Tipos de materiales</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-rosa-oscuro">100%</p>
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

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {flowers.map((flower) => (
              <FlowerCard key={flower.id} {...flower} />
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-neutral-500">
            ¿No encuentras lo que buscas?{" "}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-rosaoscuro font-semibold hover:underline">
              Contáctanos para un diseño personalizado
            </a>
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="bg-rosasuave py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-2 text-sm text-rosaoscuro uppercase tracking-widest">
                Nuestra historia
              </p>
              <h2 className="mb-4 text-rosaoscuro">Un emprendimiento hecho con pasión</h2>
              <p className="mb-4 text-neutral-600">
                Flores Artesanales nació del amor por la creatividad y el deseo de
                ofrecer regalos que no se marchiten. Cada flor es elaborada a mano,
                con dedicación y atención al detalle, para que cada pieza sea
                especial y duradera.
              </p>
              <p className="mb-6 text-neutral-600">
                Trabajamos con una amplia variedad de materiales —papel, tela,
                fieltro, origami, cerámica y madera— para que encuentres la flor
                perfecta para cada ocasión: cumpleaños, aniversarios, decoración del
                hogar o simplemente para darte un gusto.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-rosaclaro p-2">
                    <Heart className="h-5 w-5 text-rosaoscuro" />
                  </div>
                  <div>
                    <p className="font-semibold text-rosaoscuro">Hecho con amor</p>
                    <p className="text-sm text-neutral-600">
                      Cada flor lleva horas de trabajo y dedicación artesanal.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-rosaclaro p-2">
                    <Sparkles className="h-5 w-5 text-rosaoscuro" />
                  </div>
                  <div>
                    <p className="font-semibold text-rosaoscuro">Diseños únicos</p>
                    <p className="text-sm text-neutral-600">
                      Aceptamos pedidos personalizados con colores y materiales a tu elección.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-rosaclaro p-2">
                    <Package className="h-5 w-5 text-rosaoscuro" />
                  </div>
                  <div>
                    <p className="font-semibold text-rosaoscuro">Envíos seguros</p>
                    <p className="text-sm text-neutral-600">
                      Empacamos con cuidado para que llegue en perfecto estado a donde estés.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1665953495580-c9a5a2a1759d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHBhcGVyJTIwZmxvd2VycyUyMGNyYWZ0c3xlbnwxfHx8fDE3NzMwODEwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Rosas de papel artesanales"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1772381943253-a88b52c09921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZWx0JTIwd29vbCUyMGZsb3dlcnMlMjBoYW5kbWFkZXxlbnwxfHx8fDE3NzMwODEwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Margaritas de fieltro"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1731504802116-d0307730189c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmlnYW1pJTIwZmxvd2VycyUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MzA4MTA3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Origami floral"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1725590249885-de0796581827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwZmxvd2VyJTIwc2N1bHB0dXJlfGVufDF8fHx8MTc3MzA4MTA3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Flores de cerámica"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
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
            <a
              href="mailto:info@floresartesanales.com"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-rosaoscuro bg-white px-6 py-3 text-rosaoscuro transition-colors hover:bg-rosaclaro"
            >
              <Mail className="h-5 w-5" />
              Enviar un correo
            </a>
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
              <span className="font-semibold text-rosaoscuro">Flores Artesanales</span>
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
              <a href="mailto:info@floresartesanales.com" className="text-neutral-400 hover:text-emerald-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
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