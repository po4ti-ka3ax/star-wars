import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'


import { WithErrorApi } from '@hoc/WithErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNav from '@components/PeoplePage/PeopleNav';
import { getApiData, changeHTTP } from '@utils/network';

import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImg, getPeoplePageId } from '@services/getPeopleData';
import { useQueryParams } from '@hooks/useQueryParams'

import s from './PeoplePage.module.css';


const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null)
    const [nextPage, setNextPage] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [counterPage, setCounterPage] = useState(1)

    const query = useQueryParams()
    const queryPage = query.get('page')

    const getData = async (url) => {
        const res = await getApiData(url)


        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url)
                const img = getPeopleImg(id)
                return {
                    id,
                    name,
                    img
                }
            })
            setPeople(peopleList)
            setNextPage(changeHTTP(res.next))
            setPrevPage(changeHTTP(res.previous))
            setCounterPage(getPeoplePageId(url))
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }


    }

    useEffect(() => {
        getData(API_PEOPLE + queryPage)
    }, [])
    return (
        <div>
            <PeopleNav 
                getData={getData}
                nextPage={nextPage} 
                prevPage={prevPage}
                counterPage={counterPage}/>
            {people && <PeopleList people={people} />}
        </div>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default WithErrorApi(PeoplePage);