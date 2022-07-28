import styled from "@emotion/styled";

export const Card = styled.div`
    flex-basis: 20%;
    display:flex;
    height: 200px;
    border-radius: 10px;
    
    &:hover {
        cursor: pointer;
        box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem rgb(0 0 0 / 30%) !important;
    }

    @media (max-width: 768px) {
        flex-basis: 100%;
        display:flex;
        height: 200px;
        margin: 10px;
    }
`

export const DetailCard = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    & title {
        display: block;
        font-size: 28px;
        text-decoration: underline;
        font-weight: bold;
        margin-bottom: 50px;
    }

    & div.description {
        display: flex;
        flex-direction: row;
        & picture {
            margin-right : 10px;
        }

        & div.detail {
            & title {
                margin-bottom : 10px;
                font-size: 20px;
            }
            text-align: justify;
            text-justify: wrap;

            & div.clicked {
                &:hover {
                    color: blue;
                    cursor: pointer;
                }
            }
        }

        @media (max-width: 768px) {
            flex-direction: column;

            & img {
                width : 100%;
            }
        }
    }
`