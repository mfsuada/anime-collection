export const descriptionSlice = (string) => {
    if (string.length > 200) {
        return string.slice(0, 200) + '...';
    }

    return string;
}

export const titleSlice = (string) => {
    if (string.length > 20) {
        return string.slice(0, 20) + '...';
    }

    return string;
}

export const containSpecialChar = (string) => {
    // eslint-disable-next-line
    const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    return specialChar.test(string);
}