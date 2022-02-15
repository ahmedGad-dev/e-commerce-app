import './App.css';
import HomePage from './pages/home/HomePage';
import {Route, Routes} from 'react-router-dom'
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInUp from './pages/signIn-signUp/SignInUp';
import CheckOut from './pages/checkout/CheckOut';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route  path='/' element={<HomePage/>}/>  
        <Route  path = '/shop' element={<Shop/>}/>
        <Route  path= '/signin' element={<SignInUp/>}/>
        <Route  path= '/checkout' element={<CheckOut/>}/>      
      </Routes>
    </div>
  );
}

export default App;
