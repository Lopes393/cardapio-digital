import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { Container, ImgBox, UserBox, BoxHamb } from "./styles";
import animationData from "./../../assets/lotties/atendente.json";
import Lottie from "react-lottie";
import { Storage } from "../../service/Storage";

export function Header() {
  const [user, setUser] = useState<any>({});
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    getUser();
  }, []);

  function formatPhone(phone: string) {
    if (phone) {
      let phoneFormated: string = "(";
      phoneFormated += phone.substring(0, 2) + ") ";
      phoneFormated += phone.substring(2, 7) + " - ";
      phoneFormated += phone.substring(7);
      return phoneFormated;
    }
  }

  function setUserAndPhone(dados: any) {
    setUser(dados);
    Storage("phone", dados.phone);
  }

  function getUser() {
    const arUrlPath = window.location.pathname.split("/");

    if (arUrlPath.length > 1) {
      const bussinesKey = arUrlPath[1];
      api
        .get(`user/${bussinesKey}`)
        .then((response) => setUserAndPhone(response.data));
    }
  }

  return (
    <Container>
      <BoxHamb>
        <Lottie options={defaultOptions} height={60} width={60} />
      </BoxHamb>

      <UserBox>
        <strong>{user?.bussines}</strong>
        <p>{formatPhone(user?.phone)}</p>
      </UserBox>
    </Container>
  );
}
