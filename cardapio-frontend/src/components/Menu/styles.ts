import styled from "styled-components";

export const Container = styled.div`
    display:flex;

    button {
        position:fixed;
        bottom: 0;
        height:50px;
        width: 50%;
    }
`;

export const BoxListMenu = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

export const BoxListOrder = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

export const BoxButtom = styled.div`
        position:fixed;
        bottom: 0;
        height:80px;
        width: 100%;
        background-color: #6959CD;
        display: flex;
        flex-direction: row;

        div {
            width: 50%;
            flex: 1;
            padding: 1em 5.5em;
        }

        img {
            width: 50px;
        }
`;

export const BoxMenu = styled.div`
    padding: 3em 4em;
    background-color: #6959CD;
    color: #fff;
    margin-bottom: 15px;
    display:flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 3px 3px 5px #777 ;
    border-radius: 5px;

    img {
        width: 50px;
        margin-right: 10px;
    }

    &:active {
        background-color: #2f2570;
        box-shadow: none;
    }

    &:hover {
        background-color: #2f2570;
    }
`;