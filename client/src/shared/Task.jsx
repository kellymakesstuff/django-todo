import React, { useState } from 'react'
import { updateTask, deleteTask } from '../services/tasks'

export default function Task({ indTask }) {

  let [currTitle, setCurrTitle] = useState(`${indTask.title}`)
  let [completedToggle, setCompletedToggle] = useState(`${indTask.completed}`)


  let handleCompClick = () => {
    let currId = parseInt(indTask.id)
    if (completedToggle === true) {
      setCompletedToggle(false)
      console.log(currId)
      updateTask(currId, {
        "completed": false,
      })
    } else {
      setCompletedToggle(true)
      console.log(currId)
      updateTask(currId, {
        "completed": true,
      })
    }
  }

  let handleDelete = () => {
    deleteTask(`${indTask.id}`)
  }

  return <>
    <div key={indTask.id}
      className={`indTask completed-${completedToggle}`}
      onClick={() => handleCompClick()}>
      {indTask.title}
      {/* <button onClick={() => { handleDelete() }}>delete</button> */}
    </div>
  </>
}
