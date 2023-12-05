import React from 'react'
import bannerSrc from '../../../../assets/images/first-banner.png'
import { FirstBannerStyled } from './style'
function FirstBanner() {
  return (
    <FirstBannerStyled>
        <div className='container'>
            <img src={bannerSrc} alt="sell banner"/>
            <button>Start Now</button>
        </div>
    </FirstBannerStyled>
  )
}

export default FirstBanner