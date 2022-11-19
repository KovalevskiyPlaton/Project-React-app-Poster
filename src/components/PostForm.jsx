     //Это приложение - реализация видеоурока на YouTube канале Ulbi TV ссылка: https://www.youtube.com/watch?v=GNrdg3PzpJQ
      import React from "react";
      import MyInput from '../components/UI/input/MyInput'
      import MyButton from "./UI/button/MyButton";
      import { useState } from "react";

      const PostForm = ({create})=>{
        const [post, setPost]=useState({title:'', body:''})

        const addNewPost = (e)=>{

          e.preventDefault();
          const newPost ={
              ...post, 
              id: Date.now()
          }
          create(newPost)
          setPost({title: '', body:''});
     }   
        return(
          <form>
          <MyInput
          type='text' 
          placeholder='Название поста'
          value={post.title}
          onChange={e=>setPost({...post, title: e.target.value})}/>

          <MyInput
          value={post.body}
          onChange={e=>setPost({...post, body: e.target.value})}
          type='text' 
          placeholder='Описание поста'/>
          <MyButton onClick={addNewPost}>Create Post</MyButton>
    </form>
        );
                
      }

      
      
      export default  PostForm