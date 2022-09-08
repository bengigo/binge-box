import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Shows from './Components/Shows';
import ShowDetails from './Components/ShowDetails';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Shows />} />
          <Route path="/ShowDetails/:id" element={<ShowDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
