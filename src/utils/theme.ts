"use client";

import { createTheme } from "@mui/material";
import "./font.css";

export const MayoTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fcfcdc",
      contrastText: "#fff",
    },
    background: {
      default: "#fffcf5",
      paper: "#FFF",
    },
  },
  typography: {
    fontFamily: [
      '"Gmarket"',
      "-apple-system",
      "BlinkMacSystemFont",
      "system-ui",
      "Roboto",
      '"Helvetica Neue"',
      '"Segoe UI"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Gmarket",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Gmarket",
          backgroundColor: "#F2F6FA",
        },
      },
    },
  },
});
