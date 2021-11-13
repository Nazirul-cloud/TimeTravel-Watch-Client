import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Explore from "./Pages/Explore/Explore";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Registation from "./Pages/Login/Registation/Registation";
import Purchase from "./Pages/Purchase/Purchase";







function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            {/* <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute> */}
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Registation />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path='/purchase'>
              <Purchase/>
            </PrivateRoute>
            <PrivateRoute path='/myorders'>
              <MyOrders/>
            </PrivateRoute>
            <PrivateRoute path='/addReview'>
              <AddReview/>
            </PrivateRoute>
            <PrivateRoute path='/payment'>
              <Payment/>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
