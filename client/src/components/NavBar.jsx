import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-zinc-600 flex justify-between px-20 py-4'>
      <Link to="/" className='text-white font-bold'>
      <h1>React MySql</h1>
      </Link>

      <ul className='flex gap-x-2'>
        <li>
          <Link className='bg-slate-400 px-2 py-1 hover:bg-slate-500 rounded-md text-white' to="/">Home</Link>
        </li>
        <li>
          <Link className='bg-slate-400 px-2 py-1 hover:bg-slate-500 rounded-md text-white' to="/new">Create Tasks</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar