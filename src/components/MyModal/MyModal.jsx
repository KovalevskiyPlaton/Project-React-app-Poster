//Это приложение - реализация видеоурока на YouTube канале Ulbi TV ссылка: https://www.youtube.com/watch?v=GNrdg3PzpJQ
import React from "react";
import cl from './MyModal.module.css'

const MyModal = ({children, visible, setVisible})=>{
   
    const rootClasses = [cl.myModal]
    if (visible){
        rootClasses.push(cl.active);
    }

    return(
        <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e)=>e.stopPropagation()}>
                        {children}
                        
            </div>
        </div>
    )
}

export default MyModal