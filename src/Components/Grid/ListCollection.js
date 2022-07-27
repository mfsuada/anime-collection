import React, { Fragment, useEffect, useState } from "react";
import { getBannerCollections, getCollections, getCollectionsItemsByName, removeCollection } from "../../store/Collection";
import { Card } from "../../Style/Card";
import { Container } from "../../Style/Container";
import { Description } from "../../Style/Description";
import { Img } from "../../Style/Img";

const ListCollection = ({goToAnimeDetails, goToCollectionDetails}) => {
    const [collections, setCollections] = useState(getCollections());
    const [refresh, setRefresh] = useState(false);

    const deleteCollection = (item) => {
        removeCollection(item);
        setRefresh(true);
        setCollections(getCollections());
    }

    useEffect(() => {
        setRefresh(false);
    }, [refresh])
    
    return (
        <Fragment>
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
        </Fragment>
    )
}

export default ListCollection;