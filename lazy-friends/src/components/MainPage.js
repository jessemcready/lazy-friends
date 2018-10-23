import React, { Component } from 'react';
import GroupContainer from './groups/GroupContainer'
import { Grid } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

class MainPage extends Component {
  displayMainPage = () => {
    return (
      <Grid container columns={3}>

          <Grid.Column>
            <GroupContainer groups={this.props.currentUser.groups} />
          </Grid.Column>

          <Grid.Column>
            <h1>Google Map</h1>
          </Grid.Column>

          <Grid.Column>
            <h1>Suggestions</h1>
          </Grid.Column>

      </Grid>
    )
  }

  render() {
    return (
        <div>
          { this.props.currentUser.username === '' ?
          <Redirect to='/login' /> : this.displayMainPage() }
        </div>
    );
  }

}

export default MainPage;
