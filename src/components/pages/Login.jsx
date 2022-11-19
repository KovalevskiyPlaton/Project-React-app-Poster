//Это приложение - реализация видеоурока на YouTube канале Ulbi TV ссылка: https://www.youtube.com/watch?v=GNrdg3PzpJQ
import React, { useContext } from "react";
import { AuthContext } from "../context";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const Login =()=>{
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event=>{
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return(
        <div style={{margin: 'center'}}>
            <h1>Страницы для логина</h1>
            <form  onSubmit={login}>
                <MyInput type='text' placeholder='Введите логин'/>
                <MyInput type='text' placeholder='Введите пароль'/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    )
}

export default Login;