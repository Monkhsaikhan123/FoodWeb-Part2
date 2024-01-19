import { useState } from 'react';
import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Dropdown , Select , Textarea} from 'flowbite-react';

const UploadFood = () => {
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
    const handleFoodSubmit = (event) => {
        event.preventDefault()
        const form = event.target;

        const Title = form.Title.value;
        const desc = form.desc.value;
        const price = form.price.value;
        const ImageURL = form.ImageURL.value;
        const category = form.category.value;
        const PDFURL = form.PDFURL.value;

        /* console.log(Title, desc, price, ImageURL, category, PDFURL) */

        const foodObj = {
            Title, desc, price, ImageURL, category, PDFURL
        }

        console.log(foodObj)


        fetch('http://localhost:5000/upload-food', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(foodObj)
        }
           
        )
        .then(res=> res.json())
        .then(data=>{
            alert('Uploaded')
            form.reset()
    })
    }
  return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3x1 font-bold'>Upload A Food</h2>

        <form onSubmit={handleFoodSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
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
                        required shadow />
            </div>

            <Button type='submit'>Upload</Button>           
        </form>
    </div>
    
  )
}

export default UploadFood