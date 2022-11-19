//Это приложение - реализация видеоурока на YouTube канале Ulbi TV ссылка: https://www.youtube.com/watch?v=GNrdg3PzpJQ
import React, { useContext } from "react";
import {Routes, Route,} from 'react-router-dom'
import { privateRoutes, publicRoutes } from "../router/routs";
import { AuthContext } from "./context";

const AppRouter =()=>{
    const {isAuth, setIsAuth} = useContext(AuthContext);
              return(
            <div>   
                {isAuth 
                  ? 
                  <Routes>
                  {privateRoutes.map(route=>
                      <Route 
                      path={route.path}
                      element={route.element}
                        key={route.path}
                      />
                  )}
                  </Routes>
                  :
                  <Routes>
                  {publicRoutes.map(route=>
                    <Route 
                    path={route.path}
                    element={route.element}
                    key={route.path}
                    />
                    )}
                    </Routes> 
          }
                        
              </div>
    )
        

}


export default AppRouter

