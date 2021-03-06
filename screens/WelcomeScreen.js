import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';




export default class WelcomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            userType: ""
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View >
                    <Text style={styles.title}>LIGHT BAG</Text>
                </View>
                <View>
                    <Text >Login as:</Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
                        onPress={() => {
                            // Alert.alert("logging in as a teacher....");
                            this.props.navigation.navigate("TeacherWelcomeScreen");
                        }}
                    >
                        <Text style={styles.buttonText}>Teacher</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
                        onPress={() => {
                            // Alert.alert("logging in as a student....");
                            this.props.navigation.navigate("StudentWelcomeScreen");
                        }}
                    >
                        <Text style={styles.buttonText}>Student</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'F8BE85',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 55,
        fontWeight: '300',
        paddingBottom: 30,
        color: '#5555ff'
    },
    loginBox: {
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor: '#5555ff',
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
        color: '#5555ff',
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
        borderColor: '#5555ff',
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
        backgroundColor: "#5555ff",
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
