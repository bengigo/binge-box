import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Shows from './Components/Shows';
import SearchField from './Components/SearchField';
import ShowDetails from './Components/ShowDetails';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <SearchField />
        <Routes>
          <Route path="/" element={<Shows />} />
          <Route path="/ShowDetails" element={<ShowDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
