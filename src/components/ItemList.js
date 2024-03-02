// import React from 'react';
import { addItem } from '../Utils/cartSlice';
import { CDN_LINK } from '../Utils/constant';
import { useDispatch } from 'react-redux';


const ItemList=({items})=> {
    // console.log(items);
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
        //dispatch an action
         dispatch(addItem(item));
    };

  return (
    <div>
        {/* in items we got array of cards of data so we need to map all cards seperately so for 1 card there is need to use map so we iteratee
        all card accouding to using id of that card */}
        {items.map((item)=>(
            <div key={item.card.info.id} 
            className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'>
                
                {/* <img src={CDN_LINK+item.card.info.imageId} className='w-14'/> */}
               <div className='w-9/12'>
               <div className='py-2'>
                <span >{item.card.info.name}</span>
                <span>{  item.card.info.price
                ?item.card.info.price/100:
                item.card.info.defaultprice/100

            }</span>
            </div>
             <p className='text-xs'>{item.card.info.description}</p>
                </div>
             <div className='w-3/12 p-4'>
                <div className='absolute'>
                    <button className='p-1 mx-16  rounded-lg bg-white textshadow-sm'
                    //after clicking handleAdditem work and we pass item(whole card) into it
                    onClick={()=>{handleAddItem(item)}}>
                        Add +
                    </button>

                </div>
                <img src={CDN_LINK+item.card.info.imageId} className='w-full'/> 
             </div>
             
             
             
             </div>
             
        ))}
    </div>
  );
};

export default ItemList