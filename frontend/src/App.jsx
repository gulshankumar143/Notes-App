
import './App.css'
import Heading from './Components/Heading.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Heading />} />
      </Routes>
    </Router>
  )
}

export default App
