import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import s from './PeopleNav.module.css';

import UiButton from '@ui/UiButton';

const PeopleNav = ({ getData, counterPage, nextPage, prevPage }) => {

    const handleChangeNext = () => getData(nextPage)
    const handleChangePrev = () => getData(prevPage)
    return (
        <div>
            {/* <h1 className='header__text'>Navigation</h1> */}
            <div className={s.nav__block}>
                <Link className={s.link} to={`/people/?page=${counterPage - 1}`}>
                    <UiButton 
                        text='Previous'
                        onClick={handleChangePrev}
                        disabled={!prevPage}
                        
                    />
                </Link>

                <Link className={s.link} to={`/people/?page=${counterPage + 1}`}>
                    <UiButton 
                        text='Next'
                        onClick={handleChangeNext}
                        disabled={!nextPage}
                        classes={s.test}
                    />
                </Link>
            </div>
        </div>
    )

}
PeopleNav.propTypes = {
    getData: PropTypes.func,
    counterPage: PropTypes.number,
    nextPage: PropTypes.string,
    prevPage: PropTypes.string,
}

export default PeopleNav;

