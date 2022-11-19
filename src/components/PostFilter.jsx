//Это приложение - реализация видеоурока на YouTube канале Ulbi TV ссылка: https://www.youtube.com/watch?v=GNrdg3PzpJQ
import React from "react";
import MySelect from "./UI/selsect/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter})=>{
    return(
            
            <div>
                  <MyInput placeholder='Поиск...'
                  value={filter.query}
                  onChange = {e=>setFilter({...filter, query:e.target.value})}
                  />
                  <MySelect
                      value={filter.sort}
                      onChange={selectedSort =>setFilter({...filter, sort:selectedSort})}
                      defaultValue={'Сортиврока по'}
                      options={[
                        {value: 'title', name:'По названию'},
                        {value: 'body', name:'По описанию'}
                     ]}
                />
             </div>
            
    )
}

export default PostFilter