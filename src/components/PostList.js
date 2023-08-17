
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../postsSlice';
import PostItem from '../components/PostItem';


const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Post List</h1>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
