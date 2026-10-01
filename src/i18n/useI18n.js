import { useContext } from "react";
import { LanguageContext } from "./context.js";

/** Pakai di komponen: const { t, lang, setLang, toggle } = useI18n(); */
export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n harus dipakai di dalam <LanguageProvider>");
  return ctx;
}
