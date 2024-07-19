"use client";
import React from "react";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.scss";
import LangSwitch from "../LangSwitch";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LinkNav from "./link-nav";

gsap.registerPlugin(useGSAP, ScrollTrigger);

ScrollTrigger.addEventListener("refresh", function () {
  if (document.body.getAttribute("style") === "") {
    document.body.removeAttribute("style");
  }
});

export default function MainHeader() {
  const t = useTranslations("NavigationMenu");

  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".headingText",
  //       start: "top center",
  //     },
  //   });
  //   tl.fromTo(
  //     ".headingText1",
  //     { y: 100, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 0.5 }
  //   );
  //   tl.fromTo(
  //     ".headingText2",
  //     { y: 100, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 0.5 },
  //     "<0.2"
  //   );
  //   tl.fromTo(
  //     ".headingText3",
  //     { y: 100, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 0.5 },
  //     "<0.2"
  //   );
  //   tl.fromTo(
  //     ".logoImg",
  //     { x: 100, opacity: 0 },
  //     { x: 0, opacity: 1, duration: 0.5 },
  //     "<0.2"
  //   );
  //   tl.to(".logoImg", { rotation: 360, duration: 1, repeat: 2 });
  // });

  return (
    <div>
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image
            src={logoImg}
            alt="A plate with food on it"
            className="logoImg"
            priority
          />
          {t("nextLevelFood")}
        </Link>

        <div className={classes.headerRight}>
          <nav className={classes.nav}>
            <ul>
              <li>
                <LinkNav href="/meals">{t("browseMeals")}</LinkNav>
              </li>
              <li>
                <LinkNav href="/community">{t("foodCommunity")}</LinkNav>
              </li>
            </ul>
          </nav>
          <LangSwitch />
        </div>
      </header>
      {/* <h1 className="headingText">
        <span className="headingText1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
        <span className="headingText2">
          Nam urna diam, bibendum vel euismod a, efficitur at arcu.
        </span>
        <span className="headingText3">
          Nam urna diam, bibendum vel euismod a, efficitur at arcu.
        </span>
      </h1> */}
    </div>
  );
}
