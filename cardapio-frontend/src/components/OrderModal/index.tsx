import { useEffect, useState } from "react";
import {
  BtnClose,
  Container,
  ContentHeader,
  Content,
  ContentAction,
  ContentTotal,
  Title,
} from "./styles";
import cancel from "./../../assets/img/icons/cancel.svg";
import Modal from "react-modal";
import { Storage } from "../../service/Storage";
import { Message } from "../../service/Message";

export function OrderModal({
  status,
  product,
  setOpenModalOrder,
  setTelaGeral,
}: any) {
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [totalDelivery, setTotalDelivery] = useState<number>(0);

  const [isCard, setIsCard] = useState<string>("money");
  const [isDelivery, setIsDelivery] = useState<string>("");

  const [thing, setThing] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [cupom, setCupom] = useState<string>("");

  useEffect(() => {
    calcularTotal();
    getInfoLocal();
  }, [status]);

  function getInfoLocal() {
    let adress = Storage("address");
    let thing = Storage("thing");
    let name = Storage("name");

    if (adress) {
      setAddress(adress);
    }

    if (thing) {
      setThing(thing);
    }

    if (name) {
      setName(name);
    }
  }

  function setOpenModalProductAction(status: boolean) {
    setOpenModalOrder(status);
  }

  function sendOrder() {
    const config: any = {
      address,
      thing,
      isCard,
      isDelivery,
      totalDelivery,
      totalProducts,
      name,
      cupom,
    };
    Storage("config", config, true);
    Storage("address", address, true);
    Storage("thing", thing, true);
    Storage("name", name, true);
    Storage("cupom", cupom, true);

    Message(config, Storage("order"));
  }

  function calcularTotal() {
    let order = Storage("order");
    let totalDelivery = parseFloat(Storage("delivery"));
    let totalProduct = 0;
    if (order) {
      for (let productInOrder of order) {
        totalProduct += parseFloat(productInOrder.value);

        for (let additional of productInOrder.item) {
          totalProduct += parseFloat(additional.value);
        }
      }

      setTotalProducts(totalProduct);
      setTotalDelivery(totalDelivery);
    }
  }

  function nameChange(event: any) {
    setName(event.target.value);
  }
  function cupomChange(event: any) {
    setCupom(event.target.value);
  }

  function thingChange(event: any) {
    setThing(event.target.value);
  }

  function addressChange(event: any) {
    setAddress(event.target.value);
  }

  return (
    <Container>
      <Modal
        isOpen={status}
        onRequestClose={() => setOpenModalProductAction(false)}
        overlayClassName="react-modal-overlay"
        ariaHideApp={false}
        className="react-modal-content"
      >
        <BtnClose>
          <img
            src={cancel}
            alt=""
            onClick={() => setOpenModalProductAction(false)}
          />
        </BtnClose>

        <ContentHeader>
          <strong>Informações de entrega e pagamento</strong>
        </ContentHeader>

        <Content>
          <input
            type="text"
            placeholder="Qual seu nome?"
            value={name}
            onChange={nameChange}
          />
          <div>
            {isCard === "card" ? (
              <button className="active" onClick={() => setIsCard("card")}>
                Cartão
              </button>
            ) : (
              <button onClick={() => setIsCard("card")}>Cartão</button>
            )}
            {isCard === "money" ? (
              <button className="active" onClick={() => setIsCard("money")}>
                Dinheiro
              </button>
            ) : (
              <button onClick={() => setIsCard("money")}>Dinheiro</button>
            )}
          </div>

          {isCard === "money" ? (
            <>
              <input
                type="text"
                placeholder="precisa de troco?"
                value={thing}
                onChange={thingChange}
              />
              <p>Ex: troco pra 50 ou não</p>
            </>
          ) : (
            ""
          )}

          {thing !== "" || isCard == "card" ? (
            <div>
              {isDelivery === "delivery" ? (
                <button
                  className="active"
                  onClick={() => setIsDelivery("delivery")}
                >
                  Entregar
                </button>
              ) : (
                <button onClick={() => setIsDelivery("delivery")}>
                  Entregar
                </button>
              )}
              {isDelivery === "goway" ? (
                <button
                  className="active"
                  onClick={() => setIsDelivery("goway")}
                >
                  Vou buscar
                </button>
              ) : (
                <button onClick={() => setIsDelivery("goway")}>
                  Vou buscar
                </button>
              )}
            </div>
          ) : (
            ""
          )}

          {isDelivery === "delivery" ? (
            <>
              <input
                type="text"
                placeholder="Qual o seu endereço?"
                value={address}
                onChange={addressChange}
              />
              <p>Ex: Rua M19 setor Central n° 14</p>
            </>
          ) : (
            ""
          )}
          <input
            type="text"
            placeholder="Cupom"
            value={cupom}
            onChange={cupomChange}
          />
        </Content>

        <ContentTotal>
          <strong>
            Produtos:{" "}
            {totalProducts.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
          {isDelivery === "delivery" ? (
            <strong>
              Frete:{" "}
              {totalDelivery.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          ) : (
            ""
          )}
          <strong>
            Total:{" "}
            {(
              totalProducts + (isDelivery === "delivery" ? totalDelivery : 0)
            ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </strong>
        </ContentTotal>

        <ContentAction>
          <button onClick={() => setOpenModalProductAction(false)}>
            Voltar
          </button>
          <button onClick={() => sendOrder()}>Enviar</button>
        </ContentAction>
      </Modal>
    </Container>
  );
}
