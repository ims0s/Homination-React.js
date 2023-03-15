// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import NavBar from './components/nav-bar/nav-bar.component.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Categories from './routes/categories/categories.component';
import OffCanvas from './components/offcanvas/offcanvas.component';

class App extends Component{
  
  
  constructor(){
    super();
    
  }

  
  render (){
    
    return (
      <div className='App'>
        <Routes>
          
            <Route path='/' element={<HomePage />} />
          
        </Routes>
        
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} >
            <Route path="categories/details" element={<OffCanvas show={true} />}/>
          </Route>
        </Routes>
      </div>
    );
  }

}


export default App;
