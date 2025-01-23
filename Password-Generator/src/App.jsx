import { useState, useCallback, useContext } from 'react'


function App() {
  const [length, setLength] =useState(8)
  const [number, setnumber]=useState(false)
  const [character, setCharacter]= useState(false)
  const [password, setPassword]=useState("")

  const passwordGenerator= useContext(()=>{
    let pass= "";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number)
      str+="0123456789"

    if(character)
      str+="!@#$%^&*()_-+=[]~{}"

    for(let i=1;i<=Array.length;i++)
    {
      let char= Math.floor(Math.random()*str.length()+1)

      pass=str.charAt(char)
    }

    setPassword(pass)

  }, [length, number, character, setPassword])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-center text-white my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly/>

        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div  className='flex items-center gap-x-1'>
          <input 
          type="range"
         min={6}
         max={100}
         value={length}
         className='cursor-pointer'
         onChange={(e)=>{setLength(e.target.value)}} />
         <label > Length</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input 
          type="checkbox"
         defaultChecked={number}
         id='numberInput'

         onChange={()=>{setnumber((prev) =>!prev)}} />
         <label > Length</label>

        </div>

        <div className='flex items-center gap-x-1'>
        <input 
          type="checkbox"
         defaultChecked={character}
         id='characterInput'

         onChange={()=>{setCharacter((prev) =>!prev)}} />
         <label >Character</label>

        </div>

        
      </div>
    </div>
    </>
  )
}

export default App
