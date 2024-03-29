import styled from "styled-components";

export const Container = styled.main`
  position: fixed;
  width: 100%;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  display: flex;
  flex-wrap: row;
  flex-direction: row;
  background-color: #7c1519;
  margin-bottom: 15px;
  color: white;
  z-index: 15;
`;

export const ImgBox = styled.div`
  width: 33%;
  display: flex;
  flex-direction: row;
  img {
    width: 30%;
    margin-left: 30%;
  }
`;

export const UserBox = styled.div`
  margin-left: 20px;
  font-size: 1.2rem;
  p {
    margin-top: 10px;
  }
`;

export const BoxHamb = styled.div`
  z-index: 5;
  margin-top: 1px;
  margin-right: 5%;
`;
