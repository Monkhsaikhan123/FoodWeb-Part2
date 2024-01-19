import React, { useEffect } from 'react'
import { useState } from 'react';
import { Table } from 'flowbite-react';
import {Link} from 'react-router-dom'
const ManageFood = () => {
    const [allFoods, setAllFoods] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/all-foods')
        .then(res=>res.json())
        .then(data=>setAllFoods(data))
    },[])

    //delete food

    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/food/${id}`, {
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            alert('Deleted')
           /*  setAllFoods(data) */
        })
    }
  return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3x1 font-bold'>Manage Food</h2>
        <Table className='lg:w-[1180x]'>
            <Table.Head>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
                <span>Edit</span>
            </Table.HeadCell>
            </Table.Head>
            {
                allFoods.map((food,index)=>
                    <Table.Body className='divine-y' key={food._id}>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {index+1}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {food.Title}
                            </Table.Cell>
                            <Table.Cell>
                                {food.desc}
                            </Table.Cell>
                            <Table.Cell>
                                {food.category}
                            </Table.Cell>
                            <Table.Cell>
                                {food.price}
                            </Table.Cell>
                            <Table.Cell>
                                <Link className="font-medium text-cyan hover:underline dark:text-cyan-500 mr-5" to={
                                     `/admin/dashboard/edit-food/${food._id}`
                                }>
                                        Edit
                              </Link>
                                <button onClick={()=> handleDelete(food._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
                            </Table.Cell>
                        </Table.Row>

                    </Table.Body>
                )
            }
           
        </Table>
    </div>
  )
}

export default ManageFood