import React from 'react'

export default function Task({ indTask }) {
  return <>
    <div key={indTask.id}
      className={`indTask completed-${indTask.completed.toString()}`}>
      {indTask.title}</div>
  </>
}
