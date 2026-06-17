import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MessageCircle, Tag } from "lucide-react";

interface FlowerCardProps {
  title: string;
  material: string;
  image: string;
  price: string;
  badge?: string;
}

function formatPrice(price: string) {
  const numericValue = Number(price.replace(/[^0-9]/g, ""));

  if (!Number.isFinite(numericValue) || numericValue <= 0) {
    return price;
  }

  return new Intl.NumberFormat("es-CO").format(numericValue);
}

export function FlowerCard({ title, material, image, price, badge }: FlowerCardProps) {
  const formattedPrice = formatPrice(price);
  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa el producto: ${title} (${material}) - COP $${formattedPrice}. ¿Está disponible?`
  );
  const whatsappUrl = `https://wa.me/573224470254?text=${whatsappMessage}`;

  return (
    <div className="group relative overflow-hidden rounded-xl bg-rosasuave shadow-md transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
      {badge && (
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs text-red shadow-sm">
          <Tag className="h-3 w-3" />
          {badge}
        </div>
      )}
      <div className="aspect-square overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="mb-1 text-rosaoscuro">{title}</h3>
        <p className="mb-3 text-sm text-neutral-500">{material}</p>
        <div className="flex items-center justify-between gap-3">
          <span className="text-lg font-semibold text-rosaoscuro">COP ${formattedPrice}</span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-rose-500 px-4 py-2 text-sm text-white transition-colors hover:bg-rosapetalo"
          >
            <MessageCircle className="h-4 w-4" />
            Consultar
          </a>
        </div>
      </div>
    </div>
  );
}