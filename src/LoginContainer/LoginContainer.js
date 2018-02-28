import React from 'react';
import PropTypes from 'prop-types';

import { View, Button, TextInput } from 'react-native';

// import './LoginContainer.css';
import style from './LoginContainer.styles';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }
  render() {
    return (
      <View style={style.LoginContainer} >
        <TextInput
          style={style.LoginContainerInput}
          onChangeText={
            (text) => {
              this.setState({ username: text });
            }
          }

          value={this.state.username}
        />
        <Button
          onPress={() => this.props.onLogin(this.state.username)}
          title="Login"
        />
      </View>);
  }
}


LoginContainer.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginContainer;
