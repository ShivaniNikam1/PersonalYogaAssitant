
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';
import Blogs from './components/Blogs/Blogs';
import YogaDetection from './components/YogaDetection/YogaDetection';
import PosePage from './components/Poses/PosePage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/poses' element={<PosePage/>}/>
      <Route path='/yogaDetection' element={<YogaDetection/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
