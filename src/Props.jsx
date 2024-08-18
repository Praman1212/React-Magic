import React from 'react'

function Props(props) {
  return (
    <>
    <h1>My first name is {props.arr.firstName}</h1>
    <h2>My last name is {props.arr.lastName}</h2>
    <h2>My age is {props.arr.age}</h2>
    <h2>My job is {props.arr.job}</h2>
    <h2>My suitable language is {props.arr.language}</h2>
    </>
  )
}

export default Props
