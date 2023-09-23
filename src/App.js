import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import{BrowserRouter, Routes, Router, Link} from "react-router-dom";
import Homescreen from './screens/Homescreen';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
        {/* Correct usage of Route */}
        <Routes path="/" element component={<Homescreen />} />
     
      <BrowserRouter>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
