import React, { useState , useEffect} from 'react'
import { Card} from 'flowbite-react'

const Shop = () => {
  const [foods , setFoods] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:5000/all-foods')
    .then(res => res.json())
    .then(data => setFoods(data))
  },[])
  return (
    <div className='mt-28 px-4 lg:px24'>
        <h2 className='text-5x1 font-bold text-center'>All foods are here</h2>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 my-12'>
            {
              foods.map(food => 
                <Card
                  key={food._id}
                  >
                    
                    <img src={food.ImageURL} alt='' className='h-96'/>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                       <p>
                         {food.Title}
                       </p>
                    </h5>
                    <h3>{food.category}</h3>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                       {food.desc}
                    </p>

                    <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Buy Now</button>
                </Card>
                
                )
            }
        </div>
    </div>
  )
}

export default Shop