import { generateContent } from '../components/wrapper'
import { siteData, appState, updateAppState } from '../model/data'
import {rightNav} from './rightNav'

export function leftNav() {
  const leftNavItemsContent = []
  const leftNavItems = siteData.leftNavItems
  for (let i = 0; i < leftNavItems.length; i++) {
    const item = leftNavItems[i]
    const className = appState.currScreen == item.key ? 'selected' : 'button'
    leftNavItemsContent.push({
      type: 'button',
      elmAttrs: {
        className,
        'data-key': item.key,
        onclick: leftNavItemClick
      },
      childElms: [{
        type: 'span',
        elmAttrs: {
          className: 'material-icons',
          innerHTML: item.icon
        }
      }, {
        type: 'span',
        elmAttrs: {
          innerHTML: item.label
        }
      }]
    })
  }
  const leftNavDom = {
    type: 'div',
    elmAttrs: {
      className: 'left-nav',
      id: 'left-nav'
    },
    childElms: [{
      type: 'div',
      elmAttrs: {
        className: 'image-wrapper'
      },
      childElms: [{
        type: 'img',
        elmAttrs: {
          src: '../assets/profile.jpeg'
        }
      }]
    }, {
      type: 'div',
      elmAttrs: {
        className: 'nav-items'
      },
      childElms: leftNavItemsContent
    }]
  }
  const leftNav = generateContent(leftNavDom)
  return leftNav
}

export function menuBtn() {
  const menu = {
    type: 'button',
    elmAttrs: {
      className: 'menu-btn'
    },
    childElms: [{
      type: 'span',
      elmAttrs: {
        className: 'material-icons',
        innerHTML: 'menu',
        onclick: menuBtnClick
      }

    }]
  }
  return generateContent(menu)
}

function menuBtnClick() {
  const body = document.body
  if (body.classList.value.indexOf('menu-active') > -1) {
    body.classList.remove('menu-active')
  } else {
    body.classList.add('menu-active')
  }
}

function leftNavItemClick(e) {
  const body = document.body
  const key = e.currentTarget.dataset.key
  const data = {...appState}
  data.currScreen = key
  updateAppState(data)
  leftNav()
  rightNav()
  if (body.classList.value.indexOf('menu-active') > -1) {
    body.classList.remove('menu-active')
  }
}
