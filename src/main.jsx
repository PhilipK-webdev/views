import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
import GlobalStyles from "./style/globalStyle.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const theme = createTheme({
  direction: "rtl",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </ThemeProvider>
  </CacheProvider>
);
