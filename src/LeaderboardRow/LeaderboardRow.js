import React from 'react';

import PropTypes from 'prop-types';
// import './LeaderboardRow.css';
import { Text, View } from 'react-native';

import style from './LeaderboardRow.styles';

const LeaderboardRow = props => (
  <View style={style.LeaderboardRow} >
    <Text
      style={
        props.username !== props.currentUser ?
          style.LeaderboardRowUser : style.selected
      }
    >
      {props.username}
    </Text>
    <Text style={style.LeaderboardRowScore}>
      {props.score}
    </Text>
  </View>
);

LeaderboardRow.propTypes = {
  username: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  currentUser: PropTypes.string.isRequired,
};

export default LeaderboardRow;
