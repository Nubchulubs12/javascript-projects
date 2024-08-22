import { useState } from 'react'
import './App.css'
import ShoeButton from './components/ShoeButton';
import ReportForm from './components/ReportForm';

function App() {

  return (
    <>
      <div className="App">
	  <ShoeButton />
	  <ReportForm />
      </div>
    </>
  )
}

export default App
