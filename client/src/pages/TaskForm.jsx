import React, { useEffect, useState } from 'react'
import {Formik, Form} from 'formik'
import { useTask } from '../context/TaskProvider'
import { useParams, useNavigate  } from 'react-router-dom'


const TaskForm = () => {
  const {createTask, getTask, updateTask} = useTask()
  const [task, setTask] = useState({
    title: "",
    description: "",
  })

  const params = useParams()
  const navigate = useNavigate()


  useEffect(() => {
    const loadTask = async() => {
      if (params.id) {
        const task = await getTask(params.id)
        console.log(task)
        setTask({
          title: task.title,
          description: task.description
        })
        }
    }
    loadTask()
  }, [])
  
  

  return (
    <div>
      <Formik 
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async(values, actions) => {
          console.log(values)
          if (params.id) {
            await updateTask(params.id, values)
            navigate("/")
            setTask({
              title:"",
              description:""
            })
          }else{
            await createTask(values)
          }
          actions.resetForm()
          navigate("/")
        }}
      >
        {({handleChange, handleSubmit, values, isSubmitting}) => (
          <Form onSubmit={handleSubmit} className='bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10'>
            <h1 className='text-xl font-bold uppercase text-center'>{params.id ? "Edit task": "new task"}</h1>
          <label className='block'>title</label>
          <input 
          className='px-2 py-1 rounded-sm w-full'
          type="text" 
          name='title' 
          placeholder='Write a title'
          onChange={handleChange}
          value={values.title}/>

          <label className='block'>description</label>
          <textarea 
          className='px-2 py-1 rounded-sm w-full'
          type="text" 
          name='description' 
          rows="3"
          placeholder='Write a description'
          onChange={handleChange}
          value={values.description}></textarea>

          <button  type='submit' disabled={isSubmitting} className='block bg-green-600 px-2 py-1 rounded-lg hover:bg-green-800 text-white w-full'>
            {isSubmitting ? "Savin..." : "save"}
            </button>
        </Form>
          ) }
      </Formik>
    </div>
  )
}

export default TaskForm