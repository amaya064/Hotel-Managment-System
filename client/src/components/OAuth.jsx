import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { app } from '../Firebase';


export default function OAuth() {
    const handleGoogleClick = async () => {
        try{
           const provider = new GoogleAuthProvider(); 
           const auth = getAuth(app)

           const result = await signInWithPopup(auth, Provider)

           console.log(result);
        }catch (error){
            console.log('Error in Google OAuth:', error);
        }
    }
  return (
    <button onClick={handleGoogleClick} type='button'
    className='bg-red-700 text-white p-3 rounded-lg uppercase 
    hover:opacity-95'>Continue with Google</button>
  );
}
