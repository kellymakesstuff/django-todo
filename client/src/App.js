import React, { useState, useEffect } from 'react'
import { getTaskList, createTask } from "./services/tasks"
import api from "./services/apiHelper"
import "./App.css"
import Task from './shared/Task'
import Header from './shared/Header'

export default function App() {

  let [taskFullList, setTaskFullList] = useState([])
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

  let handleNewTask = () => {

    setTaskFullList([...taskFullList, newTask])
    createTask(newTask)
  }

  useEffect(() => {
    grabTaskList()

  }, [])

  return <>
    <div className="full-container">
      <Header />

      <div className="input-container">
        <label for="next">what's next?</label>
        <input name="next" id="top-input" placeholder="what's next?" onChange={e => handleChange(e)} />
        <button onClick={() => handleNewTask()}>add</button>
      </div>

      <div className="task-container">

        {taskFullList && taskFullList.map(indTask => <Task indTask={indTask} />)}
      </div >
    </div>

  </>
}
