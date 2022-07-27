import styled from "@emotion/styled";

export const Description = styled.div`
    padding: 10px 8px 10px 2px;
    display: flex;
    flex-direction: column;

    & sub {
        font-size: 10px;
        flex-grow: 1;
    }
    & span.clicked {
        &:hover {
            color: blue;
        }
    }
    & div.clicked {
        &:hover {
            color: blue;
        }
    }
    & div.action {
        display: flex;
        font-size: 10px;
        align-items: center;

        & span {
            flex-grow: 1;
        }

        & div {
            display: flex;
            align-items: center;
        }
    }

    & span.details {
        &:hover {
            color: blue;
        }
    }

    @media (max-width: 768px) {
        height: 160px;
    }
`