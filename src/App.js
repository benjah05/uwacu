/*import logo from './logo.svg';*/
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Learning from './components/pages/Learning';
import Shop from './components/pages/Shop';
import AuthPage from './components/pages/AuthPage';
import Profile from './components/pages/Profile';
import LessonView from './components/pages/LessonView';
import ProductView from './components/pages/ProductView';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/AuthPage';

  return (
    <>
    {/* Conditionally render the Navbar */}
    {!isAuthPage && <Navbar />}
    <main><div>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/learning" element={<Learning />}/>
          <Route path="/learning/:id" element={<LessonView />} />
          <Route path="/shop" element={<Shop />}/>
          <Route path="/shop/:id" element={<ProductView />} />
          <Route path="/authPage" element={<AuthPage />}/>
          <Route path="/profile" element={<Profile />}/>
      </Routes>
    </div></main>
    {/* Conditionally render the Footer */}
    {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
