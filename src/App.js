
import './App.css';
import Home from './Component/Home/Home';
import Service from './Component/Service/Service';
import Login from "./Component/Login/Login";
import Registration from "./Component/Registration/Registration";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="service" element={<Service />}/>
          <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration/>}/>
    
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
