const translate = (locale, key) => {
  let file = null;
  if (locale == "fa") {
    if (localStorage.getItem("currentLocale") != "fa") {
      localStorage.setItem("currentLocale", "fa");
    }
    file = require("../public/static/locales/fa/common.json");
  } else {
    if (localStorage.getItem("currentLocale") != "en") {
      localStorage.setItem("currentLocale", "en");
    }
    file = require("../public/static/locales/en/common.json");
  }
  return file[key];
};
export default translate;
