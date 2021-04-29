import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: row;
  background-color: #6959CD;
  margin-bottom: 15px;
  color: white;
`;

export const ImgBox = styled.div`
    width: 33%;

    img {
        width: 50%;
        margin-left:25%;
    }
`;

export const UserBox = styled.div`
	margin-left: 20px;

    strong {
        font-size: 1.5em;
    }
    p {
        margin-top: 10px;
    }
`;