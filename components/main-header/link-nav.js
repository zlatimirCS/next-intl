"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./link-nav.module.css";

const linkNav = ({ href, children }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={pathname.startsWith(href) ? classes.active : ""}
    >
      {children}
    </Link>
  );
};
export default linkNav;
