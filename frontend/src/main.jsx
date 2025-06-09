import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/auth.context.jsx";
import { ComponentContextProvider } from "./context/component.context.jsx";
import { SocketContextProvider } from "./context/socket.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <ComponentContextProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </ComponentContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
