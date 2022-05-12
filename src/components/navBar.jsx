import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import NavProfile from "./navProfile";

const NavBar = () => {
  const { currentUser } = useAuth();
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
      <ul className="nav">
        <div className="d-flex flex-row align-items-center">
          <Link className="nav-link active" aria-current="page" to="/">
            Главная
          </Link>
          <Link className="nav-link active" aria-current="page" to="/initialize">
            Инициализация
          </Link>

        </div>

      </ul>
      <h4 className="m-2">Online store </h4>
      <div className="d-flex flex-row align-items-center">
        <Link className="nav-link active" aria-current="page" to="/admin">
          Админ.
        </Link>
        {currentUser ? (
          <NavProfile />
        ) : (
          <Link className="nav-link" to="/login">
            Вход/Регистрация
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
