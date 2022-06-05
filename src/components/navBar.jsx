import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import NavProfile from "./navProfile";
// import label from "../images/label.jpg"

const NavBar = () => {
  const { currentUser } = useAuth();
  return (
    <nav class="navbar navbar-expand-md navbar-dark success" style={{ backgroundColor: "#98c11a" }}>
  <img className="m-2 position-absolute end-50 top-0" src="https://static.insales-cdn.com/assets/1/5148/996380/1638193246/logo.png" alt="" />
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent" aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-between" id="navContent">
    <ul className="nav">
    <div className="d-md-flex flex-row align-items-center">
         <Link className="nav-link text-light" aria-current="page" to="/" style={{ Color: "red" }}>
           Главная
         </Link>
         <Link className="nav-link text-light" aria-current="page" to="/products">
           Каталог
         </Link>
         <Link className="nav-link text-light" aria-current="page" to="/initialize">
           Инициализация
         </Link>

       </div>

     </ul>
     <ul className="nav">
        <div className="d-md-flex flex-row align-items-center">
        <Link className="nav-link text-light" aria-current="page" to="/admin">
          Админ.
        </Link>
        {currentUser ? (
          <NavProfile />
        ) : (
          <Link className="nav-link text-light" to="/login">
            Вход/Регистрация
          </Link>
        )}
        </div>
     </ul>
     
    
  </div>
</nav>
    // <nav className="navbar navbar-dark success" style={{ backgroundColor: "#98c11a" }}>
    //   <ul className="nav">
    //     <div className="d-flex flex-row align-items-center">
    //       <Link className="nav-link text-light" aria-current="page" to="/" style={{ Color: "red" }}>
    //         Главная
    //       </Link>
    //       <Link className="nav-link text-light" aria-current="page" to="/products">
    //         Каталог
    //       </Link>
    //       <Link className="nav-link text-light" aria-current="page" to="/initialize">
    //         Инициализация
    //       </Link>

    //     </div>

    //   </ul>
    //   <h4 className=" m-2 text-light" ><img src="https://static.insales-cdn.com/assets/1/5148/996380/1638193246/logo.png" alt="" /> </h4>
    //   <div className="d-flex flex-row align-items-center">
    //     <Link className="nav-link text-light" aria-current="page" to="/admin">
    //       Админ.
    //     </Link>
    //     {currentUser ? (
    //       <NavProfile />
    //     ) : (
    //       <Link className="nav-link text-light" to="/login">
    //         Вход/Регистрация
    //       </Link>
    //     )}
    //   </div>
    // </nav>
    
  );
};

export default NavBar;
