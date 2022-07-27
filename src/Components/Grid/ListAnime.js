import { useQuery } from "@apollo/client";
import React, { Fragment, useEffect, useState } from "react";
import { LOAD_LIST_ANIME } from "../../GraphQL/Queries";
import { Card } from "../../Style/Card";
import { Container } from "../../Style/Container";
import { Description } from "../../Style/Description";
import { Img } from "../../Style/Img";
import Pagination from "./Pagination";
import { descriptionSlice, titleSlice } from "../../helper/manipulation";
import AddCollection from "../Modal/AddCollection";
import { Action, Button } from "../../Style/Button";
import { clearSelectedTemp, findSelectedTemp, getCollectionNames, getSelectedTemp, removeSelectedTemp, setSelectedTemp } from "../../store/Collection";
import { Grow1 } from "../../Style/Body";
import { Alert } from "../../Style/Alert";

const ListAnime = ({goToDetails, goToCollectionDetails}) => {
    const [listAnime, setListAnime] = useState([])
    const [page, setPage] = useState(parseInt(localStorage.getItem('paginate-anime') || '1'))
    const [show, setShow] = useState(false);
    const [err, setErr] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [total, setTotal] = useState(1)
    const { data, refetch } = useQuery(LOAD_LIST_ANIME, {
        variables: {
            page: page,
            perPage: 10
        }
    });

    useEffect(() => {
        if (data) {
            setListAnime(data.Page.media);
            setTotal(data.Page.pageInfo.lastPage);
        }
    }, [data])

    const paginate = (number) => {
        setPage(number);
        refetch();
        localStorage.setItem('paginate-anime', number);
    }

    const showAdd = () => {
        const selected = getSelectedTemp();
        if (selected.length > 0) {
            setShow(true);
        } else {
            setErr(true)
        }
    }

    useEffect(() => {
        setRefresh(false);
    }, [refresh])

    return (
        <Fragment>
            {err && (
                <Alert>
                    <strong>Danger!</strong> Select at least one anime to continue.
                </Alert>
            )}
            <Action>
                <Grow1>
                    <Button onClick={() => showAdd()}>Add selection to collections</Button>
                </Grow1>
                <Button onClick={() => {
                    clearSelectedTemp();
                    setRefresh(true);
                }}>Clear selection</Button>
            </Action>
            <Container>
                {!refresh && listAnime.map((item, key) => {
                    return (
                        <Card key={key}>
                            <Img src={item.coverImage.medium} center={true}></Img>
                            <Description>
                                {titleSlice(item.title.romaji)}
                                <sub>
                                    {descriptionSlice(item.description)}
                                    <br />
                                    <br />
                                    {getCollectionNames(item.id).map((item, key) => (
                                        key < 7 && <span key={`${key} - ${item.id}`} className="clicked" onClick={() => goToCollectionDetails(item.collection)}>#{item.collection} </span>
                                    ))}
                                </sub>
                                <div className="action">
                                    <span className="details" onClick={() => {
                                        goToDetails(item);
                                    }}>Goto Details</span>
                                    <div>
                                        <input type="checkbox" id="select" name="select" onChange={(e) => {
                                            setErr(false);
                                            if (e.target.checked) {
                                                setSelectedTemp(item)
                                            } else {
                                                removeSelectedTemp(item);
                                                setRefresh(true);
                                            }
                                        }} checked={findSelectedTemp(item.id)}/>
                                        <label htmlFor="select">Select</label>
                                    </div>
                                </div>
                            </Description>
                        </Card>
                    )
                })}
                <Pagination paginate={paginate.bind(this)} page={page} total={total} />
            </Container>
            <AddCollection show={show} onClose={() => {
                setShow(false);
                setRefresh(true)
            }} />
        </Fragment>
    )
}

export default ListAnime;