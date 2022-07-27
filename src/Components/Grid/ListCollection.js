import React, { Fragment, useEffect, useState } from "react";
import { containSpecialChar } from "../../helper/manipulation";
import { getBannerCollections, getCollections, getCollectionsItemsByName, removeCollection, saveCollectionOnly } from "../../store/Collection";
import { Grow1 } from "../../Style/Body";
import { Action, Button } from "../../Style/Button";
import { Card } from "../../Style/Card";
import { Container } from "../../Style/Container";
import { Description } from "../../Style/Description";
import { Img } from "../../Style/Img";
import SingleAddCollection from "../Modal/SingleAddCollection";

const ListCollection = ({goToAnimeDetails, goToCollectionDetails}) => {
    const [collections, setCollections] = useState(getCollections());
    const [refresh, setRefresh] = useState(false);
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    const deleteCollection = (item) => {
        removeCollection(item);
        setRefresh(true);
        setCollections(getCollections());
    }

    useEffect(() => {
        setRefresh(false);
        setCollections(getCollections());
    }, [refresh])

    const showAdd = () => {
        setShow(true);
    }

    const submit = (collectionName) => {
        if (collectionName) {
            if (containSpecialChar(collectionName)) {
                setError("Collection name cannot be special characters")
            } else {
                saveCollectionOnly(collectionName);
                setShow(false);
                setRefresh(true);
            }
        } else {
            setError("Collection name cannot be empty")
        }
    }
    
    return (
        <Fragment>
            <Action>
                <Grow1>
                    <Button onClick={() => showAdd()}>Add collection</Button>
                </Grow1>
            </Action>
            <Container>
                {!refresh && collections.map((item, key) => {
                    return (
                        <Card key={`${item} ${key}`}>
                            {getBannerCollections(item) !== "" ? <Img src={getBannerCollections(item)} center={true} /> : <Img center={true} />}
                            <Description>
                                <span className="details" onClick={() => {
                                    goToCollectionDetails(item)
                                }}>{item}</span>
                                <sub>
                                    {getCollectionsItemsByName(item).map((list) => {
                                        return <div className="clicked" key={ item + '-' + list.title.romaji} onClick={() => goToAnimeDetails(list)}>{list.title.romaji}</div>
                                    })}
                                </sub>
                                <div className="action">
                                    <span className="details" onClick={() => {
                                        deleteCollection(item);
                                    }}>Delete</span>
                                </div>
                            </Description>
                        </Card>
                    )
                })}
            </Container>
            <SingleAddCollection show={show} submit={submit} onClose={() => setShow(false)} error={error} />
        </Fragment>
    )
}

export default ListCollection;