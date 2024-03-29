import React, { useEffect} from 'react'
import TaskCard from '../components/TaskCard'
import { useTask,  } from '../context/TaskProvider'

const TasksPage = () => {

  const {tasks, loadtaks} = useTask()


  useEffect(() => {
    loadtaks()
  }, [])

  function renderTask() {
    if (tasks.length === 0) return <h1>No tasks yet</h1>
    return tasks.map((task) => <TaskCard key={task.id} task={task}/>)
  }
  

  return (
    <div>
      <h1 className='text-5xl text-white font-bold text-center'>Tasks</h1>
      <div className='grid grid-cols-3 gap-2'>
      {renderTask()}
      </div>
    </div>
  )
}

export default TasksPage