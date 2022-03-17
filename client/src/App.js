import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import Landing from "./pages/Landing";
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Dashboard />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
