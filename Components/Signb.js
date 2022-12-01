import React from 'react'
import { Link } from 'react-router-dom'

export default function Signb(props) {
  return (
    <>
    <Link to={props.mode}>
    <button type="button"  className="btn btn-primary" >{props.mode}</button>
    </Link>
    </>
  )
}
