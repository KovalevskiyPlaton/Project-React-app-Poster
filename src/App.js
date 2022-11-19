//Это приложение - реализация видеоурока на YouTube канале Ulbi TV ссылка: https://www.youtube.com/watch?v=GNrdg3PzpJQ
import React, { useEffect, useState } from 'react'
import './styles/App.css';
import Navbar from './components/UI/navBar/NavBar';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './components/context';

setTimeout(alert('Это приложение - реализация видеоурока на YouTube канале Ulbi TV ссылка: https://www.youtube.com/watch?v=GNrdg3PzpJQ'), 500)

export const App=()=>{
  const [isAuth, setIsAuth] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem('auth')){
        setIsAuth(true)
    }
  }, [])



    return(

              <div>

                <AuthContext.Provider value={{
                  isAuth,
                  setIsAuth
                }}>
            <BrowserRouter>
                 <Navbar/>
                 <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
                
               
                 
           
              </div>
    )
}



export default App;
