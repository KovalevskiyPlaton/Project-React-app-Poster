//Это приложение - реализация видеоурока на YouTube канале Ulbi TV ссылка: https://www.youtube.com/watch?v=GNrdg3PzpJQ
import React from "react";
import classesStyle from '../input/MyInput.module.css'

const MyInput =React.forwardRef((props, ref)=>{
   return (
      <input  ref={ref} {...props} className={classesStyle.myInput}/> 
    );
});

export default MyInput