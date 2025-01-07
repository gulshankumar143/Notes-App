
import './App.css'
import Heading from './Components/Heading.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
// import Spinner from './Components/Spinner.jsx';

function App() {

  return (
    <Router>
      <div>
        <Heading />

      {/* <Spinner/>   */}
      </div>
    </Router>
   
  )
}

export default App
