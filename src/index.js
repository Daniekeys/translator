import React,{Suspense} from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import "./index.css";
import App from "./App";
import 'flag-icon-css/css/flag-icons.min.css' 
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    supportedLngs:['en','fr','ar'],
    lng: document.querySelector("html").lang, // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    detection: {
      // order and from where user language should be detected
      order: [ "path","cookie", "htmlTag","localStorage",  "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locals/{{lng}}/translation.json",
    },
   
  });

  const loading = (
    <div className="py-4 text-center">
      <h2>Loading ...</h2>
    </div>
  )

ReactDOM.render(
  <Suspense fallback={loading}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
