import { Route, Routes } from 'react-router-dom';

// PAGES
import { Home, Policy } from './pages';

// STYLESHEET
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </div>
  );
}

export default App;
