import { useEffect, useState } from 'react';

import {NavLink} from 'react-router-dom'
import Favorite from '@components/Favorite'
import s from './Header.module.css';
import {useTheme,THEME_LIGHT,THEME_DARK,THEME_NEUTRAL} from '@context/ThemeProvider'

import imgDroid from './img/r2d2.svg'
import imgDeath from './img/deathStar.svg'
import imgSaber from './img/lightsaber.png'

const Header = ({  }) => {
    const [icon, setIcon] = useState(imgDroid)
    const isTheme = useTheme()
    // isTheme.theme === THEME_LIGHT ? imgSaber : imgDroid
    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT: setIcon(imgSaber); break;            
            case THEME_DARK: setIcon(imgDeath); break;
            case THEME_NEUTRAL: setIcon(imgDroid); break;
            default:break;
        }
    },[isTheme])
    return (
        <div className={s.container}>
            <img className={s.logo} src={icon} alt="Star Wars" />
            <ul className={s.list__container}>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/people?page=1'>People</NavLink>
                </li>
                <li>
                    <NavLink to='/search'>Search</NavLink>
                </li>
                <li>
                    <NavLink to='/not-found'>Not Found</NavLink>
                </li>
                <li>
                    <NavLink to='/fail'>Fail</NavLink>
                </li>
            </ul>
            <Favorite />
        </div>
    )
}

export default Header;