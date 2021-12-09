import './App.css';
import HomePage from './pages/HomePage';
import {Route, Switch} from 'react-router-dom'

const hatsPage = (props) => {
  console.log(props)
 return <h1>Hats</h1>}


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>  
        <Route exact path='/hats' component={hatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
