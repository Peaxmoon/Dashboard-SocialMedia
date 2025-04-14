import React, { useCallback, useEffect, useRef, useState } from 'react'

function ProjectApp2() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowerd] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "@#$&"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordClipboard = useCallback(() => {
    passwordRef.current?.select(); // select the input value
    passwordRef.current?.setSelectionRange(0, 40)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
       passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  

  return (
    <div className='bg-black-400 w-full h-full'>
      <h1 className='self-center  text-4xl'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 pt-4 pb-4 my-8 text-orange-500 bg-gray-800'>
        <div className='bg-white flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef} // useRef to get the input element
          />

          <button 
          onClick={copyPasswordClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' >Copy</button>

          </div>
          <div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
                min={6}
                max={40}
                value={length}
                className='cursor-pointer'
                onChange={(e) => { setLength(Number(e.target.value)) }} />
                <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowerd((prev) =>
                    !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>

            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                  setCharAllowed((prev) =>
                    !prev);
                }}
              />
              <label htmlFor="charecterInput">Characters</label>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProjectApp2