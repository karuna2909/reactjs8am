import React,{ useContext } from "react"
import { GlobalContext } from "./GlobalContext"


const ComD = () => {
    const js=useContext(GlobalContext)
  return (
   <>
   <h2 className='text-center text-muted'>
    The name of student is {js.name}
   </h2>
   <h2 className="text-center text-muted">
    Age:{js.age}
    <br/>
    Address: {js.address}
   </h2>
   </>
  )
}

export default ComD