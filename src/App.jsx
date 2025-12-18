import { useState } from 'react'
import './App.css'
import { List } from './components/List.jsx'
import { Details } from './components/Details.jsx'

function App() {
  const [id, setId] = useState(undefined);
  
  async function selectId(id) {
    setId(id);
  }

  return (
    <div className='container'>
      <List onClick={selectId}/>
      <Details id={id}/>
    </div>
  )
}

export default App