import HeadFoot from './Components/HeadFoot'
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Components/Home'
import Printers from './Components/Printers';
import About from './Components/About';
import Contact from './Components/Contact';
import SinglePrinterDetail from './Components/SinglePrinterDetail';
import Edit from './Components/Edit';
import AddNew from './Components/AddNew';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HeadFoot />}>
          <Route path='/D_Printer' element={<Home />}></Route>
          <Route path='/Printers' element={<Printers />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Edit' element={<Edit />}></Route>
          <Route path='/AddNew' element={<AddNew />}></Route>
          <Route path='/Printers/SinglePrinterDetail/:id' element={<SinglePrinterDetail />}></Route>
          <Route path='/Printers/SinglePrinterDetail/:id/Edit' element={<Edit />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
