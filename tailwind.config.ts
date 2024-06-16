import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        "logo-cloud": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 4rem))" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "logo-cloud": "logo-cloud 30s linear infinite",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dotted-spacing": (value: any) => ({
            "--tw-bg-dotted-spacing-x": value,
            "--tw-bg-dotted-spacing-y": value,
            "background-size":
              "var(--tw-bg-dotted-spacing-x) var(--tw-bg-dotted-spacing-y)",
          }),
          "bg-dotted-spacing-x": (value: any) => ({
            "--tw-bg-dotted-spacing-x": value,
            "background-size":
              "var(--tw-bg-dotted-spacing-x) var(--tw-bg-dotted-spacing-y)",
          }),
          "bg-dotted-spacing-y": (value: any) => ({
            "--tw-bg-dotted-spacing-y": value,
            "background-size":
              "var(--tw-bg-dotted-spacing-x) var(--tw-bg-dotted-spacing-y)",
          }),
        },
        {
          values: theme("spacing"),
        }
      );

      matchUtilities(
        {
          "bg-dotted": (value: any) => ({
            "--tw-bg-dotted-color": value,
            "--tw-bg-dotted-radius": "1px",
            "background-image":
              "radial-gradient(circle at center, var(--tw-bg-dotted-color) var(--tw-bg-dotted-radius), transparent 0)",
          }),
        },
        {
          values: flattenColorPalette(theme("colors")),
          type: "color",
        }
      );

      matchUtilities(
        {
          "bg-dotted-radius": (value: any) => ({
            "--tw-bg-dotted-radius": value,
            "background-image":
              "radial-gradient(circle at center, var(--tw-bg-dotted-color) var(--tw-bg-dotted-radius), transparent 0)",
          }),
        },
        {
          values: theme("spacing"),
        }
      );
    },
  ],
} satisfies Config;

export default config;
