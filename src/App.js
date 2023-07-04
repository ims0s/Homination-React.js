// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import NavBar from './components/nav-bar/nav-bar.component.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Categories from './routes/categories/categories.component';
import OffCanvas from './components/offcanvas/offcanvas.component';
import Login from './routes/Login/login.component'
import Register from './routes/register/register.component'
import Proposals from "./routes/proposals/proposals.component"
import ReviewForm from './routes/reviewForm/reviewForm.component';
class App extends Component{
  
  render (){
    
    return (
      <div className='App'>
        
        
        <Routes>
          <Route path='/' element={<NavBar />}>

            <Route index element={<Home />} />
            <Route path='/categories'  >
              <Route path=':type' element={<Categories />}>
                <Route path="details" >
                  <Route path=':service_id' element={<OffCanvas show={true} />}/>
                </Route>

              </Route>
            </Route>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/proposals' element={<Proposals/>} >
            <Route path='review' >
              <Route path=':provider' element={<ReviewForm show={true}/>} />

            </Route>
          </Route>
          </Route>
        </Routes>
      </div>
    );
  }

}


export default App;
