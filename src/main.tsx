import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./core/queryClient";
import { AuthProvider } from "./context/AuthContext";
import { SnackbarProvider } from "notistack";
import { App } from "./App";

import "./scss/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SnackbarProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
