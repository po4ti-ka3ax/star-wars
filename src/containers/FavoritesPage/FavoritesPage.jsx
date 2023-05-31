import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import s from './FavoritesPage.module.css';
import PeopleList from '@components/PeoplePage/PeopleList';

// 2:{ name: 'C-3PO', 
//img: 'https://starwars-visualguide.com/assets/img/characters/2.jpg' }
// 3:{ name: 'R2-D2', 
//img: 'https://starwars-visualguide.com/assets/img/characters/3.jpg' }

// {
//   id,
//   name,
//   img
// }

const FavoritesPage = () => {
  const [people, setPeople] = useState([])

  const storeData = useSelector(state => state.favoriteReducer)

  useEffect(() => {
    const arr = Object.entries(storeData)
    if(arr.length) {
      const res = arr.map(item => {
        return {
          id: item[0],
          ...item[1]
        }
      })
      setPeople(res)
    }
  })
  return (
    <div>
      <h1 className='header__text'>Favorites page</h1>
      {people.length ? <PeopleList people={people} /> : <h2 className={s.comment}>No data</h2>}
      
    </div>
  )
}




export default FavoritesPage;