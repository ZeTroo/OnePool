import {createI18n} from "vue-i18n";
import fr from "@assets/locales/fr.json";
import en from "@assets/locales/en.json";
import es from "@assets/locales/es.json";
import de from "@assets/locales/de.json";

export const tsi18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: "fr", // set locale
  fallbackLocale: "fr", // set fallback locale
  messages: {fr, en, es, de},
});
