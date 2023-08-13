import React,{createContext} from "react";

export const  GlobalContext=createContext()

const GlobslContextProvider=(props)=>{
    const student ={
        name: 'Karuna',
        age:23,
        address:'Kathmandu'
    }
    return(
        <GlobalContext.Provider value={student}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobslContextProvider