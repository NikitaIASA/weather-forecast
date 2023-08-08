import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./core/queryClient";
import { AuthProvider } from "./context/AuthContext";
import { WeatherProvider } from "./context/WeatherContext";
import { SnackbarProvider } from "notistack";
import { App } from "./App";

import "./scss/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SnackbarProvider>
        <AuthProvider>
          <WeatherProvider>
            <App />
          </WeatherProvider>
        </AuthProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
