import localFont from "next/font/local";

export const pushPenny = localFont({
  src: [
    {
      path: "../fonts/light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/extra-bold.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});
