//Это приложение - реализация видеоурока на YouTube канале Ulbi TV ссылка: https://www.youtube.com/watch?v=GNrdg3PzpJQ
    import React, { useState, useEffect, useRef } from 'react'
    import MyModal from '../MyModal/MyModal';
    import PostFilter from '../PostFilter';
    import PostForm from '../PostForm';
    import { usePost } from '../../hooks/usePost';
    import MyButton from '../UI/button/MyButton';
    import PostService from '../API/PostService';
    import Loader from '../Loader/Loader';
    import { useFetching } from '../../hooks/useFetching';
    import { getPageCount} from '../utils/pages';
    import Pagination from '../pagination/Pagination';
    import PostList from '../PostList';
    
    function Posts() {
            const [posts, setPosts] = useState([]);
            const [filter, setFilter] = useState({ sort: '', query: '' });
            const [modal, setModal] = useState(false);
            const [totalCount, setTotalCount] = useState(0);
            const [totalPages, setTotalPages] = useState(0);
            const [limit, setLimit] = useState(10);
            const [page, setPage] = useState(1);
            const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query);
            const lastElement=useRef()
            const observer=useRef()
         
               

            useEffect(() => {
                fetchPosts(limit, page);
            }, [page]);
        
            const [fetchPosts, isPostsLoading, postErorr] = useFetching(async () => {
                const response = await PostService.getAll(limit, page); 
                setPosts([...posts, ...response.data]);
                const totalCount = response.headers['x-total-count'];
                setTotalPages(getPageCount(totalCount, limit));
            });

            useEffect(()=>{
                if(isPostsLoading) return;
                if(observer.current) observer.current.disconnect();
                var callback = (entries, observer)=>{
                      if(entries[0].isIntersecting&& page<totalPages){
                          setPage(page+1)
                      }
                                            }           
                      
                    observer.current = new IntersectionObserver(callback);
                    observer.current.observe(lastElement.current)
            }, [isPostsLoading])

            const createPost = (newPost) => {
                setPosts([...posts, newPost]);
                setModal(false);
            };

                    const removePost = (post) => {
                setPosts(posts.filter(p => p.id !== post.id));
            };

            const changePage = (page) => {
                setPage(page);

            };

            return (
                <div className='App'>
                    <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
                        Создать ПОСТ
                    </MyButton>
                    <MyModal visible={modal} setVisible={setModal}>
                        <PostForm create={createPost} />
                    </MyModal>
                    <hr style={{ margin: '15px 0' }} />
                    <PostFilter filter={filter}
                        setFilter={setFilter} />
                    {postErorr &&
                        <h1>Произошла ошибка</h1>}
                        <PostList posts={sortedAndSearchedPosts} title={'Посты про JS'} remove={removePost} />
                        <div style={{height:20, background:'red'}} ref={lastElement}/>
                    {isPostsLoading&&
                         <div style={{ display: 'flex', justifyContent: 'center' }}><Loader /></div>
                    }
                    <Pagination
                        page={page}
                        changePage={changePage}
                        totalPages={totalPages} 
                        />
                </div>

            );
        }
   

export default Posts;