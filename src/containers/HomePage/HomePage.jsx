import ChooseSide from '@components/HomePage/ChooseSide/ChooseSide';
import s from './HomePage.module.css';


const HomePage = (props) => {
  return (
   <div>
      <h1 className='header__text'>Choose your side</h1>
      <ChooseSide/>
    </div>
  )
}




export default HomePage;