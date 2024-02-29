
import './App.css';
import Admin from './components/Admin';
import Add from './components/Add';
import View from './components/View';
import Edit from './components/Edit';
import PagenotFound from './PagenotFound';
import {Route,Routes} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
      <Routes>


        <Route path='/'  element={<Admin/>}></Route>
        <Route  path='add'  element={<Add/>}> </Route>
        <Route path='edit/:id'  element={<Edit/>}> </Route>
        <Route  path='view/:id'  element={<View/>}> </Route>
        <Route  path='login'  element={<Login></Login>}> </Route>
        <Route  path='sign'  element={ <Signup></Signup>}> </Route>



      <Route  path={'*'} element={<PagenotFound/>}> </Route>


      </Routes> 

    </div>
  );
}

export default App;
