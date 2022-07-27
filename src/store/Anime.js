export const setDetailAnime = (animeObject) => {
    localStorage.setItem('detail-anime', JSON.stringify(animeObject));
}

export const getDetailAnime = () => {
    let detailAnime = localStorage.getItem('detail-anime');
    if (detailAnime) {
        return JSON.parse(detailAnime);
    }

    return null;
}

export const clearDetailAnime = () => {
    return localStorage.removeItem('detail-anime');
}