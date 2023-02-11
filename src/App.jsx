import './App.css';
import { Routes, Route } from 'react-router-dom'
import QrPage from './pages/QrPage';
import Movies from './pages/Movies';
import Layout from './pages/components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<QrPage />} />
        <Route path="movies/:id" element={<Movies />} />
      </Route>
    </Routes>
  );
}

export default App;
