import React from 'react'
import image2 from '../../../../assets/images/image2.png'
import { TrendingStyled } from './style'

function Trending() {
  return (
    <TrendingStyled>
        <div className='container'>
            <h4 className='head'>Trending Brands</h4>
            <div className='items'>
            {Array(4).fill().map(item=>(
                <div className='item'>
                    <img src={image2} alt="offer banner"/>
                </div>
            ))}
            </div>
       
        </div>
    </TrendingStyled>
  )
}

export default Trending