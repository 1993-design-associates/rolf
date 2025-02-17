import preloaderAnime from './animations/preloader'
import btnHover from './animations/btnHover'
import burgerMenuOpen from './animations/burgerMenuOpen'
import titleFadeIn from './animations/titleFadeIn'
import textIn from './animations/textIn'


import contactTabClick from './button-functions/contactTabClick'
import formTab from './button-functions/formTab'
import backBtnClick from './button-functions/backButtonClick'
import articleClick from './button-functions/articleClick'
import pageTransition from './button-functions/pageTransition'


export default function initWebflowFunctions() {
    preloaderAnime()
    contactTabClick()
    formTab()
    btnHover()
    titleFadeIn()
    articleClick()
    textIn()
    burgerMenuOpen()
    backBtnClick()
    pageTransition()
    window.addEventListener('resize', preloaderAnime);

}
