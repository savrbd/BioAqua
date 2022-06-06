import React, { useEffect } from "react";
import NavBar from "./components/navBar";
import Login from "./layouts/login";
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
import ProductsPage from "./layouts/productsPage";
import MainPage from "./layouts/mainPage";
import Brend from "./layouts/brend";

function App() {
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCategoryList());
    }, []);
  return (
    <div style={{backgroundColor: "#f6f6f6"}}>
      <AuthProvider>
        <NavBar />
        {/* <CategoryProvider> */}
          <ProductsProvider>
            <Routes>
              <Route path="logout" element={<LogOut/>} />
              <Route path="login" element={<Login/>} />
              <Route path="registration" element={<Registration/>} />
              <Route path="admin" element={<AdminPage/>} />
              <Route path="initialize" element={<Initialize/>} />
              <Route path="brend" element={<Brend/>} />
              <Route path=":userId" element={<UserPage/>}/>
              <Route path="products/*" element={<ProductsPage/>} />
              <Route path="/" element={<MainPage/>} />
            </Routes>
          </ProductsProvider>
        {/* </CategoryProvider> */}
      </AuthProvider>
      
    </div>
  );
}

export default App;
