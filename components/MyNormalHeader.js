import React, { Component } from 'react';
import { Header, Icon, Badge } from 'react-native-elements';

export default class MyNormalHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {
    return (
      <Header
        leftComponent={<Icon name='arrow-left' type='font-awesome' color='#696969'
          onPress={() => { this.props.navigation.navigate('WelcomeScreen') }} />}
        centerComponent={{ text: this.props.title, style: { color: '#90A5A9', fontSize: 20, fontWeight: "bold", } }}
        // rightComponent={<this.BellIconWithBadge {...this.props} />}
        backgroundColor="#eaf8fe"
      />

    )
  }

}
