import PropTypes from 'prop-types'
import s from './PersonFilms.module.css';
import { makeConcurrentRequest, changeHTTP } from '@utils/network';
import { useState, useEffect } from 'react';


const PersonFilms = ({ personFilms }) => {
  const [filmsName, setFilmsName] = useState([]);
  useEffect(() => {
    (async () => {
      const filmsHTTPS = personFilms.map(url => changeHTTP(url))
      const response = await makeConcurrentRequest(filmsHTTPS)
      setFilmsName(response)

    })()
  }, [])
  return (
    <div>
      <ul className={s.films__list}>
        {filmsName
          .sort((a,z) => a.episode_id - z.episode_id)
          .map(({ title, episode_id }) =>
            <li className={s.films__item} key={episode_id}>
              <span className={s.episode__num}>Episode {episode_id}</span>
              <span className={s.episode__colon}> : </span>
              <span className={s.episode__name}>{title}</span>
            </li>
          )
        }
      </ul>
    </div>
  )
}




PersonFilms.propTypes = {
  personFilms: PropTypes.array
}


export default PersonFilms;