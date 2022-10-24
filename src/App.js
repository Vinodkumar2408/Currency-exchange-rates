import  React from 'react';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Exchange from './components/Exchange';





function App() {
  return(
    <BrowserRouter>
      
        <Routes>
        <Route path='/' element={<Home/>}>
        
        </Route>
         <Route path='/exchange' element={<Exchange/>}>
        
         </Route>
        </Routes>


    </BrowserRouter>
    
  )
  
}

export default App;
