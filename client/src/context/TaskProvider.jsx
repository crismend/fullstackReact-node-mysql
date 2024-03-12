import { useContext, useState } from "react";
import { createTaskRequest, deleteTaskDelete, getTasksRequest, getTaskRequest, updateTaskRequest, toggleTaskDoneRequest } from "../api/tasks.api";
import { TaskContext } from "./TaskContext";



//hook para manejar estado
export const useTask = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error("useTask must be used whitin a TaskContextProvider ")
  }
  return context;
}


export const TaskContextProvider = ({ children }) => {

  const [tasks, setTasks] = useState([])

  async function loadtaks() {
    const response = await getTasksRequest()
    setTasks(response.data)
  }
  loadtaks()

  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskDelete(id)
      setTasks(tasks.filter(task => task.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  const updateTask = async (id, newFields) => {
    try {
      const response = await updateTaskRequest(id, newFields)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const toggleTaskDone = async (id) => {
    try {
      const taskFound = tasks.find((task) => task.id === id)
      await toggleTaskDoneRequest(id, taskFound.done === 0 ? true : false)
    } catch (error) {
      console.log(error)
    }
  }



  return <TaskContext.Provider
    value={{ tasks, loadtaks, deleteTask, createTask, getTask, updateTask, toggleTaskDone }}>
    {children}
  </TaskContext.Provider>
}