import { useCallback, useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./context.js";
import { translations, DEFAULT_LANG, LANGUAGES } from "./translations.js";

const STORAGE_KEY = "discha-lang";

/** Ambil nilai `a.b.c` dari objek bersarang. */
function getPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

/** Ganti {nama} dengan nilai dari `vars`. */
function interpolate(text, vars) {
  if (!vars || typeof text !== "string") return text;
  return text.replace(/\{(\w+)\}/g, (match, key) =>
    Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : match,
  );
}

function initialLang() {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const saved = window.localStorage?.getItem(STORAGE_KEY);
  if (saved && translations[saved]) return saved;
  /* Default tetap English (bahasa utama), apa pun setelan browser. */
  return DEFAULT_LANG;
}

export function LanguageProvider({ children, initial }) {
  const [lang, setLang] = useState(() =>
    initial && translations[initial] ? initial : initialLang(),
  );

  /* Simpan pilihan & samakan atribut <html lang> + judul tab. */
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    const meta = translations[lang]?.meta;
    if (meta?.title) document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc && meta?.description) desc.setAttribute("content", meta.description);
    try {
      window.localStorage?.setItem(STORAGE_KEY, lang);
    } catch {
      /* localStorage bisa diblokir — abaikan saja. */
    }
  }, [lang]);

  const t = useCallback(
    (path, vars) => {
      const raw = getPath(translations[lang], path);
      const value = raw === undefined ? getPath(translations[DEFAULT_LANG], path) : raw;
      return interpolate(value, vars);
    },
    [lang],
  );

  const toggle = useCallback(() => {
    setLang((cur) => (cur === "en" ? "id" : "en"));
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, toggle, t, languages: LANGUAGES }),
    [lang, toggle, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
