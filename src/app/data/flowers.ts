import f1 from "../../../img/f1.jpeg";
import f2 from "../../../img/f2.jpeg";
import f3 from "../../../img/f3.jpeg";
import f4 from "../../../img/f4.jpeg";
import f5 from "../../../img/f5.jpeg";
import f6 from "../../../img/f6.jpeg";

import { supabase } from "../../../supabaseClient.js";

export interface FlowerCardData {
  id: string | number;
  title: string;
  material: string;
  image: string;
  price: string;
  badge?: string;
}

type FlowerRow = {
  id?: number | string;
  title?: unknown;
  material?: unknown;
  image?: unknown;
  image_url?: unknown;
  imageUrl?: unknown;
  photo?: unknown;
  price?: unknown;
  badge?: unknown;
};

const fallbackImages = [f1, f2, f3, f4, f5, f6];

function readText(value: unknown, fallback: string) {
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : fallback;
  }

  if (typeof value === "number") {
    return String(value);
  }

  return fallback;
}

function normalizeImageUrl(value: unknown) {
  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  if (/^https?:\/\//i.test(trimmed) || trimmed.startsWith("data:") || trimmed.startsWith("/")) {
    return trimmed;
  }

  return trimmed;
}

function toGoogleDriveDirectUrl(value: string) {
  const fileIdFromFilePath = value.match(/\/file\/d\/([^/]+)/i)?.[1];
  const fileIdFromQuery = value.match(/[?&]id=([^&]+)/i)?.[1];
  const fileId = fileIdFromFilePath ?? fileIdFromQuery;

  if (!fileId) {
    return value;
  }

  return `https://drive.google.com/uc?export=view&id=${fileId}`;
}

function readImage(row: FlowerRow, index: number) {
  const image = normalizeImageUrl(row.image ?? row.image_url ?? row.imageUrl ?? row.photo);

  if (typeof image === "string" && image.trim().length > 0) {
    if (image.includes("drive.google.com")) {
      return toGoogleDriveDirectUrl(image);
    }

    return image.trim();
  }

  if (typeof row.id === "number" && row.id > 0) {
    const fallbackById = fallbackImages[row.id - 1];
    if (fallbackById) {
      return fallbackById;
    }
  }

  return fallbackImages[index % fallbackImages.length];
}

export function mapFlowerRow(row: FlowerRow, index: number): FlowerCardData {
  const badge = readText(row.badge, "");

  return {
    id: row.id ?? index,
    title: readText(row.title, "Flor artesanal"),
    material: readText(row.material, "Material no especificado"),
    image: readImage(row, index),
    price: readText(row.price, "Consultar"),
    ...(badge ? { badge } : {}),
  };
}

export async function getFlowers(): Promise<FlowerCardData[]> {
  if (!supabase) {
    throw new Error(
      "Faltan las variables VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en el archivo .env."
    );
  }

  const { data, error } = await supabase.from("flowers").select("*");

  if (error) {
    throw error;
  }

  const rows = data ?? [];

  if (rows.length === 0) {
    throw new Error(
      "Supabase devolvió 0 filas en public.flowers. Revisa si la tabla tiene datos y si existe una policy SELECT para la clave anon."
    );
  }

  return rows.map((row, index) => mapFlowerRow(row as FlowerRow, index));
}