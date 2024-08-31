const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;
import placeholder from "/public/img/no-movie.png";

export default function getImageLink(imagePath: string): string {
  if (imagePath) {
    return IMAGE_BASE_URL + imagePath.replace("/", "");
  } else {
    return placeholder;
  }
}