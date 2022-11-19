//Это приложение - реализация видеоурока на YouTube канале Ulbi TV ссылка: https://www.youtube.com/watch?v=GNrdg3PzpJQ
import React, { useContext } from "react";
import s from '../../UI/navBar/NavBar.module.css'
import { NavLink } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../context";


const Navbar = ()=>{

const {isAuth, setIsAuth}=useContext(AuthContext);

const logout =()=>{
    setIsAuth(false);
    localStorage.removeItem('auth')
    
}
    return(
        <div>
                <div className='navbar'>
                    <MyButton onClick={logout}>Выйти</MyButton>
                    <div className='navbar__links'>
                        <NavLink to='/about' className={ (navData) => navData.isActive ? s.active : s.item }>About site</NavLink>
                        <NavLink to='/posts' className={ (navData) => navData.isActive ? s.active : s.item }>Posts</NavLink>
                    </div> 
                </div>
        </div>
    );
};

export default Navbar;