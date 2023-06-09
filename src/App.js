
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

function App() {
  const user = localStorage.getItem("token")
  return (
    <Routes>
        {user && 
            <Route path='/' exact element={<Home/>}></Route>}
      <Route path='/signup' exact element={<Signup/>}></Route>
      <Route path='/login' exact element={<Login/>}></Route>
      <Route path='/' exact element={<Navigate replace to='/login'/>}></Route>
    </Routes>
  );
}

export default App;
