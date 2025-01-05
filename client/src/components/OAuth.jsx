import React from 'react'

export default function OAuth() {
    const handleGoogleClick = async () => {
        try{
            console.log('Google OAuth clicked');
        }catch (error){
            console.error('Error in Google OAuth:', error);
        }
    }
  return (
    <button onClick={handleGoogleClick} type='button'
    className='bg-red-700 text-white p-3 rounded-lg uppercase 
    hover:opacity-95'>Continue with Google</button>
  )
}
