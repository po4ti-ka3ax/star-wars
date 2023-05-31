import {
    GUIDE_IMG_EXTENSION, URL_IMG_PERSON,
    SWAPI_PEOPLE, HTTP, HTTPS, SWAPI_URL,
    SWAPI_PARAM_PAGE
} from "@constants/api"

const checkProtocol = url => {
    if (url.indexOf(HTTPS) !== -1) {
        return HTTPS
    }
    return HTTP
}

export const getPeoplePageId = url => {
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE)
    const id = url.slice(pos+SWAPI_PARAM_PAGE.length, url.length)
    return Number(id)
}

const getId = (url, category) => {
    const protocol = checkProtocol(url)
    const id = url
        .replace(protocol + SWAPI_URL + category, '')
        .replace(/\//g, '')

    return id
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE)

export const getPeopleImg = id => `${URL_IMG_PERSON}${id + GUIDE_IMG_EXTENSION}`