import React, { Fragment, useState } from "react";
import { containSpecialChar } from "../../helper/manipulation";
import { getDetailAnime } from "../../store/Anime";
import { getCollectionNames, saveSingleCollections } from "../../store/Collection";
import { Grow1 } from "../../Style/Body";
import { Action, Button, ButtonSingleCollection } from "../../Style/Button";
import { DetailCard } from "../../Style/Card";
import SingleAddCollection from "../Modal/SingleAddCollection";

const AnimeDetail = ({ backToAnimeList, goToCollectionDetails }) => {
    const detail = getDetailAnime();
    const [collection, setCollection] = useState(getCollectionNames(detail.id));
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    const submit = (collectionName) => {
        if (collectionName !== "") {
            if (containSpecialChar(collectionName)) {
                setError("Collection name cannot be special characters")
            } else {
                saveSingleCollections(collectionName);
                setShow(false);
                setCollection(getCollectionNames(detail.id));
            }
        } else {
            setError("Collection name cannot be empty")
        }
    }


    return (
        <Fragment>
            <Action>
                <Grow1>
                    <Button onClick={() => backToAnimeList()}>Back</Button>
                </Grow1>
            </Action>
            <DetailCard>
                <title>{detail.title.romaji}</title>
                <div className="description">
                    <picture>
                        <img src={detail.coverImage.extraLarge} alt={detail.title.romaji} />
                    </picture>
                    <div className="detail">
                        <title>Description :</title>
                        {detail.description}
                        <br />
                        <br />
                        <title>Collections :</title>
                        {collection.map((item) => {
                            return (<div key={item.collection} className="clicked" onClick={() => {
                                goToCollectionDetails(item.collection)
                            }}>#{item.collection}</div>)
                        })}

                        <ButtonSingleCollection onClick={() => { setShow(true) }}>Add to collections</ButtonSingleCollection>
                    </div>
                </div>
            </DetailCard>
            <SingleAddCollection show={show} item={detail} submit={submit} onClose={() => setShow(false)} error={error} />
        </Fragment>
    )
}

export default AnimeDetail;