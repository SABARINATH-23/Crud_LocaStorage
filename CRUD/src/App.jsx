import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Create from './components/Create';
import Update from './components/Update';
const App = ()=>{

  return(
    <>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route element={<Home/>} path='/'></Route>
          <Route element={<Create/>} path='/create'></Route>
          <Route element={<Update/>} path='/update/:id'></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;