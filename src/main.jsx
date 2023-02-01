import React from "react";
import ReactDOM from "react-dom/client";
import { SWRConfig } from "swr";
import { Theme } from "./theme";
import { request } from "./utils/request";
import App from "./App";
import "./libs/styles/_html.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            request(resource, init).then((res) => res.data),
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
        }}
      >
        <App />
      </SWRConfig>
    </Theme>
  </React.StrictMode>
);
