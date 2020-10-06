import React, { useState, useEffect } from 'react'
import { getTaskList } from "./services/tasks"
import api from "./services/apiHelper"
import "./App.css"

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
    <div className="task-container">
      {taskFullList && taskFullList.map(task => <div key={task.id} className={`completed-${task.completed.toString()}`}>{task.title}</div>)
      }
    </div >
  </>
}
