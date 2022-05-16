import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import NavProfile from "./navProfile";

const NavBar = () => {
  const { currentUser } = useAuth();
  return (
    <nav className="navbar navbar-dark success" style={{ backgroundColor: "#98c11a" }}>
      <ul className="nav">
        <div className="d-flex flex-row align-items-center">
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
      <h4 className=" m-2 text-light" ><img src="https://static.insales-cdn.com/assets/1/5148/996380/1638193246/logo.png" alt="" /> </h4>
      <div className="d-flex flex-row align-items-center">
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
    </nav>
  );
};

export default NavBar;
