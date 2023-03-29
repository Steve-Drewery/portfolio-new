import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        gray: {
          100: "#e6f5fb",
          200: "#ceebf7",
          300: "#b5e2f3",
          400: "#9dd8ef",
          500: "#84ceeb",
          600: "#6aa5bc",
          700: "#4f7c8d",
          800: "#35525e",
          900: "#1a292f",
        },
        teal: {
          100: "#ccf6ff",
          200: "#99eeff",
          300: "#66e5ff",
          400: "#33ddff",
          500: "#00d4ff",
          600: "#00aacc",
          700: "#007f99",
          800: "#005566",
          900: "#002a33",
        },
        primary: {
          100: "#cecee4",
          200: "#9d9dc9",
          300: "#6b6baf",
          400: "#3a3a94",
          500: "#090979",
          600: "#070761",
          700: "#050549",
          800: "#040430",
          900: "#020218",
        },
        white: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333",
        },
        black: {
          100: "#cccccc",
          200: "#999999",
          300: "#666666",
          400: "#333333",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        red: {
          100: "#ffd4d3",
          200: "#ffa8a8",
          300: "#ff7d7c",
          400: "#ff5151",
          500: "#ff2625",
          600: "#cc1e1e",
          700: "#991716",
          800: "#660f0f",
          900: "#330807",
        },
      }
    : {
        gray: {
          100: "#1a292f",
          200: "#35525e",
          300: "#4f7c8d",
          400: "#6aa5bc",
          500: "#84ceeb",
          600: "#9dd8ef",
          700: "#b5e2f3",
          800: "#ceebf7",
          900: "#e6f5fb",
        },
        teal: {
          100: "#002a33",
          200: "#005566",
          300: "#007f99",
          400: "#00aacc",
          500: "#00d4ff",
          600: "#33ddff",
          700: "#66e5ff",
          800: "#99eeff",
          900: "#ccf6ff",
        },
        primary: {
          100: "#020218",
          200: "#040430",
          300: "#050549",
          400: "#f2f0f0",
          500: "#090979",
          600: "#3a3a94",
          700: "#6b6baf",
          800: "#9d9dc9",
          900: "#cecee4",
        },
        white: {
          100: "#333333",
          200: "#666666",
          300: "#999999",
          400: "#cccccc",
          500: "#ffffff",
          600: "#ffffff",
          700: "#ffffff",
          800: "#ffffff",
          900: "#ffffff",
        },
        black: {
          100: "#000000",
          200: "#000000",
          300: "#000000",
          400: "#000000",
          500: "#000000",
          600: "#333333",
          700: "#666666",
          800: "#999999",
          900: "#cccccc",
        },
        red: {
          100: "#330807",
          200: "#660f0f",
          300: "#991716",
          400: "#cc1e1e",
          500: "#ff2625",
          600: "#ff5151",
          700: "#ff7d7c",
          800: "#ffa8a8",
          900: "#ffd4d3",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...colors(
        mode === "dark"
          ? {
              primary: {
                main: colors.primary[500],
              },
              secondary: {
                main: colors.teal[500],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: colors.primary[500],
              },
            }
          : {
              primary: {
                main: colors.primary[100],
              },
              secondary: {
                main: colors.teal[500],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: "fcfcfc",
              },
            }
      ),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
