import {  Route , Routes, Navigate} from 'react-router-dom';
import Main from './pages/Main';
import Exchanges from './pages/Exchanges'
import Layout from './components/Layout'
import CoinPage from './pages/CoinPage';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Main/>}/>
      <Route path="exchanges" element={<Exchanges/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
      <Route path="/coin/:id" element={<CoinPage />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
