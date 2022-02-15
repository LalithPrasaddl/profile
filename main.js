import {leftNav, menuBtn} from './view/leftNav'
import {rightNav} from './view/rightNav'

import './style.css'

function renderContent() {
  const app = document.getElementById('app')
  const leftNavPage = leftNav()
  const rightNavPage = rightNav()
  const menu = menuBtn()
  app.append(leftNavPage)
  app.append(rightNavPage)
  app.append(menu)
}

renderContent()
