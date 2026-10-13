import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#14301F",
          dark: "#0C1E13",
          light: "#1E452D",
          muted: "#2A4D37",
        },
        brass: {
          DEFAULT: "#B8924A",
          light: "#CFB070",
          dark: "#967332",
        },
        cream: {
          DEFAULT: "#F6F1E7",
          dark: "#EBE3D3",
          light: "#FAF7F2",
        },
        film: {
          DEFAULT: "#8C3B2A",
          dark: "#6E2C1E",
        },
        ink: {
          DEFAULT: "#161512",
          muted: "#4A4740",
          subtle: "#78736A",
        },
      },
      fontFamily: {
        serif: [
          "Fraunces",
          "Noto Serif SC",
          "Source Han Serif SC",
          "Songti SC",
          "SimSun",
          "Georgia",
          "serif",
        ],
        sans: [
          "Manrope",
          "Noto Sans SC",
          "Source Han Sans SC",
          "PingFang SC",
          "Microsoft YaHei",
          "system-ui",
          "sans-serif",
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.035em",
        industrial: "0.14em",
      },
      backgroundImage: {
        "duotone-green": "linear-gradient(135deg, rgba(20, 48, 31, 0.85) 0%, rgba(22, 21, 18, 0.65) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
