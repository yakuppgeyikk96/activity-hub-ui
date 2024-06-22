"use client";

import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#118ab2",
    },
    secondary: {
      main: "#06d6a0",
    },
    error: {
      main: "#e63946",
    },
    warning: {
      main: "#ffd166",
    },
    info: {
      main: "#118ab2",
    },
    success: {
      main: "#06d6a0",
    },
    action: {
      active: "rgba(0, 0, 0, 0.65)",
    },
  },
});

export default function MuiThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
