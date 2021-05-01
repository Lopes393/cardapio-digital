import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 100vw;
`;

export const BoxProductList = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 90px;
    margin-left: 5%;
    width: 90%;
    margin-bottom: 90px;

`;

export const BoxProduct = styled.div`
    padding: 1.5rem .5rem 1.5rem 1.5rem;
    width: 100%;
    background-color: #ededed;
    /* color: #fff; */
    margin-bottom: 15px;
    display:flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    box-shadow: 1px 1px 5px #aaa ;
    border-radius: 4px;
    /* border: 1px solid #7C1519d1; */
    border-bottom: 10px solid #7C1519d1;

    img {
        width: 40px;
        margin-right: 5%;

    }
    div {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 0px;
        width: 80%;

        strong {
            text-align: center;
        }

        p {
            text-align: center;
            font-size: .7rem;
        }
    }
    pre {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1.5% 1% 1% 1%;
        font-size: 1.1rem;
        /* border-bottom: 2px solid #61380B;
        border-top: 2px solid #61380B; */
        border-radius: 15px;
        margin-left: 5px;
    }

    &:active {
        background-color: #7C151951;
        box-shadow: none;
    }

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.85);
    }

`;
