//Это приложение - реализация видеоурока на YouTube канале Ulbi TV ссылка: https://www.youtube.com/watch?v=GNrdg3PzpJQ
import React from "react";
import s from '../button/MyButton.module.css'

const MyButton =({children, ...props})=>{
   
    
    return (
      <button  {...props} className={s.myButton}>
            {children}
      </button>  
    );
}

export default MyButton