import React from 'react'
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import "../App.css"

function Home() {
  const navigate=useNavigate()
const{handleSubmit,register,formState:{errors}}=useForm();
const onSubmit= values=>{
  navigate('/exchange')
  console.log(values)
}

  return (
    <div className='formdata'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='enter username'
      {...register("username",{
        required:'Required',
        validate:value=>value!=="admin"||"nice try"
      })}
      />
      {errors.username&&errors.username.message}
    
      <input type="email" placeholder='enter email' 
        {...register("email",{
          required:"Required",
          pattern:{
            value:/^[A-Z 0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message:'invalid email address'
          }
         })}
      />
      {errors.email&&errors.email.message}
      
      <button type='submit' >submit</button>
      
    </form>
    </div>
  )
}

export default Home