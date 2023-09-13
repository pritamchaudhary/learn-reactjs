import React, {useContext} from 'react'
import { AppState, NameContext } from '../App'

const ComC = () => {
    const appData= useContext(AppState);
    const name = useContext(NameContext);
  return (
    <div className='compc'>
    <div>ComC</div>
    <h1>{appData.data}</h1>
    <h1>{name.name}</h1>
    <h1>{name.age}</h1>
    {/* <h1>name: {appData.name.name}</h1>
    <h1>age: {appData.name.age}</h1> */}
    </div>
  )
}

export default ComC