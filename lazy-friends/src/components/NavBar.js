import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

class NavBar extends Component {

  render() {
    const link = {
      width: '100px',
      padding: '12px',
      margin: '0 6px 6px',
      background: 'blue',
      textDecoration: 'none',
      color: 'white',
    }
    return (
      <div className="App">
        <NavLink to='/' style={link}><Icon className="home" size='big' />Home</NavLink>
        <NavLink to='/profile' style={link}><Icon className="user" size='big' />Profile</NavLink>
        <NavLink to='/newgroup' style={link}><Icon className="add" size='big'/>New Group</NavLink>
        <NavLink to='/users' style={link}><Icon className='group' size='big'/>Users</NavLink>
        { this.props.currentUser.username !== '' ?
          <NavLink to='/signout' style={link} onClick={this.props.handleSignOut}><Icon className='sign out' size='big'/>Sign Out</NavLink> : null
        }
      </div>
    );
  }

}

export default NavBar;
