import React, { useState, useEffect } from 'react'
import { getTaskList } from "./services/tasks"
import api from "./services/apiHelper"
import "./App.css"
import Task from './shared/Task'

export default function App() {

  let [taskFullList, setTaskFullList] = useState(null)

  let grabTaskList = async () => {
    let dataGrab = await getTaskList()
    console.log(dataGrab)
    setTaskFullList(dataGrab)
  }

  useEffect(() => {
    grabTaskList()

  }, [])

  return <>
    <div className="full-container">
      <div className="new-task-container">

      </div>


      <div className="task-container">
        {taskFullList && taskFullList.map(indTask => <Task indTask={indTask} />)}
      </div >
    </div>
  </>
}
