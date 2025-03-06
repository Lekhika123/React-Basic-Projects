import { useState } from 'react'
import './App.css'

function App() {
    const [color,setColor]=useState("Olive");
  

  return (
    <>
       <div className='w-full h-screen duration-200 px-0 py-0' 
       style={{backgroundColor:color}}
       >
        <div className='fixed flex flex-wrap justify-center bottom-12  px-2 '>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button type='submit' className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{backgroundColor:"red"}} onClick={()=>setColor('red')}>Red</button>
          <button type='submit' className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{backgroundColor:"green"}} onClick={()=>setColor('green')}>Green</button>
          <button type='submit' className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{backgroundColor:"blue"}} onClick={()=>setColor('blue')}>Blue</button>
          <button type='submit' className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{backgroundColor:"olive"}} onClick={()=>setColor('olive')}>Olive</button>
          <button type='submit' className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{backgroundColor:"grey"}} onClick={()=>setColor('grey')}>Grey</button>
          <button type='submit' className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
            style={{backgroundColor:"yellow"}} onClick={()=>setColor('yellow')}>Yellow</button>
          <button type='submit' className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
            style={{backgroundColor:"pink"}} onClick={()=>setColor('pink')}>Pink</button>
          <button type='submit' className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{backgroundColor:"purple"}} onClick={()=>setColor('purple')}>Purple</button>
          <button type='submit' className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
            style={{backgroundColor:"lavender"}} onClick={()=>setColor('lavender')}>Lavender</button>
          <button type='submit' className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
            style={{backgroundColor:"white"}} onClick={()=>setColor('white')}>White</button>
          <button type='submit' className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{backgroundColor:"black"}} onClick={()=>setColor('black')}>Black</button>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App
