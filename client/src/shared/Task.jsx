import React from 'react'

export default function Task({ indTask }) {
  return <>
    <div key={indTask.id}
      className={`completed-${indTask.completed.toString()}`}>
      {indTask.title}</div>
  </>
}
