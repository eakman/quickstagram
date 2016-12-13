import React from 'react';
import createTimeStamp from '../util/create_time_stamp_util';
import Post from './post';

class Posts extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    const allPosts = [];
    let i = 0;
    for (let obj in this.props.posts) {

      const postObj = this.props.posts[obj];
      let pic = '';
      let post_id = obj;
      if (postObj.picture_url) {
        pic = postObj.picture_url;
      }
      allPosts.push(
        //jshint ignore: start
        <Post key={ i } postObj={ postObj } pic={ pic } post_id={ post_id }
            currentUser={ this.props.currentUser } i={ i }
            likeAPost={ this.props.likeAPost }
            makeAComment={ this.props.makeAComment }/>
        //jshint ignore: end
      );
      i++;
    }

    return(
        //jshint ignore: start
        <ul>
          {allPosts}
        </ul>
        //jshint ignore: end
    );
  }
}

export default Posts;





// <li key={"post" + i} >
//   <section key={"post-header" + i} className='post-header group'>
//     <img key={"post-av" + i} src={postObj.user.avatar_url} className='post-header-av'/>
//     <div key={"post-det" + i}className='post-header-detail'>
//       <div key={"post-uname" + i} className='post-header-uname'>{ postObj.user.username }</div>
//       <div key={"post-loc" + i} className='post-header-location'>{ postObj.location }</div>
//     </div>
//     <div key={"post-time" + i} className="post-header-timestamp">
//       {createTimeStamp(postObj.created_at)}
//     </div>
//
//   </section>
//   <div className='post'>
//     <img src={ pic }/>
//   </div>
//   <section className='post-footer group'>
//     <div className='likes-count'>{ postObj.likes.length } likes</div>
//     <div className='comments-container'></div>
//     <div className='comments-create'>
//       <img className='like-image' src={ this.state.likeImage }/>
//     </div>
//   </section>
// </li>
