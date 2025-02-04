import mitt from "mitt";
import OpenApiPlugin from "./OpenApiPlugin.mjs";
import ruLang from "./locales/ru.json";
import deLang from "./locales/de.json";
const OpenApiPlugins = ({ app }, inject) => {
  const emitter = mitt();
  const openapidoc = new OpenApiPlugin();
  openapidoc.addLocale("ru", ruLang);
  openapidoc.addLocale("de", deLang);
  app.$openapidoc = openapidoc;
  app.$openapidocBus = {
    $on: emitter.on,
    $off: emitter.off,
    $emit: emitter.emit
  };
  inject("openapidoc", openapidoc);
  inject("openapidocBus", {
    $on: emitter.on,
    $off: emitter.off,
    $emit: emitter.emit
  });
};
export default OpenApiPlugins;
