export const setPage = (page) => {
    return localStorage.setItem('page', page)
}

export const getPage = () => {
    return localStorage.getItem('page')
}