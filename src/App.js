import HeadFoot from './Components/HeadFoot'
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Components/Home'
import Printers from './Components/Printers';
import Laptops from './Components/Laptops';
import About from './Components/About';
import Contact from './Components/Contact';
import SinglePrinterDetail from './Components/SinglePrinterDetail';
import SingleLaptopDetail from './Components/SingleLaptopDetail';
import Edit from './Components/Edit';
import EditLaptop from './Components/EditLaptop';
import AddNew from './Components/AddNew';
import AddNewLaptop from './Components/AddNewLaptop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HeadFoot />}>
          <Route path='/D_Printer' element={<Home />}></Route>
          <Route path='/D_Printer/Printers' element={<Printers />}></Route>
          <Route path='/D_Printer/Laptops' element={<Laptops />}></Route>
          <Route path='/D_Printer/About' element={<About />}></Route>
          <Route path='/D_Printer/Contact' element={<Contact />}></Route>
          <Route path='/D_Printer/Edit' element={<Edit />}></Route>
          <Route path='/D_Printer/AddNew' element={<AddNew />}></Route>
          <Route path='/D_Printer/AddNewLaptop' element={<AddNewLaptop />}></Route>
          <Route path='/D_Printer/Printers/SinglePrinterDetail/:id' element={<SinglePrinterDetail />}></Route>
          <Route path='/D_Printer/Printers/SinglePrinterDetail/:id/Edit' element={<Edit />}></Route>
          <Route path='/D_Printer/Laptops/SingleLaptopDetail/:id' element={<SingleLaptopDetail />}></Route>
          <Route path='/D_Printer/Laptops/SingleLaptopDetail/:id/EditLaptop' element={<EditLaptop />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
