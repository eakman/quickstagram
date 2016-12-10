import React from 'react';

const FeedHeader = (props) => {
  return(
    <header className='feed-header group'>
      <nav className='feed-header-nav group'>
        <img className="camera" src='https://s3-us-west-2.amazonaws.com/quickstagram-pro/site-images/photo-camera.png'/>
        <div className='logo-icon'/>
        <div className='narrow-line group'><div></div></div>
        <h1><a className='logo'>Quickstagram</a></h1>
      </nav>
    </header>
  );
}

export default FeedHeader;
