import React, { useState } from 'react'
import { deleteTask } from '../services/tasks'

export default function Task({ indTask }) {

  let [currTitle, setCurrTitle] = useState(`${indTask.title}`)
  let [completedToggle, setCompletedToggle] = useState(`${indTask.completed}`)


  let handleCompClick = () => {
    if (completedToggle === true) {
      setCompletedToggle(false)
    } else {
      setCompletedToggle(true)
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
