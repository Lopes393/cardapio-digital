import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Splash } from "./components/Splash";
import { GlobalStyle } from "./styles/global";
import { version } from "./../package.json";


export function App() {
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    verifyVersion();
    setTimeout(() => { setLoader(false) }, 3000);
  }, [])

  function verifyVersion() {
		if (version != getVersionLocalStorage()) {
			setVersionLocalStorage(version);
			window.location.reload();
		}
	}

	function getVersionLocalStorage() {
		return localStorage.getItem("wiseller_version");
	}

	function setVersionLocalStorage(version: any) {
		return localStorage.setItem("wiseller_version", version);
	}

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
