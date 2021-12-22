import React from 'react';
import s from "../App.module.css";
import {MyButton} from "./UI/button/MyButton";

export type PostType = {
    id: string
    title: string
    body: string
    sort: string
}
export type PostItemType = {
    post: PostType
    number: number
    removePost: (postId: string) => void
}
export const PostItem = (props: PostItemType) => {
    return (
        <div className={s.post}>
            <div className={s.post__content}>
                <strong>{props.number}. {props.post.title}</strong>
                <div> {props.post.body}</div>
            </div>
            <div className={s.post__btns}>
                <MyButton disabled={false} onClick={() => props.removePost(props.post.id)}>Delete</MyButton>
            </div>
        </div>
    );
};

