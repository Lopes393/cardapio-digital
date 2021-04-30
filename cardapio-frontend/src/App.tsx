import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Splash } from "./components/Splash";
import { GlobalStyle } from "./styles/global";


export function App() {
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => { setLoader(false) }, 3000);
  }, [])

  return (
    <div className="App">
      {loader ? <Splash /> : 
      <>
        <Header />
        <Menu />
        <GlobalStyle />
      </>}
    </div>
  );
}
