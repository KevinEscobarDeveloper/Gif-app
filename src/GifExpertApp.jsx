import { useState } from 'react'
import { AddCategory, GifGrid } from './components/'


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['onePunch'])

    const onAddCategories = (newCategory) => {

        if (categories.includes(newCategory)) return
        setCategories(cat => [...cat, newCategory])
    }
    console.log(categories)
    return (
        <>
            {/* titulo */}
            <h1>Gif Expert App</h1>
            {/* input */}
            <AddCategory onNewCategory={(event) => onAddCategories(event)}
            // setCategories={setCategories} 
            />

            {/* listado de gif */}

            {categories.map((category) =>
            (
                <GifGrid key={category} category={category} />
            )
            )}
            {/* <li>ABC</li> */}

            {/* gif item */}
        </>
    )
}
