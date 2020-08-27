import React, { Component } from 'react';
import { Header, Icon, Badge } from 'react-native-elements';
import { View, Text, StyeSheet, Alert } from 'react-native';
import db from '../config'
import firebase from 'firebase';

export default class MyCommonHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      userId: firebase.auth().currentUser.email,
      title: "",
    }
  }
  getTitle = () => {
    var title = '';
    if (this.props.preTitle !== undefined) {
      // this.setState({
      title = this.props.preTitle;
      // })
    } else {
      // this.setState({
      title = this.props.sectionTitle;
      // })
    }
    return (title)
  }

  showSettings = () => {
    if (this.props.settings) {
      return (<Icon name='gear' type='font-awesome' color='#696969'
        onPress={() => {
          this.props.navigation.navigate('TeacherSettings',
            { screen: this.props.screen, preTitle: this.props.title })

          // Alert.alert("settings")
        }} />)
    } else {
      return (
        <View>
        </View>
      )
    }
  }
  // getNumberOfUnreadNotifications() {
  //   db.collection('all_notifications').where('targeted_user_id', '==', this.state.userId).where('notification_status', '==', "unread")
  //     .onSnapshot((snapshot) => {
  //       var unreadNotifications = snapshot.docs.map((doc) => doc.data())
  //       this.setState({
  //         value: unreadNotifications.length
  //       })
  //     })
  // }

  componentDidMount() {
    // this.getNumberOfUnreadNotifications()
    // this.getTitle()
  }


  BellIconWithBadge = () => {
    return (
      <View>
        <Icon name='bell' type='font-awesome' color='#696969' size={25}
        // onPress={() => this.props.navigation.navigate('Notification')} 
        />
        <Badge
          value={0}
          containerStyle={{ position: 'absolute', top: -4, right: -4 }} />
      </View>
    )
  }

  render() {
    return (
      <Header
        leftComponent={<Icon name='arrow-left' type='font-awesome' color='#696969'
          onPress={() => {
            console.log("preTitle", this.props.preTitle)
            console.log("sectionTitle", this.props.sectionTitle)
            this.props.navigation.navigate(this.props.navigationScreen, { title: this.getTitle() })
          }} />}

        centerComponent={{ text: this.props.title, style: { color: '#90A5A9', fontSize: 20, fontWeight: "bold", } }}
        rightComponent={this.showSettings}

        backgroundColor="#eaf8fe"
      />

    )
  }

}
