import React from 'react';

const Posts = (props) => {

  const allPosts = [];

  for (let obj in props.posts) {
    const postObj = props.posts[obj]
    let pic = '';
    let id = '';
    if (postObj.picture_url) {
      pic = postObj.picture_url
    }
    if (postObj.id) {
      id = postObj.id
    }
    allPosts.push(
      <li><img src={ pic }/></li>
    );
  }

  return(
    <div>
      <ul>
        {allPosts}
      </ul>
    </div>
  );
}

export default Posts;
