//Это приложение - реализация видеоурока на YouTube канале Ulbi TV ссылка: https://www.youtube.com/watch?v=GNrdg3PzpJQ
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const PostIdPage=()=>{
   const [post, setPosts]= useState([])
   const  params = useParams() 
   const [comments, setCommnets]=useState([]);
   const [isLoading, setIsLoading] = useState(false)
   

   useEffect(()=>{
    fetchDataInPost();
    fetchDataComment();
    
   },[])

   const fetchDataInPost = async()=>{
    setIsLoading(true)
     await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then((res)=>res.json())
    .then((data)=>
     setPosts(data)
    )
        .catch((err)=>{
        console.log(err)
    })
    setIsLoading(false)
   }
   const fetchDataComment = async()=>{
    setIsLoading(true)
    await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
   .then((res)=>res.json())
   .then((data)=>setCommnets(data))
       .catch((err)=>{
       console.log(err)
   })
   setIsLoading(false)
  }
   
 

   return(
    
        
          
        <div style={{textAlign:"center"}}>
            <h1>Вы открыли страницу поста с ID = {params.id}</h1>
            {isLoading
            ?<Loader/>
            :    
            <div>{post.id}.{post.title}</div> }
            
            
            <div style={{marginTop: 30}}>
            <h1>Комментарии </h1>
                {isLoading ? 
                <Loader/>
               
                :comments.map(comm=>
                    <div key={comm.id} style={{marginTop: 30}}>
                       
                    <div><h5>{comm.email}</h5></div>
                    <div><h5>{comm.body}</h5></div>
                     </div>
                    )}
                
           
            </div>
        </div>
    )
 
}

export default PostIdPage;






