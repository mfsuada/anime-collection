import styled from "@emotion/styled";

export const Modal = styled.div`
    display: ${props => (props.show ? 'flex' : 'none')};
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);

    & div.content {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 30%;

        span.close {
            color: #aaaaaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;

            &:hover {
                cursor: pointer;
            }
        }

        @media (max-width: 768px) {
            width: 70%;
        }
    }
`