import React from 'react'
import image3 from '../../../../assets/images/image3.png'
import { ItemForSaleStyled } from './style'

function ItemForSale() {
  return (
    <ItemForSaleStyled>
        <div className='container'>
            <h4 className='head'>Items For Sale</h4>
            <div className='items'>
            {Array(8).fill().map(item=>(
                <div className='item'>
                    <img src={image3} alt="offer banner"/>
                    <h6>text (Title)</h6>
                    <div className='product-price'>
                        <span className='price'>60$</span>
                        <span className='discount'>-25%</span>
                    </div>
                </div>
            ))}
            </div>
       
        </div>
    </ItemForSaleStyled>
  )
}

export default ItemForSale