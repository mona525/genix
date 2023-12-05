import React from 'react'
import { BestSellerStyled } from './style'
import img1 from '../../../../assets/images/img1.png'
import img2 from '../../../../assets/images/img2.png'
import img3 from '../../../../assets/images/img3.png'
import img4 from '../../../../assets/images/img4.png'
import img5 from '../../../../assets/images/img5.png'
const images = [img2, img3, img4]
function BestSeller() {
  return (
    <BestSellerStyled>
        <div className='container'>
            <div>
                <div className='side'>
                    <h4>Best Seller</h4>
                    <p>Get a discount on popular products</p>
                    <img src={img1} alt='product'/>
                    <div className='product-price'>
                        <span className='price'>60$</span>
                        <span className='discount'>-25%</span>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <div className='side'>
                        <h4>The strongest brands</h4>
                        <p>Selections at the best prices and best quality</p>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            {images.map(img=>(
                            <div style={{width: '29%'}}>
                                <img src={img} alt='product'/>
                                <div className='product-price'>
                                    <span className='price'>60$</span>
                                    <span className='discount'>-25%</span>
                                </div>
                            </div>
                            ))}
                        </div>
                        
                    </div>
                    <div className='side' style={{display: 'flex', alignItems: 'center'}}>
                        <div>
                            <h4>Weekly deals</h4>
                            <p>Discounted prices for the last 30 days</p>
                        </div>
                        <div className='product-price' style={{ marginInline: 'auto 20px'}}>
                            <span className='price'>60$</span>
                            <span className='discount'>-25%</span>
                        </div>
                        <img src={img5} alt='product' style={{width: '150px'}}/>
                    </div>
                </div>
                

            </div>
        </div>
    </BestSellerStyled>
  )
}

export default BestSeller