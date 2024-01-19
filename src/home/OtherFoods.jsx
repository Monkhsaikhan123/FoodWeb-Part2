import React, { useState, useEffect } from 'react'
import FoodCards from '../components/FoodCards'

const OtherFoods = () => {
  const [foods, setFoods] = useState([]);

    useEffect(() => {
            fetch('http://localhost:5000/all-foods')
         .then(res => res.json())
         .then(data => setFoods(data.slice(0,8)))
        }, [])

  return (
    <div>
        <FoodCards foods={foods} headline='Best Seller'/>
    </div>
  )
}

export default OtherFoods