import React, { useEffect } from "react";
import NavBar from "./components/navBar";
import Login from "./layouts/login";
import MainPage from "./layouts/mainPage";
import Registration from "./layouts/registration";
import AdminPage from "./layouts/adminPage";
// import { CategoryProvider } from "./hooks/useCategory";
import { ProductsProvider } from "./hooks/useProducts";
import { AuthProvider } from "./hooks/useAuth";
import LogOut from "./layouts/logOut";
import UserPage from "./components/userPage";
import { Route, Routes } from "react-router-dom";
import Initialize from "./layouts/initialize";
import { useDispatch } from "react-redux";
import { loadCategoryList } from "./store/category";

function App() {
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCategoryList());
    }, []);
  return (
    <>
      <AuthProvider>
        <NavBar />
        {/* <CategoryProvider> */}
          <ProductsProvider>
            <Routes>
              <Route path="/logout" element={<LogOut/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/registration" element={<Registration/>} />
              <Route path="/admin" element={<AdminPage/>} />
              <Route path="/initialize" element={<Initialize/>} />
              <Route path="/user/:userId?" element={<UserPage/>}/>
              <Route path="*" element={<MainPage/>} />
            </Routes>
          </ProductsProvider>
        {/* </CategoryProvider> */}
      </AuthProvider>
      
    </>
  );
}

export default App;
