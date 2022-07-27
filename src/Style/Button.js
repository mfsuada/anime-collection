import styled from "@emotion/styled";
import { ACTIVE, WHITE } from "../enum/colour";

export const Button = styled.button`
    margin-left: 10px;
    margin-right: 10px;
    width: 200px;
    height: 50px;
    background-color: ${ACTIVE};
    color: ${WHITE};
    font-size: 14px;
    border: none;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
    }

    margin-bottom: 10px;
`;

export const Action = styled.div`
    display: flex;
`

export const ButtonSave = styled.button`
    margin-top: 10px;
    margin-right: 10px;
    width: 100%;
    height: 40px;
    background-color: ${ACTIVE};
    color: ${WHITE};
    font-size: 14px;
    border: none;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
    }

    margin-bottom: 10px;
`;

export const ButtonSingleCollection = styled.button`
    margin-top: 10px;
    margin-right: 10px;
    width: 100%;
    height: 40px;
    background-color: ${ACTIVE};
    color: ${WHITE};
    font-size: 14px;
    border: none;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
    }

    margin-bottom: 10px;
`