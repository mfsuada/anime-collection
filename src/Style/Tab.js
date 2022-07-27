import styled from "@emotion/styled";
import { ACTIVE, TAB, WHITE } from "../enum/colour";

export const Tab = styled.div`
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: ${TAB};
    margin-bottom: 10px;

    & button {
        background-color: inherit;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
        font-size: 17px;

        &.active {
            background-color: ${ACTIVE};
            color: ${WHITE}
        }
    }
`