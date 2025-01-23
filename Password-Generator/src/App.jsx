import { useState, useCallback, useContext, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] =useState(8)
  const [number, setnumber]=useState(false)
  const [character, setCharacter]= useState(false)
  const [password, setPassword]=useState("")
//ref hook
const passwordRef=useRef(null)
  const passwordGenerator= useCallback(()=>{
    let pass= "";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number)
      str+="0123456789"

    if(character)
      str+="!@#$%^&*()_-+=[]~{}"

    for(let i=1;i<=length;i++)
    {
      let char= Math.floor(Math.random()*str.length+1)

      pass+=str.charAt(char)
    }

    setPassword(pass)

  }, [length, number, character, setPassword])//here setPassword for optimization
//here for optimizqtion

  useEffect(()=>{
    passwordGenerator()
  }, [length, number, character, passwordGenerator])//here if change anything re-run

  const copyPasswordToClipBoard=useCallback(()=>{
    passwordRef.current?.select();
  //  passwordRef.current?.setSelectionRange(0,3);  to select for a specific range for copy
window.navigator.clipboard.writeText(password)
  }, [password])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 '>
        <h1 className='text-center text-white my-3 text-2xl'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder="password"
        ref={passwordRef}
        readOnly/>

        <button className='outline-none bg-blue-700 hover:bg-blue-300 text-white px-3 py-0.5 shrink-0  ' onClick={copyPasswordToClipBoard}>copy</button>
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
         <label  > Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input 
          type="checkbox"
         defaultChecked={number}
         id='numberInput'
          
         onChange={()=>{setnumber((prev) =>!prev)}} />
         <label > Number</label>

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
