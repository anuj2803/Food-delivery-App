import React from 'react';
import ItemList from './ItemList';
import { useSelector } from 'react-redux';

 const cart = () => {
const cartItems=useSelector((store)=>store.cart.items);
  return (
    <div className='text-center m-4 p-4'>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <div className='w-6/12 m-auto'>
        {/* console.log(cartItems); */}

            <ItemList items={cartItems}/>
        </div>
    </div>
  );
};
 
export default cart;