import {
  ArrowLeft,
  Flower2,
  Heart,
  Instagram,
  Mail,
  MessageCircle,
  Package,
  Sparkles,
} from "lucide-react";

import f1 from "../../../img/f1.jpeg";
import f2 from "../../../img/f2.jpeg";
import f3 from "../../../img/f3.jpeg";
import f4 from "../../../img/f4.jpeg";

interface AboutViewProps {
  onGoHome: () => void;
}

export function AboutView({ onGoHome }: AboutViewProps) {
  const whatsappUrl =
    "https://wa.me/573224470254?text=Hola!%20Me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20sus%20productos.";

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
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-sm uppercase tracking-widest text-rosaoscuro">
              Nuestra historia
            </p>
            <h1 className="mb-4 text-rosaoscuro">Un emprendimiento hecho con pasión</h1>
            <p className="text-neutral-600">
              Flores Artesanales nació del amor por la creatividad y el deseo de ofrecer
              regalos que no se marchiten. Cada flor es elaborada a mano, con dedicación y
              atención al detalle, para que cada pieza sea especial y duradera.
            </p>
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 text-neutral-600">
                Trabajamos con una amplia variedad de materiales —papel, tela, fieltro,
                origami, cerámica y madera— para que encuentres la flor perfecta para cada
                ocasión: cumpleaños, aniversarios, decoración del hogar o simplemente para
                darte un gusto.
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
                    src={f1}
                    alt="Rosas de papel artesanales"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src={f2}
                    alt="Margaritas de fieltro"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src={f3}
                    alt="Origami floral"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src={f4}
                    alt="Flores de cerámica"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 border-y bg-white/60 py-12">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <p className="mb-2 text-sm uppercase tracking-widest text-rosaoscuro">
              Hablemos
            </p>
            <h2 className="mb-4 text-rosaoscuro">¿Quieres un diseño personalizado?</h2>
            <p className="mb-8 text-neutral-600">
              Escríbenos por WhatsApp, correo o Instagram y te ayudamos a crear una pieza
              única para tu ocasión especial.
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
      </main>
    </div>
  );
}
