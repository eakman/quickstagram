import React from 'react';

const createTimeStamp = (timeStamp) => {

}


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
      <li>
        <section className='post-header'>

        </section>
        <div className='post'>
          <img src={ pic }/>
        </div>
        <section className='post-footer'>
        </section>
      </li>
    );
  }

  return(

      <ul>
        {allPosts}
      </ul>

  );
}

export default Posts;


// <img className='post-header-pic' src={ postObj.picture_url }/>
// <div className='post-header-info'>
//   <h1 className='post-header-username'>{ postObj.username }/>
//   <h1 className='post-header-location'>{ postObj.location }/>
//
// </div>
