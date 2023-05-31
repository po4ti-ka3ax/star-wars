import PropTypes from 'prop-types'
import s from './PersonInfo.module.css';


const PersonInfo = ({personInfo}) => {
    return (
        <div className={s.info__block}>
            <ul>
                {personInfo.map(({ title, data }) => (
                    data && (
                        <li className={s.info__item} key={title}>
                            <span className={s.title__text}>{title}</span>:{data}
                        </li>

                    )
                ))}
            </ul>
        </div>
    )
}




PersonInfo.propTypes = {
    personInfo: PropTypes.array,
}


export default PersonInfo;