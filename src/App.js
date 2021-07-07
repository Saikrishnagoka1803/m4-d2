//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNavBar from './navbar';
import MyJumbotron from './jumbotron';
import Myfooter from './footer';
import Cards from './cards';

function App() {
  return (
    <>
   <MyNavBar />
   <MyJumbotron />
   <Cards />
    <Myfooter />
    
   
    </>
  );
}

export default App;
