import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native';
// import MyCommonHeader from '../../components/MyCommonHeader';
import db from '../../config'
import firebase from 'firebase'

export default class AllBooks extends Component {
    render() {
        return (
            <View>
                {/* <MyCommonHeader title="Settings" navigation={this.props.navigation} /> */}
                <Text>All Books</Text>
            </View>
        )
    }
}