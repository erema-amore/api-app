
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './usersSlice';


const PostItem = ({ post }) => {
  const [userVisible, setUserVisible] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.id === post.userId);

  const handleUserClick = async () => {
    if (!user) {
      dispatch(fetchUser(post.userId));
    }
    setUserVisible(!userVisible);
  };

  return (
    <div>
      <h2 onClick={handleUserClick}>{post.title}</h2>
      {userVisible && user && (
        <div>
          <p>User: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default PostItem;
