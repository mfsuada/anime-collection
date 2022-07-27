import styled from "@emotion/styled";
import { ACTIVE, SECONDARY, WHITE } from "../enum/colour";

export const Page = styled.div`
    display: inline-block;
    margin: auto;
    margin-bottom: 50px;
    margin-top: 50px;
    span {
        color: black;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
        border: 1px solid ${SECONDARY};
        &:hover {
            cursor: pointer;
            background-color: ${ACTIVE};
            color: ${WHITE};
        }
        &.active {
            background-color: ${ACTIVE};
            color: ${WHITE};
        }
    }
`