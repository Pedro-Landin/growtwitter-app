import { RouterProvider } from "react-router";
import GlobalStyles from "./styles/global";
import { routes } from "./routes";
import { ThemeProviderComponent } from "./contexts/ThemeContext";
import { AuthProviderComponent } from "./contexts/AuthContext";

export function App() {
  return (
    <ThemeProviderComponent>
      <AuthProviderComponent>
        <GlobalStyles />
        <RouterProvider router={routes} />
      </AuthProviderComponent>
    </ThemeProviderComponent>
  );
}