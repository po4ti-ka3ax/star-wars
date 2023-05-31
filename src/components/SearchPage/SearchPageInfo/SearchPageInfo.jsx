import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import s from './SearchPageInfo.module.css';


const SearchPageInfo = ({ people }) => (
  <div>
    {people.length
      ? (
        <ul className={s.list__container}>
          {people.map(({ id, name, img }) =>
            <li className={s.list__item} key={id}>
              <Link to={`/people/${id}`}>
                <img className={s.person__img} src={img} alt={name} />
                <p className={s.person__name}>{name}</p>
              </Link>
            </li>)}
        </ul>
      )
      : <h2 className={s.person__comment}>No results</h2>
    }
  </div>
)





SearchPageInfo.propTypes = {
  people: PropTypes.array
}


export default SearchPageInfo;