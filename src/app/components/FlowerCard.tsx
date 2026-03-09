import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MessageCircle, Tag } from "lucide-react";

interface FlowerCardProps {
  title: string;
  material: string;
  image: string;
  price: string;
  badge?: string;
}

export function FlowerCard({ title, material, image, price, badge }: FlowerCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa el producto: ${title} (${material}) - ${price}. ¿Está disponible?`
  );
  const whatsappUrl = `https://wa.me/1234567890?text=${whatsappMessage}`;

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
      {badge && (
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1 rounded-full bg-emerald-600 px-3 py-1 text-xs text-white shadow-sm">
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
        <h3 className="mb-1">{title}</h3>
        <p className="mb-3 text-sm text-neutral-500">{material}</p>
        <div className="flex items-center justify-between gap-3">
          <span className="font-semibold text-emerald-700 text-lg">{price}</span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-sm text-white transition-colors hover:bg-emerald-700"
          >
            <MessageCircle className="h-4 w-4" />
            Consultar
          </a>
        </div>
      </div>
    </div>
  );
}