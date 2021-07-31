import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter } from "react-router-dom";
import Header from './Component/Header';

const  App = () => {
  return (
    <>
    <BrowserRouter>
        <Header/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
