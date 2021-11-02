import React, {MouseEvent, ChangeEvent, useState, useRef} from 'react';
import {v1} from 'uuid';
import s from './App.module.css'
import {PostList} from "./components/PostList";
import {MyButton} from "./components/UI/button/MyButton";
import {MyInput} from "./components/UI/input/MyInput";

export const App = () => {
    const [posts, setPosts] = useState([
        {id: '1', title: 'Javascript', body: 'Description'},
        {id: '2', title: 'Javascript 2', body: 'Description'},
        {id: '3', title: 'Javascript 3', body: 'Description'},
    ])


    const [post, setPost] = useState({title: '', description: ''})

    const addNewPost = (event: MouseEvent) => {
        event.preventDefault()
        setPosts([...posts, {id: v1(), title: post.title, body: post.description}])
        setPost({title: '', description: ''})
    }

    const onChangeInputTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setPost({...post, title: event.currentTarget.value})
    }
    const onChangeInputDescription = (event: ChangeEvent<HTMLInputElement>) => {
        setPost({...post, description: event.currentTarget.value})
    }

    return (
        <div className={s.app}>
            <form>
                <MyInput type={'text'} value={post.title} onChange={onChangeInputTitle} placeholder={'Title post'}/>
                <MyInput type={'text'} value={post.description} onChange={onChangeInputDescription}
                         placeholder={'Description post'}/>
                <MyButton onClick={addNewPost} disabled={false}>Create</MyButton>
            </form>


            <PostList posts={posts} title={'Посты про JS'}/>

        </div>
    );
}



