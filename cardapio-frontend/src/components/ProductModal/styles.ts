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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;

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
    width: 90%;

    div {
        padding: .5rem;
        div {
            display:flex;
            flex-direction: row;
            justify-content: center;
            align-items: left;

            strong , p {
                margin-right: 10%;
            }

            img {
                width: 20px;
                margin-right: 10%;

                &:active {
                    width: 25px;
                }

                transition: filter 0.2s;

                &:hover {
                    filter: brightness(0.85);
                }
            }
        }
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
        margin-right: 5%;
        margin-left: 5%;
        background-color: #fff;
    }

    button:last-child {
        background-color: green;
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
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-top: 10%;
`;

