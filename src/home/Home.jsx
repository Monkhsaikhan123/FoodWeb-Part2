import React from 'react'
import Banner from '../components/Banner'
import BestSellerFoods from './BestSellerFoods'
import FavFood from './FavFood'
import PromoBanner from './PromoBanner'
import OtherFoods from './OtherFoods'
import Review from './Review'

const Home = () => {
  return (
    <div>
        <Banner/>
        <BestSellerFoods/>
        <FavFood/>
        <PromoBanner/>
        <OtherFoods/>
        <Review/>
    </div>
  )
}

export default Home