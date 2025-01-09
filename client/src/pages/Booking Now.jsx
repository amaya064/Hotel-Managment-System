import React from 'react';
import { useLocation } from 'react-router-dom';

export default function BookingNow() {
  const location = useLocation();
  const { room } = location.state || {}; // Retrieve the room details passed from Accomodation

  return (
      <main className='p-3 max-w-4xl-mx-auto'>
        <h1 className='text-3xl font-semibold text-center my-7'>
          Book Now
        </h1>
      <form className='flex flex-col sm:flex-row'>
        <div className="flex flex-col gap-4 flex-1">
        <input type="text" placeholder='Name' className='border p-3
        rounded-lg' id='name' maxLenth='62' minLenth='10' required />
        <textarea type="text" placeholder='Description' className='border p-3
        rounded-lg' id='description' required />
        <input type="text" placeholder='Address' className='border p-3
        rounded-lg' id='address' required />
        <div className='flex gap-6 flex-wrap'>
          <div className='flex gap-2'>
             <input type='checkbox' id='Parking spot' className='w-5'/>
             <span>Parking spot</span>
          </div>
          <div className='flex gap-2'>
             <input type='checkbox' id='Furnished' className='w-5'/>
             <span>Furnished</span>
          </div>
          <div className='flex gap-2'>
             <input type='checkbox' id='Offer' className='w-5'/>
             <span>Offer</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-6">
          <div className="flex item-center gap-2">
            <input type="number" id='bedrooms' min='1' max='10' required 
            className='p-3 border border-gray-300 rounded-lg'/>
            <p>Beds</p>
          </div>
          <div className="flex item-center gap-2">
            <input type="number" id='bathrooms' min='1' max='10' required 
            className='p-3 border border-gray-300 rounded-lg'/>
            <p>Baths</p>
          </div>
          <div className="flex item-center gap-2">
            <input type="number" id='RegularPrice' min='1' max='10' required 
            className='p-3 border border-gray-300 rounded-lg'/>
            <div className="flex flex-col items-center">
            <p>Regular Price</p>
            <span className='text-xs'>($/ Days)</span>
            </div>
          </div>
          <div className="flex item-center gap-2">
            <input type="number" id='DiscountedPrice' min='1' max='10' required 
            className='p-3 border border-gray-300 rounded-lg'/>
             <div className="flex flex-col items-center">
            <p>Discounted Price</p>
            <span className='text-xs'>($/ Days)</span>
            </div>
          </div>
        </div>
        <button className='p-3 bg-slate-700 text-white rounded-lg 
         hover:opacity-95 disabled:opacity-80'>Submit</button>
        </div>
      </form>
      </main>
  );
}
