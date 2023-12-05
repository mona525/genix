import React from 'react'
import { TopHeaderStyled } from './style'
import CartControl from './CartControl'

function TopHeader() {
  return (
    <TopHeaderStyled>
      <div className='container'>
        <div>
          <div className='search'>
            <input type='text' placeholder='Search'/>
          </div>
          <CartControl/>
        </div>
      </div>
    </TopHeaderStyled>
  )
}

export default TopHeader