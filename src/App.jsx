import { useState } from 'react'
import './App.css'
import { List } from './components/List.jsx'
import { Details } from './components/Details.jsx'

function App() {
  const [id, setId] = useState(null);

  return (
    <div className='container'>
      <List onSelect={setId} selectedId={id} />
      <Details id={id}/>
    </div>
  )
}

export default App