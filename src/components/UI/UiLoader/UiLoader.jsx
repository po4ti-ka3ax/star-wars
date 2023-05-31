import { useState,useEffect } from 'react';
import cn from 'classnames'

import PropTypes from 'prop-types'

import s from './UiLoader.module.css';
import loaderWhite from './img/loader-white.svg'
import loaderBlack from './img/loader-black.svg'
import loaderBlue from './img/loader-blue.svg'

const UiLoader = ({theme = 'white', isShadow=true, classes}) => {
    const [loaderTheme,setLoaderTheme] = useState(null)

    useEffect(() => {
        switch (theme) {
            case 'white': setLoaderTheme(loaderWhite); break;
            case 'black': setLoaderTheme(loaderBlack);break;
            case 'blue': setLoaderTheme(loaderBlue);break;
            default: setLoaderTheme(loaderWhite);
        }
    },[])

  return (
   <div>
        <img 
        className={cn(s.loader, isShadow && s.shadow, classes)}
        src={loaderTheme } 
        alt="Loader" />
    </div>
  )
}




UiLoader.propTypes = {
    theme: PropTypes.string,
    isShadow:PropTypes.bool,
    classes:PropTypes.string,
}


export default UiLoader;