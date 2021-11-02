import React, {useState} from 'react';
import s from './App.module.css'
import {PostList} from "./components/PostList";
import {PostForm} from "./components/PostForm";
import {PostItemType} from "./components/PostItem";

export const App = () => {
    const [posts, setPosts] = useState<Array<PostItemType>>([
        {id: '1', title: 'Javascript', body: 'Description'},
        {id: '2', title: 'Javascript 2', body: 'Description'},
        {id: '3', title: 'Javascript 3', body: 'Description'},
    ])

    const createPost = (post: PostItemType) => {
        setPosts([...posts, post])
    }


    return (
        <div className={s.app}>
            <PostForm createPost={createPost}/>


            <PostList posts={posts} title={'Посты про JS'}/>

        </div>
    );
}



