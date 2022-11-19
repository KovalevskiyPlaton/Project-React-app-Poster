//Это приложение - реализация видеоурока на YouTube канале Ulbi TV ссылка: https://www.youtube.com/watch?v=GNrdg3PzpJQ
import React from "react";
      import MyButton from "./UI/button/MyButton";
      //import s from '../components/UI/button/MyButton.module.css'
      import {useNavigate} from "react-router-dom"
      const PostItem = (props)=>{
        const router = useNavigate(1) ;
        
        
        let goToId=()=>{
                router(`/posts/${props.post.id}`)
        }
        return(
               <div className='post'>
                        <div className='post__content'>
                                <strong>{props.number}.{props.post.title}</strong>
                                <div>
                                        {props.post.body}
                                </div>
                        </div>
                        <div className='post__btns'>
                                <MyButton  onClick={()=>goToId()}>
                                                Открыть
                                </MyButton>
                                <MyButton  onClick={()=>props.remove(props.post) }>
                                                Удалить
                                </MyButton>
                        </div>
                </div>
        )
                
      }

      
      
      export default  PostItem