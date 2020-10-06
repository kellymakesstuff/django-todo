import React, { useState, useEffect } from 'react'
import { getTaskList } from "./services/tasks"
import api from "./services/apiHelper"
import "./App.css"
import Task from './shared/Task'

export default function App() {

  let [taskFullList, setTaskFullList] = useState(null)
  let [newTask, setNewTask] = useState(null)

  let grabTaskList = async () => {
    let dataGrab = await getTaskList()
    console.log(dataGrab)
    setTaskFullList(dataGrab)
  }

  let handleChange = (e) => {
    setNewTask({
      "title": e.target.value,
      "completed": false,
    })
    console.log(newTask)
  }

  useEffect(() => {
    grabTaskList()

  }, [])

  return <>
    <div className="full-container">
      <div className="task-container">

        <input id="top-input" placeholder="what's next?" onChange={e => handleChange(e)} />


        {taskFullList && taskFullList.map(indTask => <Task indTask={indTask} />)}
      </div >
    </div>

  </>
}
