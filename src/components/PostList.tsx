import React from 'react';
import {PostItem, PostItemType} from "./PostItem";

type PostListType = {
    posts: PostItemType[]
    title: string

}
export const PostList = (props: PostListType) => {

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{props.title}</h1>
            {props.posts.map((item, index) => <PostItem number={index + 1} id={item.id} title={item.title}
                                                        body={item.body}
                                                        key={item.id}/>)}
        </div>
    );
};

