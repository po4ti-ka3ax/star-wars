import PropTypes from 'prop-types'
import cn from 'classnames'
import '../index.css'
import s from './UiInput.module.css';
import cancel from './img/x.svg';


const UiInput = ({ value, handleInputChange, placeholder, classes }) => (
    <div className={cn(s.container, classes)}>
        <input
            type="text"
            value={value}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={placeholder}
            className={s.input}
        />
        <img onClick={() => value && handleInputChange('')} className={cn(s.clear, !value && s.clear__disabled)} src={cancel} alt="" />
    </div>
)




UiInput.propTypes = {
    handleInputChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    classes: PropTypes.string,
}


export default UiInput;