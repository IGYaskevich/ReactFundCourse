import React, {useState} from 'react';
import {PostList} from "./components/PostList";
import {PostForm} from "./components/PostForm";
import {PostType} from "./components/PostItem";
import {PostFilter} from "./components/PostFilter";
import {MyModal} from "./components/UI/MyModal/MyModal";
import {MyButton} from "./components/UI/button/MyButton";
import {sorts, usePosts} from "./hooks/useSortedPost";
import style from './App.module.css'

export const App = () => {
    const [posts, setPosts] = useState<Array<PostType>>([
        {id: '1', title: 'JavaScript', body: 'Best', sort: 'none'},
        {id: '2', title: 'JavaScript 2', body: 'Good', sort: 'none'},
        {id: '3', title: 'JavaScript', body: 'OH', sort: 'none'},
    ])

    const [filter, setFilter] = useState<{ sort: sorts, query: string }>({sort: 'sort', query: ''})
    const [modal, setModal] = useState<boolean>(false)

    const createPost = (post: PostType) => {
        setPosts([...posts, post])
        setModal(false)
    }
    const removePost = (postId: string) => {
        setPosts(posts.filter(item => item.id !== postId))
    }
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)


    return (
        <div className={style.app}>
            <MyButton disabled={false} onClick={() => setModal(true)}>Create post</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm createPost={createPost}/>
            </MyModal>
            {/*<PostForm createPost={createPost}/>*/}
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList removePost={removePost} posts={sortedAndSearchedPosts} title={'Посты про JS'}/>
        </div>
    );
}



