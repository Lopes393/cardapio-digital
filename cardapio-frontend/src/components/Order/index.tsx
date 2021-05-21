import { useEffect, useState } from "react";
import { api } from "../../service/api";

import {
  Container,
  BoxListOrder,
  BoxHeaderOrder,
  BoxTotalOrder,
  BtnClose,
} from "./styles";
import { Storage } from "../../service/Storage";
import { OrderModal } from "../OrderModal";
import remove from "./../../assets/img/icons/remove.svg";
import { OrderClear } from "../OrderClear";
import { Header } from "../Header/index";
export function Order() {
  const [order, setOrder] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [openModalOrder, setOpenModalOrder] = useState<boolean>(false);
  const [user, setUser] = useState<any[]>([]);

  useEffect(() => {
    getOrder();
  }, []);

  function calcularOrder(order: any) {
    let total = 0;

    for (let product of order) {
      total += parseFloat(product.value);

      for (let item of product.item) {
        total += parseFloat(item.value);
      }
    }

    setTotal(total);
  }

  function getOrder() {
    let order = Storage("order");

    if (!order) {
      order = [];
    }

    setOrder(order);
    calcularOrder(order);
  }

  function openModalFinalizar() {
    setOpenModalOrder(true);
    getUser();
  }
  function getUser() {
    const arUrlPath = window.location.pathname.split("/");

    if (arUrlPath.length > 1) {
      const bussinesKey = arUrlPath[1];
      api.get(`user/${bussinesKey}`).then((response) => setUser(response.data));
    }
  }
  function getTotalProduct({ item, value }: any) {
    console.log(item);
    let totalProduct = parseFloat(value);

    for (let additional of item) {
      totalProduct += parseFloat(additional.value);
    }

    return totalProduct.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function removeItem(item: any) {
    const copyOrder = order;
    copyOrder.splice(copyOrder.indexOf(item), 1);
    setOrder(copyOrder);
    Storage("order", copyOrder);
    calcularOrder(copyOrder);
  }

  return (
    <Container>
      <OrderModal
        status={openModalOrder}
        setOpenModalOrder={setOpenModalOrder}
        user={user}
      />
      <BoxListOrder>
        <BoxHeaderOrder>
          {total > 0 ? <strong>Itens do Pedido</strong> : <OrderClear />}
        </BoxHeaderOrder>
        <ul>
          {order.map((item) => (
            <li key={item.id}>
              <BtnClose>
                <img src={remove} alt="" onClick={() => removeItem(item)} />
              </BtnClose>
              <hr />
              <div>
                <strong>{item?.name}</strong>
                <p>{item?.description}</p>
                {item.item.map((additional: any) => (
                  <span>
                    {additional.qt_item}x {additional.name}
                  </span>
                ))}
              </div>
              <div>{getTotalProduct(item)}</div>
            </li>
          ))}
        </ul>
      </BoxListOrder>
      <BoxTotalOrder>
        {order.length > 0 ? (
          <>
            <strong>
              Total:{" "}
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
            <button onClick={() => openModalFinalizar()}>
              Finalizar Pedido
            </button>
          </>
        ) : (
          ""
        )}
      </BoxTotalOrder>
    </Container>
  );
}
