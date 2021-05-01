import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 100vw;
`;

export const BtnClose = styled.div`
    display:flex;
    flex-direction: column;
    width: 90%;
    margin-left: 5%;

    img {
        width: 20px;
        position: absolute;
        top: 0;
        right: 0;
        margin: 10px 10px;
    }
`;
export const ContentHeader = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    margin-bottom: 20px;

    strong {
        font-size: 1.2rem;
    }

    p {
        font-size: .7rem;
    }
`;
export const Title = styled.strong`
    margin: 7%;
`;
export const Content = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    div {
        margin-top: 10px;
        margin-bottom: 20px;
        button {
            padding: 10px;
            border: none;
            border: 1px solid #aaa;
            border-radius: 5px;
            &:first-child {
                margin-right: 30px;
            }

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.85);
            }
        }
    }
    input {
        width: 100%;
        background-color: #fff;
        padding: 10px;
        border: none;
        border: 1px solid #aaa;
        border-radius: 5px;
        margin: 20px 0px;
    }

    .active {
        background-color: #28a265 !important;
        color: #fff;
        border: none;
    }
    
    p {
        font-size: .8rem;
        align-items: left;
        width: 100%;
        margin-top: -10px;
    }

`;

export const ContentAction = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-top: 10%;
    
    button:first-child {
        margin-right: 15%;
        margin-left: 5%;
        background-color: #fff;
    }

    button:last-child {
        background-color: #28a265;
        color: #fff;
    }

    button {
        padding: 10px 30px;
        box-shadow: none;
        border-radius: 5px;
        border: none;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.85);
        }
    }


`;

export const ContentTotal = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    width: 90%;
    margin-top: 10%;
`;

