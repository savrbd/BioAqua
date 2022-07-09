import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getUserId } from "../services/localStorage.service";
import NavProfile from "./navProfile";
// import label from "../images/label.jpg"

const NavBar = () => {
  const userId = getUserId()
  const { currentUser } = useAuth();
  return (
    <>
      <div className="d-flex justify-content-center" style={{ backgroundColor: "#004357" }}>
          <Link className="" aria-current="page" to="/">    
            <img className="" src="https://static.insales-cdn.com/assets/1/5148/996380/1638193246/logo.png" alt="" />
          </Link>
          <div className="position-absolute end-0 me-3 mt-1">
          {currentUser ? (
            <NavProfile />
            ) : (
            <Link className="nav-link text-light display-6" to="/login">
              Вход
            </Link>
          )}
        </div>
      </div>
      <nav className="navbar navbar-expand-md navbar-dark success" style={{ backgroundColor: "#98c11a" }}>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent" aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-between" id="navContent">
          <ul className="nav">
            <div className="d-md-flex flex-row align-items-center">
              <Link className="nav-link text-light" aria-current="page" to="/" >
                Главная
              </Link>
              <Link className="nav-link text-light" aria-current="page" to="/products">
                Каталог
              </Link>
              <Link className="nav-link text-light" to="brend">
                Бренд
              </Link>
              {userId==="sqI86df06HTH3LY18OXT6kB1VCW2"? <Link className="nav-link text-light" aria-current="page" to="/initialize">
                Инициализация
              </Link>:null}
              {userId==="sqI86df06HTH3LY18OXT6kB1VCW2" ?
              <Link className="nav-link text-light" aria-current="page" to="/admin">
                Админ.
              </Link>:null}
            </div>
          </ul>
        </div>
        
          
      </nav>
    </>
    
    
  );
};

export default NavBar;
