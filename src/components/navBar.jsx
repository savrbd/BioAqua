import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getUserId } from "../services/localStorage.service";
import NavProfile from "./navProfile";
// import label from "../images/label.jpg"

const NavBar = () => {
  const userId = getUserId()
  console.log(userId)
  const { currentUser } = useAuth();
  return (
    <nav class="navbar navbar-expand-md navbar-dark success" style={{ backgroundColor: "#98c11a" }}>
      <Link className="m-2 position-absolute end-50 top-0 " aria-current="page" to="/">    
        <img className="" src="https://static.insales-cdn.com/assets/1/5148/996380/1638193246/logo.png" alt="" />
      </Link>
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
            {userId==="bPUy4xwlSeR76bV9msS5u2brV522"? <Link className="nav-link text-light" aria-current="page" to="/initialize">
              Инициализация
            </Link>:null}
          </div>
        </ul>
        <ul className="nav">
            <div className="d-md-flex flex-row align-items-center">
            {userId==="bPUy4xwlSeR76bV9msS5u2brV522" ?
            <Link className="nav-link text-light" aria-current="page" to="/admin">
              Админ.
            </Link>:null}
            
            </div>
        </ul>
      </div>
      <div className="me-3">
        {currentUser ? (
          <NavProfile />
          ) : (
          <Link className="nav-link text-light" to="/login">
            Вход
          </Link>
        )}
      </div>
         
    </nav>
  );
};

export default NavBar;
