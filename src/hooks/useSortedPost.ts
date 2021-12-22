import {useMemo} from "react";
import {PostType} from "../components/PostItem";

export type sorts = 'id' | 'title' | 'body' | 'sort'
export const useSortedPost = (posts: Array<PostType>, sort: sorts) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts.sort((a, b) => a[sort].localeCompare(b[sort]))]
        }
        return posts
    }, [sort, posts])
    return sortedPosts
}

export const usePosts = (posts: Array<PostType>, sort: sorts, query: string) => {
    const sortedPosts = useSortedPost(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPosts])
    return sortedAndSearchedPosts
}