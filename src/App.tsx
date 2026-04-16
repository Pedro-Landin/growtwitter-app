import { RouterProvider } from "react-router";
import GlobalStyles from "./styles/global";
import { routes } from "./routes";
import { ThemeProviderComponent } from "./contexts/ThemeContext";

export function App() {
  return (
    <ThemeProviderComponent>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </ThemeProviderComponent>
  );
}