import React from 'react'
import { OfferBannerStyled } from './style'
import bannerSrc from '../../../../assets/images/offer.png'

function OfferBanner() {
  return (
    <OfferBannerStyled>
        <div className='container'>
            <img src={bannerSrc} alt="sell banner"/>
            <button>Shop Now</button>
        </div>
    </OfferBannerStyled>
  )
}

export default OfferBanner