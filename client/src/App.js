import React, { useState } from 'react'
import { getTaskList } from "./services/tasks"
import api from "./services/apiHelper"

export default function App() {

  let [taskFullList, setTaskFullList] = useState(null)

  let grabTaskList = async () => {
    let dataGrab = await getTaskList()
    console.log(dataGrab)
  }

  return (
    <div>
      <button onClick={() => grabTaskList()}>get task list</button>
    </div>
  )
}
