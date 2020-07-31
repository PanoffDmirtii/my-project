import React from 'react'
import { Link } from 'react-router-dom'
import {LINKS} from '../../../constans'

export const UiComponentsPage = () => {
  return (
    <div className='content-wrapper'>
      ТУТ UI CARDS
      <div>
        <ul>
          <li><Link to={LINKS.UI.CARDS_PAGE}>Card</Link></li>
        </ul>
      </div>
    </div>
  )
}
