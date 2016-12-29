import React from 'react';
import { Link } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    }
    this.searchUsers = this.searchUsers.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  searchUsers(e) {
    e.preventDefault();
    this.setState({inputText: e.currentTarget.value}, () => {
      if (this.state.inputText.length > 0){
        this.props.findUsers(this.state.inputText);
      }

    });
  }

  handleClick() {
    this.setState({inputText: ''});
  }

  render() {

    let userList = '';
    if (this.state.inputText.length > 0){
      userList = this.props.users.map((user, idx) => {
        if (user.avatar !== '#'){
          const userUrl = `/main/profile/${user.id}`;
          return (
            <li className='search-item' key={ idx }>
            <Link onClick={ this.handleClick } to={ `/main/profile/${user.id}` } >
              <img className='search-av' src={user.avatar} />
              <h1 className='search-pic'>{ user.username }</h1>
             </Link>
           </li>
          );
        } else {
          return (
            <li className='search-item' key={ idx }>
            <Link onClick={ this.handleClick } to={ `/main/results/${user.username.slice(1)}` } >
              <h1 className='search-av'>{user.avatar}</h1>
              <h1 className='search-pic'>{ user.username.slice(1) }</h1>
             </Link>
           </li>
         );
        }
      });
    }
    return(
      <div className='search-results-container'>
        <input className='search-input'
              placeholder='Search'
              onChange={ this.searchUsers }
              type='text' value={ this.state.inputText } />
        <div>

          <ul className='search-results'>

            {userList}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
