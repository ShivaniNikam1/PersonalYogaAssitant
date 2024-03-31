
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';
import Blogs from './components/Blogs/Blogs';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
