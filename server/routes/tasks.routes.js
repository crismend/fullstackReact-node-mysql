import { Router } from "express";
import { getTask, createTasks, deleteTasks, updateTasks, getTasks } from "../controller/task.controllers.js";

const router = Router();

router.get('/tasks', getTasks)

router.get('/tasks/:id', getTask)

router.post('/tasks', createTasks)

router.put('/tasks/:id', updateTasks)

router.delete('/tasks/:id', deleteTasks)


export default router

