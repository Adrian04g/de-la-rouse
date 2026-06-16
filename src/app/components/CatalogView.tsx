import { ArrowLeft, Flower2, MessageCircle } from "lucide-react";

import { FlowerCard } from "./FlowerCard";
import { flowers } from "../data/flowers";

interface CatalogViewProps {
  onGoHome: () => void;
}

export function CatalogView({ onGoHome }: CatalogViewProps) {
  const whatsappUrl =
    "https://wa.me/3115214011?text=Hola!%20Me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20sus%20productos.";

  return (
    <div className="min-h-screen bg-rosasuave">
      <nav className="sticky top-0 z-40 border-b bg-rosasuave/90 shadow-sm backdrop-blur-sm">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Flower2 className="h-6 w-6 text-rosaoscuro" />
            <span className="font-semibold text-rosaoscuro">Flores Artesanales</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onGoHome}
              className="inline-flex items-center gap-2 rounded-lg border border-rosaoscuro bg-white px-4 py-2 text-sm text-rosaoscuro transition-colors hover:bg-rosaclaro"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
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
        </div>
      </nav>

      <main className="py-16 md:py-24">
        <section className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-2 text-sm uppercase tracking-widest text-rosaoscuro">
              Catálogo completo
            </p>
            <h1 className="mb-4 text-rosaoscuro">Todas nuestras flores artesanales</h1>
            <p className="text-neutral-600">
              Explora la colección completa de piezas hechas a mano. Cada diseño puede
              personalizarse en colores, materiales y tamaño según lo que necesites.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {flowers.map((flower) => (
              <FlowerCard key={flower.id} {...flower} />
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-neutral-500">
            ¿No encuentras lo que buscas?{" "}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-rosaoscuro hover:underline"
            >
              Contáctanos para un diseño personalizado
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
