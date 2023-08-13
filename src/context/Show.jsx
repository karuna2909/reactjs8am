import React from 'react'
import ComA from './ComA'
import GlobslContextProvider from './GlobalContext'

const Show = () => {
  return (
    <>
    <GlobslContextProvider>

    <ComA/>
    </GlobslContextProvider>
   
    </>
  )
}

export default Show