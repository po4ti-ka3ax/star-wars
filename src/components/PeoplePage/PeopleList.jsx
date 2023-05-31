import PropTypes from 'prop-types'
import {Link } from 'react-router-dom'
import s from './PeopleList.module.css';


const PeopleList = ({ people }) => {
   
    return (
        <div>
            <ul className={s.list__container}>
                {people.map(({ id, name, img }) =>
                    <li className={s.list__item} key={id}>
                        <Link to={`/people/${id}`}>
                            <img className={s.person__photo} src={img} alt={name} />
                            <p className={s.person__name}>{name}</p>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
    
}
PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList;

