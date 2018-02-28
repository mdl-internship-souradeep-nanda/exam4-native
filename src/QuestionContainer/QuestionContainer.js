import React from 'react';

import PropTypes from 'prop-types';

import { View, Text } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

// import './QuestionContainer.css';
import style from './QuestionContainer.styles';

const getHeader = id => (
  <View style={style.QuestionContainerHeader}>
    <Text> {id} </Text>
  </View>
);

const getQuestionDiv = question => (
  <View style={style.QuestionContainerQuestion}>
    <Text> {question} </Text>
  </View>
);

const getOptionsDiv = (id, options, selected, onCheckedChanged) => {
  const filteredOptions = options.filter(option => option !== null);
  const propsGroup = filteredOptions.map(option => ({
    label: option,
    value: option,
  }));
  return (
    <View>
      <RadioForm
        radio_props={propsGroup}
        initial={options.indexOf(selected)}
        onPress={onCheckedChanged}
      />
      <Text>{options.indexOf(selected)}</Text>
    </View>
  );
  // .map((option) => {
  //   const isChecked = option === selected;
  //   const key = `${option}`;
  //   return (
  //     <View key={key} style={style.QuestionContainerOptions}>
  //       <input
  //         type="radio"
  //         name={`question${id}`}
  //         value={option}
  //         checked={isChecked}
  //         onChange={onCheckedChanged}
  //       />
  //       <Text>{option}</Text>
  //     </View>
  //   );
  // });
};

const QuestionContainer = props => (
  <View style={style.QuestionContainer} >
    {getHeader(props.id)}
    {getQuestionDiv(props.question)}
    {getOptionsDiv(
      props.id,
      props.options,
      props.answer,
      props.onCheckedChanged,
    )}
  </View>
);

QuestionContainer.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  answer: PropTypes.string.isRequired,
  onCheckedChanged: PropTypes.func.isRequired,
};

export default QuestionContainer;
