import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./app/screens/auth/Login";
import Home from "./app/screens/Home";
import SignUp from "./app/screens/auth/SignUp";
import NavBar from "./app/components/NavBar";
import NotFound from "./app/screens/NotFound";
import Products from "./app/screens/Products";
import Orders from "./app/screens/Orders";
import Loader from "./app/components/Loader";

import {  useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { loading } = useSelector((e) => e.loadingReducers);
  const { user } = useSelector((e) => e.userReducers);

  return (
    
    <BrowserRouter>
      <Toaster />
      {loading ? <Loader /> : null}
      {user ? <NavBar /> : null}
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/products"
          element={user ? <Products /> : <Navigate to="/login" />}
        />
        <Route
          path="/orders"
          element={user ? <Orders /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
