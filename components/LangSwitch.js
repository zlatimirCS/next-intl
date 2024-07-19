"use client";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useLocale } from "next-intl";
import { setUserLocale } from "../langSwitch/locale";
import { useTranslations } from "next-intl";

const LangSwitch = () => {
  const t = useTranslations("NavigationMenu");
  const locale = useLocale();
  const [lang, setLang] = React.useState(locale);

  const handleChange = (event) => {
    setLang(event.target.value);
    setUserLocale(event.target.value);
  };

  const languageDropdownItems = [
    { value: "sr", label: t("srLang") },
    { value: "en", label: t("enLang") },
  ];

  return (
    <>
      <Select
        value={lang}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={{
          width: "130px",
          color: "#ddd6cb",
          border: "1px solid #ddd6cb",
          "& .MuiSvgIcon-root": {
            color: "#ddd6cb",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: { bgcolor: "transparent", border: "1px solid #ddd6cb" },
          },
        }}
      >
        {languageDropdownItems.map((item) => {
          return (
            <MenuItem
              key={item.value}
              value={item.value}
              sx={{
                color: "white",
                backgroundColor: "transparent",
                "&.Mui-selected": {
                  backgroundColor: "transparent",
                },
              }}
            >
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};
export default LangSwitch;
