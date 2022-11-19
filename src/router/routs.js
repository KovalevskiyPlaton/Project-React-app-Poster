//Это приложение - реализация видеоурока на YouTube канале Ulbi TV ссылка: https://www.youtube.com/watch?v=GNrdg3PzpJQ
import About from "../components/pages/About";
import Erorr from "../components/pages/Erorr";
import PostIdPage from "../components/pages/PostIdPages";
import Posts from "../components/pages/Posts";
import Login from "../components/pages/Login";

export const privateRoutes=[
    {path: '/about/*', element:<About/>},
    {path: '/posts/*', element: <Posts/>},
    {path: '/posts/:id/*', element: <PostIdPage/>},
    {path: '*', element: <Erorr/>}
    
]

export const  publicRoutes =[
    {path: '*', element:<Login/>},
    
    
]

