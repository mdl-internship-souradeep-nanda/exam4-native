import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

// import './Header.css';

import style from './Header.styles';

const Header = props => (
  <View style={style.Header} >
    <Text style={style.HeaderGreet}>Quizzy</Text>
    <Text style={style.HeaderGreet}>
      {props.username.length ? `Hello ${props.username}` : ''}
    </Text>
  </View>
);

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Header;
