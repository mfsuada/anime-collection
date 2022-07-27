import { getDetailAnime } from "./Anime";

export const getCollections = () => {
    const collectionsJSON = localStorage.getItem('collections');

    if (collectionsJSON) {
        return JSON.parse(collectionsJSON);
    }

    return [];
}

export const getCollectionsItems = () => {
    const collectionsJSON = localStorage.getItem('collection-items');
    if (collectionsJSON) {
        return JSON.parse(collectionsJSON);
    }

    return [];
}

export const saveCollections = (collectionName) => {
    let collections = getCollections();
    let exist = collections.find((item) => item === collectionName);

    if (!exist) {
        collections.push(collectionName);
        saveItemCollections(collectionName);
    }

    localStorage.setItem('collections', JSON.stringify(collections));
    clearSelectedTemp();
}

export const getCollectionNames = (id) => {
    let collections = getCollectionsItems();
    collections = collections.filter((item) => item.id === id);
    if (collections.length > 0) {
        return collections;
    }

    return [];
}

export const saveSingleCollections = (collectionName) => {
    let collections = getCollections();
    let exist = collections.find((item) => item === collectionName);

    if (!exist) {
        collections.push(collectionName);
        saveSingleCollectionItems(collectionName);
    }

    localStorage.setItem('collections', JSON.stringify(collections));
}

export const saveSingleCollectionItems = (collectionName) => {
    let animeDetail = getDetailAnime();
    let collectionsItems = getCollectionsItems();
    animeDetail = [{...animeDetail, collection: collectionName}];
    collectionsItems = [...collectionsItems, ...animeDetail] 
    localStorage.setItem('collection-items', JSON.stringify(collectionsItems));
}

export const saveItemCollections = (collectionName) => {
    let selectedTemp = getSelectedTemp();
    let collectionsItems = getCollectionsItems();
    selectedTemp = selectedTemp.map((obj) => ({...obj, collection : collectionName}));
    collectionsItems = [...collectionsItems, ...selectedTemp] 
    localStorage.setItem('collection-items', JSON.stringify(collectionsItems));
    clearSelectedTemp();
}

export const clearSelectedTemp = () => {
    localStorage.removeItem('selected-temp');
}

export const getSelectedTemp = () => {
    const collectionsJSON = localStorage.getItem('selected-temp');
    if (collectionsJSON) {
        return JSON.parse(collectionsJSON);
    }

    return [];
}

export const findSelectedTemp = (id) => {
    let selectedTemp = getSelectedTemp();
    return selectedTemp.find((item) => item.id === id);
}
export const setSelectedTemp = (object) => {
    let selectedTemp = getSelectedTemp();
    selectedTemp = selectedTemp.filter((item) => item.id !== object.id);
    selectedTemp = [...selectedTemp, ...[object]];
    localStorage.setItem('selected-temp', JSON.stringify(selectedTemp));
}

export const removeSelectedTemp = (object) => {
    let selectedTemp = getSelectedTemp();
    selectedTemp = selectedTemp.filter((item) => item.id !== object.id);
    localStorage.setItem('selected-temp', JSON.stringify(selectedTemp));
}

export const getCollectionsItemsByName = (collectionName) => {
    return getCollectionsItems().filter((item) => item.collection === collectionName);
}

export const getBannerCollections = (collectionName) => {
    let banner = getCollectionsItems().find((item) => item.collection === collectionName);
    if (banner) {
        return banner.coverImage.medium;
    }

    return "";
}

export const setCollectionDetail = (name) => {
    return localStorage.setItem('collection-detail', name);
}

export const getCollectionDetail = () => {
    return localStorage.getItem('collection-detail');
}

export const clearCollectionDetail = () => {
    return localStorage.removeItem('collection-detail');
}

export const removeCollection = (name) => {
    let collection = getCollections();
    collection = collection.filter((item) => item !== name);
    let collectionsItems = getCollectionsItems().filter((item) => item.collection !== name);
    localStorage.setItem('collection-items', JSON.stringify(collectionsItems));

    return localStorage.setItem('collections', JSON.stringify(collection))
}