// dependencies
import React from 'react'
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';

// user files
import GroupMember from './GroupMember'
import EmailModal from '../emailModal'


class GroupList extends React.Component {

  render() {
    if(JSON.stringify(this.props.selectedGroup) === JSON.stringify({}) || this.props.selectedGroup === undefined){
      return null
    }

    return (
        <div className="ui container center aligned" style={{height: '550px'}}>
          <div>
            <EmailModal />
            {this.props.selectedGroup.users.map(groupUser => <GroupMember key={groupUser.id} {...groupUser} />)}
          </div>
        </div>
    );
  }
}

export default GroupList;
