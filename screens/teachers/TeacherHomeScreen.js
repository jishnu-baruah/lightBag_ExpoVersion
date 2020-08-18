import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ViewBase,
} from 'react-native';
import MyButton from '../../components/MyButton';
import MyCommonHeader from '../../components/MyCommonHeader';


export default class TeacherHomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            userType: "",
            options: ['class1', 'class2', 'class3'],
        }
    }



    render() {
        return (
            <View style={styles.container}>
                <MyCommonHeader title={"School"} navigation={this.props.navigation} />
                <View style={styles.buttonContainer}>
                    <MyButton values={this.state.options} />
                    {/* <MyButton text="Class 1" /> */}

                    {/* <MyButton text="Class 2" navigation={this.props.navigation} />
                    <MyButton text="Class 3" navigation={this.props.navigation} />
                    <MyButton text="Class 4" navigation={this.props.navigation} />
                    <MyButton text="Class 5" navigation={this.props.navigation} />
                    <MyButton text="Class 6" navigation={this.props.navigation} />
                    <MyButton text="Class 7" navigation={this.props.navigation} />
                    <MyButton text="Class 8" navigation={this.props.navigation} />
                    <MyButton text="Class 9" navigation={this.props.navigation} />
                    <MyButton text="Class 10" navigation={this.props.navigation} /> */}

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
        backgroundColor: '#F8BE85',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        // display: "flex",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: '#F8BE85',
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
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        margin: 20,
        color: '#ff3d00'
    },
    // button: {
    //     width: 300,
    //     height: 50,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius: 25,
    //     backgroundColor: "#ff9800",
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 8,
    //     },
    //     shadowOpacity: 0.30,
    //     shadowRadius: 10.32,
    //     elevation: 16,
    //     padding: 10
    // },
    buttonText: {
        color: '#ffff',
        fontWeight: '200',
        fontSize: 20
    }
})
