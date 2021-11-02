import React, {ChangeEvent, MouseEvent, useCallback, useState} from 'react';
import {MyInput} from "./UI/input/MyInput";
import {MyButton} from "./UI/button/MyButton";
import {v1} from "uuid";
import {PostItemType} from "./PostItem";

type PostFormType = {
    createPost: (post: PostItemType) => void
}
export const PostForm = React.memo<PostFormType>(({createPost}) => {
    const [post, setPost] = useState({title: '', description: ''})

    const onChangeTitle = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setPost({...post, title: event.currentTarget.value})
    }, [post, setPost])
    const onChangeDescription = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setPost({...post, description: event.currentTarget.value})
    }, [post, setPost])

    const addNewPost = useCallback((event: MouseEvent) => {
        event.preventDefault()
        createPost({id: v1(), title: post.title, body: post.description})
        setPost({title: '', description: ''})
    }, [createPost, post.description, post.title])

    return (
        <form>
            <MyInput type={'text'} value={post.title} onChange={onChangeTitle} placeholder={'Title post'}/>
            <MyInput type={'text'} value={post.description} onChange={onChangeDescription}
                     placeholder={'Description post'}/>
            <MyButton onClick={addNewPost} disabled={false}>Create</MyButton>
        </form>

    );
});

