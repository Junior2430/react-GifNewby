import { useState } from 'react'
import { AddCategory,GifGrid } from './Components';


export const GifExpertApp = () => {

    const [Categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if (Categories.includes(newCategory)) return;
        // console.log(newCategory);
        // Categories.push(newCategory); // <---------------hay que evitar el push
        // setCategories([ 'Valorant', ...Categories]);
        setCategories([newCategory, ...Categories]);
    }




    return (
        <>
            {/*titulo*/}
            <h1>GifExpertApp </h1>

            {/*Input*/}
            <AddCategory
                // setCategories={ setCategories }
                onNewCategory={(value) => onAddCategory(value)}
            />


            {/*Listado de Gif*/}


            
            {
                Categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />

                ))

            }
            
           


        </>
    )
}
