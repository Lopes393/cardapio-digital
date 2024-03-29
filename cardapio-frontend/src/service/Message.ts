import { Storage } from "./Storage";

export function Message(config: any, order: any) {
  let text = `Pedido de ${config.name}: \n`;

  for (let product of order) {
    text += `1 ${product.name} de ${formatMoeda(product.value)}\n`;

    if (product.item !== undefined && product.item.length > 0) {
      text += `com adicionais: `;
      for (let additional of product.item) {
        text += ` ${additional.qt_item}x ${additional.name} de ${formatMoeda(
          additional.value
        )}, `;
      }
      text = text.replace(/,\s*$/, "");
    }

    text += "\n";
  }

  if (config.isDelivery === "delivery") {
    text += `\nPara entrega, endereço: ${config.address}`;
  } else {
    text += "\nVou retirar no local ";
  }

  if (config.isCard === "card") {
    text += `\nO pagamento é no cartão`;
  } else {
    text += `\nO pagamento é no dinheiro `;

    if (config.thing) {
      text += `\nTroco: ${config.thing}\n`;
    } else {
      text += `sem troco\n`;
    }
  }

  if (config.cupom) {
    text += `\nCupom: ${config.cupom}\n`;
  }

  let phone = Storage("phone");

  if (!phone) {
    if (
      window.confirm(
        "Precisamos atualizar o cardapio! \n Você não perderá seu pedido"
      )
    ) {
      window.location.href = `https://api.whatsapp.com/send?phone=5564999187173&text=${window.encodeURIComponent(
        text
      )}`;
    }

    return;
  }

  Storage('order', false, false, true);

  window.location.href = `https://api.whatsapp.com/send?phone=55${phone}&text=${window.encodeURIComponent(
    text
  )}`;
}

function formatMoeda(value: any) {
  return parseFloat(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
