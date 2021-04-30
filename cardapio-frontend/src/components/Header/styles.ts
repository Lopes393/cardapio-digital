import styled from "styled-components";

export const Container = styled.main`
    position:fixed;
    width: 100%;
    margin: 0 auto;
    padding: .5rem 1rem;
    display: flex;
    flex-direction: row;
    background-color: #6959CD;
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
        margin-left:30%;
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