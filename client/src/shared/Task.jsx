import React, { useState } from 'react'

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


  return <>
    <div key={indTask.id}
      className={`indTask completed-${completedToggle}`}
      onClick={() => handleCompClick()}>
      {indTask.title}</div>
  </>
}
