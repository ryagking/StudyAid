import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import t from 'tcomb-form-native'; // 0.6.9
import { Dropdown } from 'react-native-material-dropdown';

const Form = t.form.Form;

const StudySession = t.struct({
  course: t.String,
  title: t.maybe(t.String),
  time: t.Number,
  goal: t.String
  });

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'black',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'black',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    course: {
      label: 'Course',
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    title: {
      label: 'Study session title',
    },
    time: {
      label: 'Session length (minutes)',
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    },
  },
  stylesheet: formStyles,
};

export default class App extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }

  render()
  {
    return (
      <View style={styles.container}>
        <Form
          ref={c => this._form = c}
          type={StudySession}
          options={options}
        />
        <Button
          title="Add"
          onPress={this.handleSubmit}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create(
{
    container:
    {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#EB8686',
    },
  });
