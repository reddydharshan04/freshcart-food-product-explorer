import { AppRoutes } from "./routes/AppRoutes";
import { ShoppingProvider } from "./context/ShoppingContext";

export default function App() {
  return <ShoppingProvider><AppRoutes /></ShoppingProvider>;
}
