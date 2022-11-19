//Это приложение - реализация видеоурока на YouTube канале Ulbi TV ссылка: https://www.youtube.com/watch?v=GNrdg3PzpJQ
import React from "react";

const About =()=>{
    let textAb = 'Это приложние  создано в качестве обучения. видеоурок на YouTube канале от Ulbi TV'
    return(
       <h1>
            {textAb.toLocaleUpperCase()}
        </h1>
       
    )
}

export default About