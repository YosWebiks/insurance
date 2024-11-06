import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { approveClaim } from './redux/store'

export default function App() {
  const treasure = useSelector((st:any)=>st.treasure)
 
  
  return (
    <div>App {treasure}</div>
  )
}
