import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const BoxHamb = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:first-child {
    margin-top: 3.75rem;
  }

  div {
    width: 12.5rem !important;
    height: 12.5rem !important;
  }
`;
