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
  
  
  

  
  render (){
    
    return (
      <div className='App'>
        
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories'  >
            <Route path=':type' element={<Categories />}>
              <Route path="details" >
                <Route path=':service_id' element={<OffCanvas show={true} />}/>
              </Route>

            </Route>
          </Route>
        </Routes>
      </div>
    );
  }

}


export default App;
