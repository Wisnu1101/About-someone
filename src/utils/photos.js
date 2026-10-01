/* Format foto yang otomatis dicoba (huruf kecil & besar) */
const EXTENSIONS = ["jpg", "jpeg", "png", "webp", "JPG", "JPEG", "PNG"];

/**
 * Mengubah satu path jadi daftar kemungkinan nama file.
 *
 *   "/photos/disca"     -> ["/photos/disca.jpg", "/photos/disca.jpeg", ...]
 *   "/photos/disca.jpg" -> ["/photos/disca.jpg", "/photos/disca.jpeg", ...]
 *
 * Jadi fotomu boleh berekstensi .jpg, .jpeg, .png, atau .webp tanpa ubah kode.
 */
export function photoCandidates(src) {
  if (!src) return [];
  if (Array.isArray(src)) return src;

  const lastSlash = src.lastIndexOf("/");
  const lastDot = src.lastIndexOf(".");
  const hasExtension = lastDot > lastSlash;
  const base = hasExtension ? src.slice(0, lastDot) : src;

  const list = hasExtension ? [src] : [];
  EXTENSIONS.forEach((ext) => list.push(`${base}.${ext}`));

  return [...new Set(list)];
}
