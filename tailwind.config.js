/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f5f5f5",
        "background-colorbgcontainer": "#fff",
        gray: {
          "100": "#898989",
          "200": "#2b2b2b",
          "300": "#231f20",
          "400": "#1e1e1e",
        },
        "border-colorsplit": "#f0f0f0",
        black: "#000",
        "border-colorborder": "#d9d9d9",
        "primary-colorprimarybg": "#e6f4ff",
        "primary-colorprimaryborder": "#91caff",
        "primary-colorprimary": "#1677ff",
        "ant-colorsplit": "rgba(0, 0, 0, 0.06)",
        "ant-colortext": "rgba(0, 0, 0, 0.88)",
        royalblue: "#3559e0",
        midnightblue: "#0f2167",
        firebrick: "#c33939",
        "text-colortextplaceholder": "rgba(0, 0, 0, 0.25)",
      },
      spacing: {
        "space-padding-padding": "16px",
        "space-padding-paddingsm": "12px",
        "space-padding-paddingxl": "32px",
        "space-padding-paddingsm1": "12px",
        "space-padding-paddingxs": "8px",
        "size-sizexl": "32px",
        "space-padding-padding1": "16px",
        "size-sizexl1": "32px",
        "space-padding-paddingxs1": "8px",
        "space-padding-padding2": "16px",
        "space-padding-paddingxs2": "8px",
        "space-margin-marginsm": "12px",
      },
      fontFamily: {
        "desktop-lg": "Inter",
        inherit: "inherit",
      },
      borderRadius: {
        "3xs": "10px",
        "13xl": "32px",
        "borderradius-borderradius": "6px",
        "borderradius-borderradius1": "6px",
        "borderradius-borderradiuslg": "8px",
        "borderradius-borderradius32": "32px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
