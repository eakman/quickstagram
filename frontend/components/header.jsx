import React from 'react';

const Header = (props) => {

  const handleProfileButton = () => {
    props.router.push('/main/profile');
  };

  const handleHomeButton = () => {
    props.router.push('/main/feed');
  };

  return(
    //jshint ignore:start
    <header className='feed-header group'>
      <nav className='feed-header-nav group'>
        <div className='header-content'>
          <button onClick={ handleHomeButton } className='home-button group'>
            <img className="camera" src='https://s3-us-west-2.amazonaws.com/quickstagram-pro/site-images/photo-camera.png'/>

            <div className='logo-icon'/>
            <div className='narrow-line group'><div></div></div>
            <h1><a className='logo'>Quickstagram</a></h1>
          </button>
          <button onClick={ handleProfileButton } className='profile-button'>
            <img className='profile-icon'
                src='https://s3-us-west-2.amazonaws.com/quickstagram-pro/site-images/social.png'/>
          </button>

        </div>
      </nav>
    </header>
    //jshint ignore:end
  );
};

export default Header;
