import React from 'react';
import SearchContainer from './search/search_container';

const Header = (props) => {

  const handleProfileButton = () => {

    props.router.push(`/main/profile/${props.currentUser.id}`);
  };

  const handleHomeButton = () => {
    props.router.push('/main/feed');
  };
  return(
    <header className='feed-header group'>
      <nav className='feed-header-nav group'>
        <div className='header-content'>
          <button onClick={ handleHomeButton } className='home-button group'>
            <img className="camera" src={ window.camera }/>

            <div className='logo-icon'/>
            <div className='narrow-line group'><div></div></div>
            <h1><a className='logo'>Quickstagram</a></h1>
          </button>

          <SearchContainer />

          <button onClick={ handleProfileButton } className='profile-button'>
            <img className='profile-icon'
                src={ window.profileButton }/>
          </button>

        </div>
      </nav>
    </header>
  );
};

export default Header;
