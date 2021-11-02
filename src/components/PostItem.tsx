import React from 'react';
import s from "../App.module.css";

export type PostItemType = {
    id: string
    title: string
    body: string
    number?: number
}
export const PostItem = (props: PostItemType) => {

    return (
        <div className={s.post}>
            <div className={s.post__content}>
                <strong>{props.number}. {props.title}</strong>
                <div> {props.body}</div>
            </div>
            <div className={s.post__btns}>
                <button>Delete</button>
            </div>
        </div>
    );
};

