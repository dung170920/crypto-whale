import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import "@/scss/index.scss";
import "swiper/css";
import "swiper/css/navigation";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
