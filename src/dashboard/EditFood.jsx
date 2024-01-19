import React from 'react'
import { useState } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Dropdown , Select , Textarea} from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';

const EditFood = () => {
    const {id} = useParams();
    const {Title, desc, price, ImageURL, PDFURL, category} = useLoaderData();

    const foodCategories = [
        "Төмс",
        "Помидор",
        "Өргөст хэмх",
        "Байцаа"

    ]
    const [selectedFoodCategory, setSelectedFoodCategory] = useState(foodCategories[0])

    const handleChangeSelectedValue = (event) => {
        console.log(event.target.value);
        setSelectedFoodCategory(event.target.value)
    }
    //handle food submission
    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target;

        const Title = form.Title.value;
        const desc = form.desc.value;
        const price = form.price.value;
        const ImageURL = form.ImageURL.value;
        const category = form.category.value;
        const PDFURL = form.PDFURL.value;

        /* console.log(Title, desc, price, ImageURL, category, PDFURL) */

        const updateFoodObj = {
            Title, desc, price, ImageURL, category, PDFURL
        }

        //update
        fetch(`http://localhost:5000/food/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateFoodObj),
        })
            
        .then(res=>res.json())
        .then(data=>{
            alert("Updated")
            form.reset()
        })
    }
  return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3x1 font-bold'>Update</h2>

        <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
           <div className='flex gap-8'>
                <div className='lg:w-1/2'>

                    {/* Title */}
                    <div className="mb-2 block">
                        <Label 
                            htmlFor="Title" 
                            value="Title" />
                    </div>
                    
                    <TextInput 
                            id="Title" 
                            type="text" 
                            placeholder="Food name" 
                            defaultValue={Title}
                            required />
                </div>
                    {/* price */}
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label 
                            htmlFor="price" 
                            value="Price" />
                    </div>
                    
                    <TextInput 
                            id="price" 
                            type="text" 
                            placeholder="Price" 
                            defaultValue={price}
                            required />
                </div>


           </div>

                    {/* Image */}

           <div className='flex gap-8'>

                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label 
                            htmlFor="ImageURL" 
                            value="ImageURL" />
                    </div>
                    
                    <TextInput 
                            id="ImageURL" 
                            type="ImageURL" 
                            placeholder="IMAGE URL" 
                            defaultValue={ImageURL}
                            required />
                    </div>

                {/* category */}

                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                            <Label 
                                htmlFor="inputState" 
                                value="Food Category"/>
                    </div>
                    <Select id='inputState' name='category' className='w-full rounded' value={selectedFoodCategory} onChange={handleChangeSelectedValue}>
                        {
                            foodCategories.map((option) => <option key={option} value={option}>{option}</option>)
                               
                        }
                    </Select>

                </div>
           </div>

              {/* desc */}  
            <div className="mb-2 block">
                <Label 
                    htmlFor="desc" 
                    value="Description" />

                <Textarea 
                    id="desc" 
                    placeholder="Description." 
                    required rows={6} 
                    defaultValue={desc}
                    className='w-full'
                />     
            </div>
             {/* pdf */}                  

            <div>
                <div className="mb-2 block">
                <Label 
                        htmlFor="PDFURL" 
                        value="PDFURL" />
                </div>
                <TextInput 
                        id="PDFURL" 
                        type="text" 
                        placeholder="PDFURL" 
                        defaultValue={PDFURL}
                        required shadow />
            </div>

            <Button type='submit' className='mt-5'>
                Update
            </Button>           
        </form>
    </div>
    
  )
}
 

export default EditFood