import { Platform } from "react-native";

const isAndroid = Platform.OS === "android";
const isHermes = !!global.HermesInternal;

if (isAndroid || isHermes) {
    require("@formatjs/intl-locale/polyfill");

    require("@formatjs/intl-pluralrules/polyfill");
    require("@formatjs/intl-pluralrules/locale-data/en");
    require("@formatjs/intl-pluralrules/locale-data/es");

    require("@formatjs/intl-displaynames/polyfill");
    require("@formatjs/intl-displaynames/locale-data/en");
    require("@formatjs/intl-displaynames/locale-data/es");
}

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Could be anything that returns default preferred language
import { getLocales } from "expo-localization";

// Import all the languages you want here
import cn from "./locales/cn/common.json";
import en from "./locales/en/common.json";

i18n.use(initReactI18next).init({
    // Add any imported languages here
    resources: {
        cn: {
            translation: cn,
        },
        en: {
            translation: en,
        }
    },
    //lng: getLocales()[0].languageCode,
    lng: 'cn',
    fallbackLng: "cn",  // This is the default language if none of the users preffered languages are available
    interpolation: {
        escapeValue: false, // https://www.i18next.com/translation-function/interpolation#unescape
    },
    returnNull: false,
});

export default i18n;