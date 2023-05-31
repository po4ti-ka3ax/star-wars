/* 
    формат css-переменной:
    --theme-default - уникальная переменная, для смены их в css переменных
    --theme-light - # для 'light'
    --theme-dark - # для 'dark'
    --theme-neutral - # для 'neutral'
*/

export const changeCssVariables = theme => {
    const root = document.querySelector(':root')
 
    // root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`)
    // root.style.setProperty('--theme-default-bgimg', `var(--theme-${theme}-bgimg)`)
    const cssVariables = ['header', 'bgimg']
    cssVariables.forEach(el => {
        root.style.setProperty(
            `--theme-default-${el}`, 
            `var(--theme-${theme}-${el})`
            )
    })
}

// --theme-light-header:#dfe2df;
//   --theme-dark-header:#ca6c6f;
//   --theme-neutral-header:#cccc46;