import {HTTP, HTTPS} from '@constants/api'

/**
 * Меняет URL с HTTP на HTTPS
 * @param {string} url - url для изменения  
 * @returns {string} - url с HTTPS
 */
export const changeHTTP = (url) => {
    const result = url ? url.replace(HTTP, HTTPS) : url
    return result
}

/**
 * отправляет запрос fetch
 * @param {string} url - url для запроса
 * @returns - promise с результатом запроса
 */

export const getApiData = async (url) => {

    try {
        const res = await fetch(url)
        if (!res.ok) {
            console.error("Could't fetch - ", res.status)
            return false
        }

        return await res.json()

    } catch (error) {
        console.error("Could't fetch - ", error.message)
        return false
    }

}

export const makeConcurrentRequest = async (url) => {
    const res = await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json())
    }))
    return res
} 

// getApiData(SWAPI_URL + SWAPI_PEOPLE)
//     .then(body => console.log(body))

    // (async () => {
    //     const body = await getApiData(SWAPI_URL + SWAPI_PEOPLE)
    //     console.log(body);

    // })()

