import {useNavigate} from 'react-router-dom'
import s from './PersonLinkBack.module.css';
import back from './img/back.png'

const PersonLinkBack = (props) => {
    const navigate = useNavigate()
    const handleGoBack = e => {
        e.preventDefault()
        navigate(-1)
    }

    return (
        <div>
            <a href="#" onClick={handleGoBack} className={s.link}>
                <img className={s.link__img} src={back} alt="Go back" />
                <span>Go Back</span>
            </a>
        </div>
    )
}



export default PersonLinkBack;