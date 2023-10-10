import React from 'react'
import Data from "../home/Data"
import MoreToLoveCard from '../home/MoreToLoveCard'

function NewProducts({addToCart, addToFavourite}) {
    const {productItems} = Data
  return (
    <section className='mt-12 pb-28'>
      <div className='px-4 lg:px-0 lg:w-[84%] m-auto'>
        <h1 className='text-2xl lg:text-3xl font-bold mb-8'>What’s new in the Kan9ala range</h1>
        <h4 className='text-lg font-semibold'>See what’s new at Kan9ala</h4>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-5 lg:gap-4 mt-4">
            {
            productItems.map((product, index)=>
                <MoreToLoveCard key={index} product={product} addToCart={addToCart} addToFavourite={addToFavourite}/>
            )
        }
        </div>
        
        
      </div>
    </section>
  )
}

export default NewProducts
