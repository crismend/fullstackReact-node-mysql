import React from 'react'
import { useTask } from '../context/TaskProvider'
import { useNavigate } from 'react-router-dom'


const TaskCard = ({ task }) => {
  const navigate = useNavigate()
  const { deleteTask, toggleTaskDone } = useTask()

  const handleDone = async () => {
    await toggleTaskDone(task.id)
  }

  return (
    <div className='bg-slate-200 rounded-md p-4' >
      <header className='flex justify-between'>
        <h2 className='text-sm font-bold'>{task.title}</h2>
        <span>{task.done === 1 ? "✔️" : "❌"}</span>
      </header>

      <p className='text-xs'>{task.description}</p>
      <span>{task.createAt}</span>

      <div className='flex gap-x-2' >
        <button className='bg-red-600 px-2 py-1 rounded-lg hover:bg-red-800 text-white' onClick={() => deleteTask(task.id)}>Delete</button>
        <button className='bg-slate-600 px-2 py-1 rounded-lg hover:bg-slate-800 text-white' onClick={() => navigate(`/edit/${task.id}`)}>Editar</button>
        <button className='bg-green-600 px-2 py-1 rounded-lg hover:bg-green-800 text-white' onClick={() => handleDone(task.done)}>Toggle Task</button>
      </div>
    </div>
  )
}

export default TaskCard