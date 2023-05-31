import PropTypes from 'prop-types'
import s from './SearchPage.module.css';
import { getApiData } from '@utils/network'
import { API_SEARCH } from '@constants/api'
import { WithErrorApi } from '@hoc/WithErrorApi'
import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { getPeopleId, getPeopleImg } from '@services/getPeopleData'
import SearchPageInfo from '@components/SearchPage/SearchPageInfo'
import UiInput from '@ui/UiInput'


const SearchPage = ({ setErrorApi }) => {

    const [inputSearchValue, setInputSearchValue] = useState('')
    const [people, setPeople] = useState([])

    const getResponse = async param => {
        const res = await getApiData(API_SEARCH + param)
        if (res) {
            console.log('res - ', res);
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url)
                const img = getPeopleImg(id)
                return {
                    id,
                    name,
                    img
                }

            })
            setPeople(peopleList);

            setErrorApi(false)
        } else {
            setErrorApi(true)
        }

    } 

    useEffect(() => {
        getResponse('')
    },[])

    const debouncedGetResponse = useCallback(
        debounce(value => getResponse(value), 300),
        []
    )

    const handleInputChange = value => {
        setInputSearchValue(value)
        debouncedGetResponse(value)
    }

    return (
        <div>
            <h1 className='header__text'>Search</h1>
            
            <UiInput
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder="Input character's name"
                classes={s.input__search}
            />

            <SearchPageInfo people={people}/>
        </div>
    )
}




SearchPage.propTypes = {
    setErrorApi: PropTypes.func
}


export default WithErrorApi(SearchPage);