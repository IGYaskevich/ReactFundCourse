import React from 'react';
import {PostItem, PostType} from "./PostItem";


type PostListType = {
    // posts: PostType[]
    posts: PostType[]
    title: string
    removePost: (postId: string) => void

}
export const PostList = React.memo<PostListType>(({posts, title, removePost}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены!
            </h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((item, index) =>
                <PostItem number={index + 1} post={item} removePost={removePost}/>
            )}

        </div>
    );
});

