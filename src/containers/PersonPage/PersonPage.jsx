import PropTypes from 'prop-types'
import s from './PersonPage.module.css';

import { useSelector } from 'react-redux';

import { getApiData } from '@utils/network'
import { useParams } from 'react-router';
import React, { useEffect, useState, Suspense } from 'react';
import { WithErrorApi } from '@hoc/WithErrorApi';
import { API_PERSON } from '@constants/api';
import { getPeopleImg } from '@services/getPeopleData'

import PersonImg from '@components/PersonPage/PersonImg'
import PersonInfo from '@components/PersonPage/PersonInfo'
import PersonLinkBack from '@components/PersonPage/PersonLinkBack'
import UiLoader from '@components/UI/UiLoader/UiLoader';

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'))

const PersonPage = ({ id, setErrorApi }) => {
    const [personId, setPersonId] = useState(null)
    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personImg, setPersonImg] = useState(null)
    const [personFilms, setPersonFilms] = useState(null)
    const [personFavorite, setPersonFavorite] = useState(false)

    const storeData = useSelector(state => state.favoriteReducer)
    const personNum = useParams().id
    useEffect(() => {
        (async () => {
            const res = await getApiData(`${API_PERSON}/${personNum}/`)

            storeData[personNum] ? setPersonFavorite(true) : setPersonFavorite(false)
            setPersonId(personNum)


            if (res) {
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Hair Color', data: res.hair_color },
                    { title: 'Skin Color', data: res.skin_color },
                    { title: 'Eye Color', data: res.eye_color },
                    { title: 'Birth year', data: res.birth_year },
                    { title: 'Gender', data: res.gender },
                ])

                setPersonName(res.name)
                setPersonImg(getPeopleImg(personNum))

                res.films.length && setPersonFilms(res.films)
                // console.log(res.films);

                setErrorApi(false)
            } else {
                setErrorApi(true)
            }
        })()
    }, [])

    return (
        <div>
            <PersonLinkBack />
            <div className={s.wrapper}>
                <span className={s.person__name}>{personName}</span>

                <div className={s.person__block}>
                    <PersonImg
                        personId={personId}
                        personName={personName}
                        personImg={personImg} 
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                        />

                    {personInfo && <PersonInfo personInfo={personInfo} />}

                    {personFilms && (
                        <Suspense fallback={<UiLoader isShadow theme='white' />}>
                            <PersonFilms personFilms={personFilms} />
                        </Suspense>
                    )}
                </div>

            </div>
        </div>

    )
}




PersonPage.propTypes = {
    id: PropTypes.string,
    setErrorApi: PropTypes.func
}


export default WithErrorApi(PersonPage);

