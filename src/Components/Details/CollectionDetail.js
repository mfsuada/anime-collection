import React, { Fragment } from "react";
import { descriptionSlice, titleSlice } from "../../helper/manipulation";
import { getCollectionDetail, getCollectionNames, getCollectionsItemsByName } from "../../store/Collection";
import { Grow1 } from "../../Style/Body";
import { Action, Button } from "../../Style/Button";
import { Card, DetailCard } from "../../Style/Card";
import { Container } from "../../Style/Container";
import { Description } from "../../Style/Description";
import { Img } from "../../Style/Img";

const CollectionDetail = ({ backToCollectionDetails, goToAnimeDetails }) => {
    const detail = getCollectionDetail();
    const collectionItem = getCollectionsItemsByName(detail);

    return (
        <Fragment>
            <Action>
                <Grow1>
                    <Button onClick={() => backToCollectionDetails()}>Back</Button>
                </Grow1>
            </Action>
            <DetailCard>
                <title>{detail}</title>
                <Container>
                    {collectionItem.map((item, key) => {
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
                                            key < 7 && <span key={`${key} - ${item.id}`} className="clicked">#{item.collection} </span>
                                        ))}
                                    </sub>
                                    <div className="action">
                                        <span className="details" onClick={() => {
                                            goToAnimeDetails(item);
                                        }}>Goto Details</span>
                                    </div>
                                </Description>
                            </Card>
                        )
                    })}
                </Container>    
            </DetailCard>
        </Fragment>
    )
}

export default CollectionDetail;