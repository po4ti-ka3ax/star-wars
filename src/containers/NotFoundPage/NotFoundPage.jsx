import { useLocation } from 'react-router-dom';
import s from './NotFoundPage.module.css';
import img from './img/not-found.png'

const NotFoundPage = (props) => {
  let location = useLocation()
  return (
   <div>
      <img className={s.img} src={img} alt="Not found" />
      <p className={s.text}>No match for <u>{location.pathname}</u></p> 
    </div>
  )
}




export default NotFoundPage;