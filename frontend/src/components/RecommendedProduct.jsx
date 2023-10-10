import React from 'react'
import Data from './home/Data';
import MoreToLoveCard from './home/MoreToLoveCard';
import SuperCard from './home/SuperCard';

function RecommendedProduct({addToFavourite, addToCart}) {
  const { productItems } = Data;
  return (
    <div>
        <h1 className='text-2xl font-semibold mb-8 mt-16'>Recommended for you</h1>
        
        <SuperCard
            productItems={productItems}
            addToCart={addToCart}
            addToFavourite={addToFavourite}
          />
    </div>
  )
}

export default RecommendedProduct
