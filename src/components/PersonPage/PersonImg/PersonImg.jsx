import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import s from './PersonImg.module.css';
import iconFavorite from './img/favorite.svg';
import iconFavoriteFill from './img/favorite-fill.svg';
import { setPersonToFavorite, removePersonFromFavorite } from '@store/actions';

const PersonImg = ({
  personImg,
  personName,
  personId,
  setPersonFavorite,
  personFavorite }) => {

  const dispatch = useDispatch()

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId))
      setPersonFavorite(false)
    } else {
      dispatch(setPersonToFavorite({
        [personId]: {
          name: personName,
          img: personImg
        },
      }))
      setPersonFavorite(true)
    }
  }

  return (
    <div>
      <div className={s.container}>
        <img className={s.person__img} src={personImg} alt={personName} />
        
        <img
          onClick={dispatchFavoritePeople}
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          className={s.icon}
          alt='add to favorite'
        />
      </div>



    </div>
  )
}




PersonImg.propTypes = {
  personImg: PropTypes.string,
  personName: PropTypes.string,
  personName: PropTypes.string,
  setPersonFavorite: PropTypes.func,
  personFavorite: PropTypes.bool,

}


export default PersonImg;
