import { useSelector } from 'react-redux';
import { useState } from 'react';

import PropTypes, { object } from 'prop-types'
import s from './Favorite.module.css';
import icon from './img/bookmark.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const Favorite = (props) => {
    const [count, setCount] = useState(0)
    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {


        const length = Object.keys(storeData).length
        length.toString().length > 2 ? setCount('...') : setCount(length)
    })
    return (
        <div className={s.container}>
            <Link to='/favorites'>
            <span className={s.counter}>{count}</span>
                <img className={s.icon} src={icon} alt="Favorites" />
            </Link>
        </div>
    )
}




Favorite.propTypes = {
    text: PropTypes.string
}


export default Favorite;