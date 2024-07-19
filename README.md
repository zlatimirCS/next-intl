This is readme for Next 14 setup

nvm use 20

## next-intl setup

npm install next-intl
i18n.js file in the langSwitch folder of app
next.config.js added plugin for next-intl
langConfig.js addded with locales and default locale in the langSwitch
locale.js with storing and getting language from Cookies in the langSwitch
in Layout added next-intl provider
on homepage you can consume with using useTranslations
LangSwitch componenta za promenu jezika
messages folder - json files with translations in the langSwitch

---

PageLeave component - used for triggering page leave event and run callback function

---

main-header component - used for gsap initial setup
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

---

if you want to use Image without adding width and height explicitely
you can do it with import
import logoImg from "@/assets/logo.png";
<Image src={logoImg} alt="A plate with food on it" />
