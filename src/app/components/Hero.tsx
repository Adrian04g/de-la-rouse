import { Flower2, ShoppingBag, Star } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-rosasuave via-rosasuave to-rosasuave py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNiA2LTIuNjg2IDYtNi0yLjY4Ni02LTYtNnptMCA4Yy0xLjEwNSAwLTItLjg5NS0yLTJzLjg5NS0yIDItMiAyIC44OTUgMiAyLS44OTUgMi0yIDJ6IiBmaWxsPSIjQzI1MjYxIiBvcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-40"></div>

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-rosaclaro p-4">
            <Flower2 className="h-12 w-12 text-rosaoscuro" />
          </div>

          <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-rosaclaro px-4 py-1 text-sm text-rosaoscuro">
            <Star className="h-3.5 w-3.5 fill-rosaoscuro text-rosaoscuro" />
            <span>Flores hechas con amor y dedicación</span>
          </div>

          <h1 className="mb-4 bg-gradient-to-r from-rosaoscuro to-rosapetalo bg-clip-text text-transparent">
            Flores Artesanales
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-600 md:text-xl">
            Creaciones únicas hechas a mano con los mejores materiales. Cada flor es
            un regalo especial que dura para siempre, sin marchitarse jamás.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-6 py-3 text-white shadow-md transition-all hover:bg-rose-500 hover:text-white"
            >
              <ShoppingBag className="h-5 w-5" />
              Ver Catálogo
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-rosaoscuro bg-white px-6 py-3 text-rosaoscuro transition-colors hover:bg-rosaclaro"
            >
              Hacer un Pedido
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-600">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rosaoscuro"></span>
              Envíos a todo el país
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rosaoscuro"></span>
              Pedidos personalizados
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rosaoscuro"></span>
              100% artesanal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}