import React from 'react';

const FeedHeader = (props) => {
  return(
    <header className='feed-header group'>
      <nav className='feed-header-nav group'>
        <img className="camera"/> 
        <div className='logo-icon'/>
        <div className='narrow-line group'><div></div></div>
        <h1><a className='logo'>Quickstagram</a></h1>
      </nav>
    </header>
  );
}

export default FeedHeader;
