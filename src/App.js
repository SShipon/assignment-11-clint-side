import { BrowserRouter ,Switch, Route} from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About/About';
import Contact from './Pages/Home/Contact/Contact';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/Home/serviceDetails/ServiceDetails';
import Login from './Login/Login'
import NotFound from './Pages/NotFound/NotFound'
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Hooks/PrivateRoute';
import Footer from './Pages/Home/Footer/Footer';
import Destination from './Pages/Home/Destination/Destination';
import AddService from './Pages/AddService/AddService';



function App() {
  return (
     <div className="App">
      <AuthProvider>
       <BrowserRouter>
        <Header />
         
         <Switch>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route exact path="/home">
             <Home></Home>
          </Route>
          <PrivateRoute exact path="/destination">
             <Destination></Destination>
          </PrivateRoute>
         <Route exact path="/about">
             <About></About>
          </Route>
          <Route exact path="/contact">
             <Contact></Contact>
          </Route>
          <PrivateRoute exact path="/services/:serviceId">
             <ServiceDetails></ServiceDetails>
          </PrivateRoute>
         <Route path="/addService" >
            
         <AddService></AddService>
         </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
          <NotFound></NotFound>
          </Route>
         </Switch>
         <Footer></Footer>
       </BrowserRouter>
       </AuthProvider> 
    </div>
   
  );
}

export default App;
