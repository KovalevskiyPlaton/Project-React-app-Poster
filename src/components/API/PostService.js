//Это приложение - реализация видеоурока на YouTube канале Ulbi TV ссылка: https://www.youtube.com/watch?v=GNrdg3PzpJQ
import axios from 'axios'
import React, { useState, useEffect} from 'react';


export default class PostService {
    static async getAll(limit=10, page=1 ){
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                params:{
                    _limit: limit,
                    _page: page
                }
            });
            return response
   }

}



















