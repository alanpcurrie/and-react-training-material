import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";

const compose = (...providers) => ({ children }) =>
  providers.reduce((child, Element) => <Element>{child}</Element>, children);

const AppProvider = compose(StrictMode, BrowserRouter);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AppProvider>
    <Router />
  </AppProvider>
);
