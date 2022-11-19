//Это приложение - реализация видеоурока на YouTube канале Ulbi TV ссылка: https://www.youtube.com/watch?v=GNrdg3PzpJQ
import React,{useState} from "react";


const Counter =()=>{
   
    const [count, setCount] = useState(5)

    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    return (
        
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
        
    );
}

export default Counter