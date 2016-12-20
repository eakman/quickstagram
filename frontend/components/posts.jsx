import React from 'react';
import createTimeStamp from '../util/create_time_stamp_util';
import Post from './post';

class Posts extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){

    const allPosts = this.props.posts.map((postObj, idx) => {
      // const postObj = this.props.posts[obj];
      let pic = '';
      // let post_id = obj;
      if (postObj.picture_url) {
        pic = postObj.picture_url;
      }
      return(
        <Post key={ idx } postObj={ postObj } pic={ pic } post_id={ postObj.id }
            currentUser={ this.props.currentUser } i={ idx }
            likeAPost={ this.props.likeAPost }
            makeAComment={ this.props.makeAComment } />
        );
    });

    return(
          <ul>
            {allPosts}
          </ul>
        );
  }
}
export default Posts;
