import { useEffect, useState } from "react";
import { api } from "../../service/api";
import {
  BoxButtom,
  BoxListMenu,
  Container,
  BoxMenu,
  BoxListOrder
} from "./styles";
import menu from "./../../assets/img/icons/menu.png";
import btnMenu from "./../../assets/img/icons/btnMenu.png";
import btnMenuOpen from "./../../assets/img/icons/menuOpen.png";
import btnPedido from "./../../assets/img/icons/btnPedido.png";
import { MenuProduct } from "../MenuProduct";
import { Order } from "../Order";

export function Menu() {
  const [menus, setMenus] = useState<any[]>([]);
  const [telageral, setTelaGeral] = useState<string>("menu");
  const [telaMenu, setTelaMenu] = useState<string>("menu");
  const [idMenu, setIdMenu] = useState<number>(0);

  useEffect(() => {
    getMenus();
  }, []);

  function alterTela() {
    if (telageral === "menu") {
      setTelaMenu("menu");
    } else {
      setTelaGeral("menu");
    }
  }

  function prepareMenu(menus: any[]) {
    if (menus.length === 1) {
      setIdMenu(menus[0].id);
      setTelaMenu("menuItem");
    }
    setMenus(menus);
  }

  function viewMenuById(idMenu: number) {
    setTelaMenu("menuItem");
    setIdMenu(idMenu);
  }

  function getMenus() {
    const arUrlPath = window.location.pathname.split("/");

    if (arUrlPath.length > 1) {
      const bussinesKey = arUrlPath[1];
      if (window.location.pathname) {
        api
          .get(`menu/${bussinesKey}`)
          .then((response) => prepareMenu(response.data));
      }
    }
  }

  return (
    <Container>
      {telageral === "order" ? (
        <Order />
      ) : (
        <BoxListMenu>
          {telaMenu === "menu" ? (
            menus.map((item) => (
              <BoxMenu
                key={item.id}
                onClick={() => {
                  viewMenuById(item.id);
                  setTelaMenu("product");
                }}
              >
                <img src={menu} alt="" />
                <strong>{item.description}</strong>
              </BoxMenu>
            ))
          ) : (
            <MenuProduct idMenu={idMenu} setTelaGeral={setTelaGeral} />
          )}
        </BoxListMenu>
      )}
      <BoxButtom>
        <div onClick={alterTela}>
          <img src={telaMenu === "product" ? btnMenuOpen : btnMenu} alt="" />
        </div>
        <div onClick={() => setTelaGeral("order")}>
          <img src={btnPedido} alt="" />
        </div>
      </BoxButtom>
    </Container>
  );
}
