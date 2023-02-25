// React Dependencies
import React from "react";
import ReactDOM from "react-dom/client";

// Internal Dependencies
import { App } from "./App";

import { AppStateProvider } from "./state/AppStateContext";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>
);
