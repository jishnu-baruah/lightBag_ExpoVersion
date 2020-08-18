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

export default class DropdownInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            options=this.props.options
        }
    }
}
