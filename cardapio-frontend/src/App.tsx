import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <Header></Header>
      <Menu></Menu>
      <GlobalStyle />
    </div>
  );
}
