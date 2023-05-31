import PropTypes from 'prop-types'
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider'
import lightImg from './img/light.jpg'
import cn from 'classnames'
import darkImg from './img/dark.jpg'
import falconImg from './img/falcon.jpg'
import s from './ChooseSide.module.css';

const ChooseSideItem = ({
  theme, text, img,classes
}) => {
  const isTheme = useTheme()
  return (
    <div className={cn(s.card, classes)} onClick={() => isTheme.change(theme)}>
      <div className={s.card__header}>{text}</div>
      <img className={s.card__img} src={img} alt={text} />
    </div>
  )
}

ChooseSideItem.propTypes = {
  classes: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,

}
const ChooseSide = (props) =>  {
  const elements = [
    {
      classes:s.card__light,
      theme: THEME_LIGHT,
      text: "Light Side",
      img: lightImg
    },
    {
      classes:s.card__dark,
      theme: THEME_DARK,
      text: "Dark Side",
      img: darkImg
    },
    {
      classes:s.card__neutral,
      theme: THEME_NEUTRAL,
      text: "I'm Han Solo",
      img: falconImg
    },
  ]

  return (
    <div>
      <div className={s.imgContainer}>
        {elements.map((el, index) => (
           <ChooseSideItem
           key={index}
          theme={el.theme}
          text={el.text}
          img={el.img}
          classes={el.classes}
        />
        ))}
       
      </div>


    </div>
  )
}


export default ChooseSide;