import PropTypes from 'prop-types'
import '../UiButton/index.css'
import s from './UiButton.module.css';
import cn from 'classnames'

const UiButton = ({ 
            text,
            onClick,
            disabled,
            theme='dark',
    }) => {
    return (
        <div>
            <button
                onClick={onClick}
                disabled={disabled}
                className={cn(s.nav__btn, s[theme])}
            >
                {text}
            </button>
        </div>
    )
}




UiButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    dark: PropTypes.string,
}


export default UiButton;