import { getGalleryPhotos } from "@/lib/gallery";
import GalleryCarousel from "./GalleryCarousel";

export default async function Gallery() {
  const photos = await getGalleryPhotos();
  return <GalleryCarousel photos={photos} />;
}
