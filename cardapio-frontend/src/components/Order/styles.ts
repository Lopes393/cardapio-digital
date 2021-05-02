import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;

    button {
        position:fixed;
        bottom: 0;
        height:50px;
        width: 50%;
    }
`;

export const BoxHeaderOrder = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    width: 100%;
    
`;

export const BoxTotalOrder = styled.div`
    /* position: absolute;
    bottom: 20%; */
    display:flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    width: 90%;
    margin-left: 5%;

    strong {
        padding: 1.5rem;
        width: 100%;
        margin-bottom: 10px;
    }
    button {
        margin-bottom: 90px;
        position: static;
        background-color: #28a265;
        border-radius: 10px;
        border: none;
        /* box-shadow: 1px 1px 3px #333; */
        color: white;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
    
`;

export const BoxListOrder = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    margin-top: 90px;
    /* margin-bottom: 90px; */

    ul {
        margin-left: 5%;
        

        li {
            list-style-type: none;
            width: 90%;
            margin-bottom: 20px;
            display: flex;

            hr {
                margin-right: 10px;
            }
            div {

                p {
                    font-size: .8rem;
                }

                span {
                    font-size: .8rem;
                    /* color: white; */
                    padding: .1rem .3rem;
                    border-radius: 10px;
                    background-color: #ebad56;
                    margin-right: 4px;
                }
            }

            div:last-child {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin-left: 20px;
            }

        }
    }

`;

export const BtnClose = styled.div`
    position: absolute;
    right: 0;

    img {
        width: 13px;
        position: absolute;
        top: 0;
        right: 0;
        margin: 0px 20px;


        &:hover {
            width: 16px;
        }
    }
`;
