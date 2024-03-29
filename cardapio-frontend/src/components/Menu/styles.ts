import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  button {
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 50%;
  }
`;

export const BoxListMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 0.5rem;
`;

export const BoxListOrder = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const BoxButtom = styled.div`
  position: fixed;
  bottom: 0;
  height: 70px;
  width: 100%;
  background-color: #7c1519;
  display: flex;
  flex-direction: row;

  div {
    width: 50%;
    flex: 1;
    padding: 1em 5.5em;

    img {
      width: 40px;
      transition: transform 0.2s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

`;

export const BoxMenu = styled.div`
  padding: 3em 4em;
  background-color: #7c1519;
  color: #fff;
  margin-bottom: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 3px 3px 5px #777;
  border-radius: 5px;

  img {
    width: 50px;
    margin-right: 10px;
  }

  &:active {
    background-color: #360707;
    box-shadow: none;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  &:last-child {
    margin-bottom: 6rem;
  }

  &:first-child {
    margin-top: 6rem;
  }
`;
