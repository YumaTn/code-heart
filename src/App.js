import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import HeartAnimation from './Heart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Heart' element={<HeartAnimation/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
