"use client";

import { FC, ReactNode } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { MayoTheme } from "../utils/theme";
import { RecoilRoot } from "recoil";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={MayoTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default Providers;
