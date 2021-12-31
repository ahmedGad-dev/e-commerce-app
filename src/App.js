import './App.css';
import HomePage from './pages/home/HomePage';
import {Route, Switch} from 'react-router-dom'
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInUp from './pages/signIn-signUp/SignInUp';
import CheckOut from './pages/checkout/CheckOut';
function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>  
        <Route exact path = '/shop' component={Shop}/>
        <Route exact path= '/signin' component={SignInUp}/>
        <Route exact path= '/checkout' component={CheckOut}/>
      </Switch>
    </div>
  );
}

export default App;
