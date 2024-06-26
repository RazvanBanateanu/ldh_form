'use client'
import React, { ChangeEvent, useState } from 'react'
import BackOptionsButton from '@/components/BackOptionsButton'

const Study = () => {

  const [ans1, setAns1] = useState('')
  const [ans2, setAns2] = useState('')
  const [ans3, setAns3] = useState('')
  const [name, setName] = useState('')

  const handleTextChange = (setter: (value: string) => void) => {
    return (event: ChangeEvent<HTMLTextAreaElement>) => {
      setter(event.target.value)
    }
  }

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const onSubmit = () =>{
    const category = 'study'
    fetch(`https://ldh-form.vercel.app/api/add-answers?name=${name}&category=${category}&ans1=${ans1}&ans2=${ans2}&ans3=${ans3}`)
  }

  return (
    <div className='h-screen'>
      <BackOptionsButton />
      <div className=' bg-violet-700 bg-opacity-60 h-auto '>
        <div className=' text-3xl font-bold text-center py-3 text-purple-100'>
          <h1>Welcome to the</h1>
          <h1>Study Page</h1>
        </div>
      </div>

      <div className=' bg-violet-700 bg-opacity-50 h-auto mt-10 mx-3 rounded-2xl p-1 shadow-2xl  md:mx-52 md:mt-8 '>
        <form onSubmit={onSubmit} className=' flex flex-col mx-3 my-2 items-center'>
          <p className='mb-3 text-[1.15rem] text-white'>Cum a decurs sesiunea de invatat azi?</p>
          <textarea 
            placeholder={"Write here..."} 
            onChange={handleTextChange(setAns1)}
            required 
            className='w-[60%] mb-3 rounded-2xl p-2 px-4 h-10'/>

          <p className='mb-3 text-[1.15rem] text-white'>Cum evaluezi progresul la invatat azi comparativ cu ce ti-ai propus?</p>
          <textarea 
            placeholder={"Write here..."} 
            onChange={handleTextChange(setAns2)}
            required 
            className='w-[60%] mb-3 rounded-2xl p-2 px-4 h-10'/>

          <p className='mb-3 text-[1.15rem] text-white'>Ce probleme ai intampinat azi pe partea de invatat?</p>
          <textarea 
            placeholder={"Write here..."} 
            onChange={handleTextChange(setAns3)}
            required 
            className='w-[60%] mb-3 rounded-2xl p-2 px-4 h-10'/>
            
          <input
            placeholder='Enter your Full Name'
            className='w-[30%] mb-3 rounded-2xl p-2 px-4 h-10 bg-purple-400 placeholder-sky-600'
            onChange={handleNameChange}
            required
            />
          <button type='submit' className=" bg-sky-800 text-white text-2xl rounded-3xl w-32 p-1 font-bold">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Study