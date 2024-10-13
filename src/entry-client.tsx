import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import App from "./App";

const serverData = window.__SERVER_DATA__;

const preloadedState = window.__PRELOAD_DATA_;

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App serverData={serverData} />
      </BrowserRouter>
    </PersistGate> */}
{/* 
    {persistor ? (
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App serverData={serverData} />
        </BrowserRouter>
      </PersistGate>
    ) : ( */}
      <BrowserRouter>
        <App serverData={serverData} />
      </BrowserRouter>
    {/* )} */}
  </Provider>
);

// Hydrate the Redux store with server data

if (preloadedState) {
  store.dispatch({ type: "HYDRATE", payload: preloadedState });
}
