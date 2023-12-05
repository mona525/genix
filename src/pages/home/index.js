import React from 'react'
import FirstBanner from './components/firstBanner/FirstBanner'
import SecondBanner from './components/secondBanner.js/SecondBanner'
import BestSeller from './components/bestSeller/BestSeller'
import Categories from './components/categories/Categories'
import OfferBanner from './components/offerBanner/OfferBanner'
import ItemForSale from './components/itemForSale/ItemForSale'
import Trending from './components/trending/Trending'

function Home() {
  return (
    <>
        <FirstBanner/>
        <SecondBanner/>
        <BestSeller/>
        <Categories/>
        <OfferBanner/>
        <ItemForSale/>
        <Trending/>
    </>
  )
}

export default Home