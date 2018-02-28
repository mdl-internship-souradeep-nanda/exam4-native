import React from 'react';
import axios from 'axios';

import { ScrollView, Text, Button } from 'react-native';

import PropTypes from 'prop-types';

import externals from '../externals.json';

// import './LeaderboardContainer.css';
import style from './LeaderboardContainer.styles';

import LeaderboardRow from '../LeaderboardRow/LeaderboardRow';

class LeaderboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [],
    };
  }

  componentDidMount() {
    axios.get(externals.getLeaderboard)
      .then(res => res.data)
      // .then(this.reformatScores)
      .then((scores) => {
        this.setState({ scores });
      });
  }

  getAllRows = currentUser => this.state.scores.map(score => (
    <LeaderboardRow
      key={score.id}
      username={score.username}
      score={score.score}
      currentUser={currentUser}
    />
  ))

  render() {
    // console.log(this.state.scores);
    const self = this.state.scores.filter(score => (score.username === this.props.username))[0];
    return (
      <ScrollView style={style.LeaderboardContainer} >
        <Text style={style.LeaderboardContainerScore} >
          Your score: {self ? self.score : 0}
        </Text>
        {this.getAllRows(this.props.username)}
        <Button
          style={style.LeaderboardContainerButton}
          onPress={this.props.backToLogin}
          title="Go Back"
        />
      </ScrollView>
    );
  }
}

LeaderboardContainer.propTypes = {
  username: PropTypes.string.isRequired,
  backToLogin: PropTypes.func.isRequired,
};

export default LeaderboardContainer;
