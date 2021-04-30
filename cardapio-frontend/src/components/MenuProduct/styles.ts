import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
`;

export const BoxProductList = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 90px;
    margin-left: 5%;
    width: 100vw;
    margin-bottom: 90px;

`;

export const BoxProduct = styled.div`
    padding: 2em 2em;
    width: 90%;
    background-color: #7C1519;
    color: #fff;
    margin-bottom: 15px;
    display:flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 3px 3px 5px #777 ;
    border-radius: 5px;

    img {
        width: 50px;
        margin-bottom: 5px;
    }

    &:active {
        background-color: #2f2570;
        box-shadow: none;
    }

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8);
    }

    p {
        font-size: .7rem;
    }
`;
