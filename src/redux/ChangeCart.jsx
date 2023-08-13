import React from 'react'
import { useDispatch } from 'react-redux'

const ChangeCart = () => {
    const dispatch=useDispatch()
    const increase=()=>{
        dispatch({typr:'Add_To_Cart'})
    }
  return (
    <>
    
    <div className="row d-flex justify-content-evenly">
        <div className="col-md-4">
            <button className="btn btn-primary">
                Add
            </button>
        </div>
        <div className="col-md-4">
        <button className="btn btn-danger">
                Remove
            </button>
            </div>
    </div>
    </>
  )
}


export default ChangeCart