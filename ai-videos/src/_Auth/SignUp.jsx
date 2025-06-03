import React from 'react'

export default function SignUp() {
  return (
    <div className='flex w-full mx-auto h-screen items-center justify-center'>
      <div className='left w-1/2 flex'>
        <img src="\src\assets\web-img.svg" className='w-200 ' alt="img" />
      </div>

  <div className='right px-2 py-2 p-8 flex flex-col items-center justify-center w-1/3 bg-white shadow-xl   rounded-xl  py-5'>

        <h1 className='text-2xl font-bold  mb-4  underline-offset-4  text-orange-400'>Sign-Up</h1>

        <input type="text" className=' w-80 text-ms  py-3 px-2 h-12 my-2 border-1 border border-gray-300 outline-blue-400 rounded-lg' placeholder='Enter the Email' />

        <input type='password' className=' w-80 text-ms py-3 px-2 h-12 my-2 border-1 border border-gray-300  outline-blue-400 rounded-lg' placeholder='Enter the Password' />

        <button className=' 
          border-1 border-gray-400
          text-purple-600 hover:border-transparent hover:bg-purple-600 
          hover:text-white
         cursor-pointer py-2 px-3 w-40 rounded-2xl font-bold  '>Sign-Up
    </button>

              <span class="text-center cursor-pointer  text-gray-700 hover:underline py-3">Forgotten password?</span>

 <hr class="w-full my-4"></hr>

 <button className=' 
          border-1 border-gray-400
          text-indigo-500  hover:border-transparent hover:bg-purple-600 
          hover:text-white
         cursor-pointer py-2 px-3 w-40 rounded-2xl '>Create an Account
    </button>
    
      </div>
    </div>
  )
}
