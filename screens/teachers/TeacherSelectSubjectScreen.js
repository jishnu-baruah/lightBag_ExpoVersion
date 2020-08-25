import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';
import MyButton from '../../components/MyButton';
import MyCommonHeader from '../../components/MyCommonHeader';


export default class TeacherSelectSectionScreen extends Component {
    constructor() {
        super();
        this.state = {
            userType: "",
            options: ['Mathematics', 'Science', 'English', 'Social Science', 'Language']
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <MyCommonHeader title={"Section"} navigation={this.props.navigation} />
                <View style={styles.buttonContainer}>
                    <MyButton values={this.state.options} navigation={this.props.navigation} navigationScreen={'TeacherHomeScreen'} />



                </View></View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // display: "flex",
        flex: 1,
        // flexDirection: "row",
        // flexWrap: "wrap",
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        // display: "flex",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: '#ffff',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    profileContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 65,
        fontWeight: '300',
        paddingBottom: 30,
        color: '#ff3d00'
    },
    loginBox: {
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor: '#ff8a65',
        fontSize: 20,
        margin: 10,
        paddingLeft: 10
    },
    KeyboardAvoidingView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalTitle: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 30,
        color: '#ff5722',
        margin: 50
    },
    modalContainer: {
        flex: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffff",
        marginRight: 30,
        marginLeft: 30,
        marginTop: 80,
        marginBottom: 80,
    },
    formTextInput: {
        width: "75%",
        height: 35,
        alignSelf: 'center',
        borderColor: '#ffab91',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10
    },
    registerButton: {
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 30
    },
    registerButtonText: {
        color: '#ff5722',
        fontSize: 15,
        fontWeight: 'bold'
    },
    cancelButton: {
        width: 200,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },

    button: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: "#ff9800",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10
    },
    buttonText: {
        color: '#ffff',
        fontWeight: '200',
        fontSize: 20
    }
})
