import React from 'react';

const Card = ([password, passwordRef,]) => {
    return (
        <div className='w-full max-w-lg mx-auto shadow-lg rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-4xl text-center text-white my-8'>Password Generator</h1>
        <div className='flex rounded-lg shadow overflow-hidden mb-4'>
          <input 
            type="text" 
            value = {password}
            placeholder='Password'
            readOnly
            className='outline-none w-full px-3 py-1'
            ref={passwordRef}
          />
          <button 
          onClick={copyPassword}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800 transition'
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={8}
              max={25}
              value={length}
              className='cursor-pointer'
              id='lengthInput'
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="lengthInput">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    );
}

export default Card;
