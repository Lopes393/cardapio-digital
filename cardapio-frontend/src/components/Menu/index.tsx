import { useEffect, useState } from "react";
import { api } from "../../service/api";
import {
  BoxButtom,
  BoxListMenu,
  Container,
  BoxMenu,
} from "./styles";
import menu from "./../../assets/img/icons/menu.svg";
import btnMenu from "./../../assets/img/icons/btnMenu.png";
import btnMenuOpen from "./../../assets/img/icons/menuOpen.png";
import btnPedido from "./../../assets/img/icons/btnPedido.png";
import { MenuProduct } from "../MenuProduct";
import { Order } from "../Order";
import { Storage } from "../../service/Storage";

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
    Storage('delivery', menus[0].value_delivery);
    setMenus(menus);
  }

  function viewMenuById(menu: any) {
    setTelaMenu("menuItem");
    Storage('delivery', menu.value_delivery);
    setIdMenu(menu.id);
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
                  viewMenuById(item);
                  
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
          <img src={telaMenu === "menuItem" ? btnMenuOpen : btnMenu} alt="" />
        </div>
        <div onClick={() => setTelaGeral("order")}>
          <img src={btnPedido} alt="" />
        </div>
      </BoxButtom>
    </Container>
  );
}
