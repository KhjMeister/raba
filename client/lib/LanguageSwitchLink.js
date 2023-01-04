// components/LanguageSwitchLink.js
import languageDetector from "../lib/languageDetector";
import { useRouter } from "next/router";
import Link from "next/link";

const LanguageSwitchLink = ({ locale, ...rest }) => {
  const router = useRouter();

  let href = rest.href || router.asPath;
  let pName = router.pathname;
  Object.keys(router.query).forEach((k) => {
    if (k === "locale") {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    if(k === 'persian_date'){
      pName = pName + '?persian_date=' + router.query['persian_date']
    }
    pName = pName.replace(`[${k}]`, router.query[k]);
  });
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }
  
  return (
    <a style={{cursor:'pointer'}} onClick={() => {
      localStorage.setItem('currentLocale' , locale)
      router.push(href);
    }}>
      {locale}
    </a>
  );
};

export default LanguageSwitchLink;
