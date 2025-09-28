import { useState } from 'react'
import './App.css'
import Tab from './Tab'
import Form from './Form'
import initialData from './data.json'

function App() {
  const [clickCount, setClickCount] = useState(0)
  const [currentView, setCurrentView] = useState('tab') // 'tab' or 'form'
  const [tableData, setTableData] = useState(initialData)

  const handleToggle = () => {
    setClickCount(prev => prev + 1)
    setCurrentView(prev => prev === 'tab' ? 'form' : 'tab')
  }

  const handleAddPerson = (newPerson) => {
    setTableData(prev => [...prev, newPerson])
  }

  return (
    <div className="app">
      <div className="toggle-container">
        <button onClick={handleToggle} className="toggle-button">
          {currentView === 'tab' ? 'Pokaż formularz' : 'Pokaż tabelę'}
          <span className="click-counter">({clickCount})</span>
        </button>
      </div>
      
      <div className="content">
        {currentView === 'tab' ? (
          <Tab data={tableData} />
        ) : (
          <Form onAddPerson={handleAddPerson} />
        )}
      </div>
    </div>
  )
}

export default App
