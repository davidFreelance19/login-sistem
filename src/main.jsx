import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { MovieProvider } from "./context/MoviesProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import router from "./router";
import "./index.css";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <MovieProvider>
        <QueryClientProvider client={client}>
          <ReactQueryDevtools />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </MovieProvider>
    </AuthProvider>
  </React.StrictMode>
);
