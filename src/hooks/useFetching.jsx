//Это приложение - реализация видеоурока на YouTube канале Ulbi TV ссылка: https://www.youtube.com/watch?v=GNrdg3PzpJQ
import { useState } from "react"

export const useFetching =(callbcak)=>{
    const [isLoading, setIsLoading]=useState(false);
    const [erorr, setError ] = useState('');

    const fetching = async ()=>{
         try{
             setIsLoading(true);
             await  callbcak();
         }catch(e){
             setError(e.message);
         }finally{
        setIsLoading(false)
         }
    }
    
    return [fetching, isLoading, erorr ]

}

