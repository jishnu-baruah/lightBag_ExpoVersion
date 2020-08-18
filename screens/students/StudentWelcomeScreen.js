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
import db from '../../config';
import firebase from 'firebase';
import MyNormalHeader from '../../components/MyNormalHeader'




export default class StudentWelcomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            emailId: '',
            password: '',
            firstName: '',
            lastName: '',
            contact: '',
            country: '',
            state: '',
            district: '',
            city: '',
            confirmPassword: '',
            isModalVisible: 'false',
            class: '',
            section: '',
            options: ["school1", "school2", "school3"]
        }
    }

    userSignUp = (emailId, password, confirmPassword) => {
        if (password !== confirmPassword) {
            return Alert.alert("password doesn't match\nCheck your password.")
        } else {
            firebase.auth().createUserWithEmailAndPassword(emailId, password)
                .then(() => {
                    db.collection('users').add({
                        first_name: this.state.firstName,
                        last_name: this.state.lastName,
                        contact: this.state.contact,
                        email_id: this.state.emailId,
                        address: this.state.address
                    })
                    return Alert.alert(
                        'User Added Successfully',
                        '',
                        [
                            { text: 'OK', onPress: () => this.setState({ "isModalVisible": false }) },
                        ]
                    );
                })
                .catch((error) => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    return Alert.alert(errorMessage)
                    console.log(errorMessage);
                });
        }
    }

    userLogin = (emailId, password) => {
        firebase.auth().signInWithEmailAndPassword(emailId, password)
            .then(() => {
                this.props.navigation.navigate('DonateBooks')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage)
            })
    }

    showModal = () => {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.isModalVisible}
            >
                <View style={styles.modalContainer}>
                    <ScrollView style={{ width: '100%' }}>
                        <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                            <Text
                                style={styles.modalTitle}
                            >Registration</Text>
                            <TextInput
                                style={styles.formTextInput}
                                placeholder={"First Name"}
                                maxLength={8}
                                onChangeText={(text) => {
                                    this.setState({
                                        firstName: text
                                    })
                                }}
                            />


                            <TextInput
                                style={styles.formTextInput}
                                placeholder={"Last Name"}
                                maxLength={8}
                                onChangeText={(text) => {
                                    this.setState({
                                        lastName: text
                                    })
                                }}
                            />
                            <TextInput
                                style={styles.formTextInput}
                                placeholder={"Contact"}
                                maxLength={10}
                                keyboardType={'numeric'}
                                onChangeText={(text) => {
                                    this.setState({
                                        contact: text
                                    })
                                }}
                            />
                            <TextInput
                                style={styles.formTextInput}
                                placeholder={"Email"}
                                keyboardType={'email-address'}
                                onChangeText={(text) => {
                                    this.setState({
                                        emailId: text
                                    })
                                }}
                            /><TextInput
                                style={styles.formTextInput}
                                placeholder={"Country"}
                                secureTextEntry={true}
                                onChangeText={(text) => {
                                    this.setState({
                                        country: text
                                    })
                                }}
                            /><TextInput
                                style={styles.formTextInput}
                                placeholder={"State"}
                                secureTextEntry={true}
                                onChangeText={(text) => {
                                    this.setState({
                                        state: text
                                    })
                                }}
                            /><TextInput
                                style={styles.formTextInput}
                                placeholder={"District"}
                                secureTextEntry={true}
                                onChangeText={(text) => {
                                    this.setState({
                                        district: text
                                    })
                                }}
                            /><TextInput
                                style={styles.formTextInput}
                                placeholder={"City"}
                                secureTextEntry={true}
                                onChangeText={(text) => {
                                    this.setState({
                                        city: text
                                    })
                                }}
                            />
                            <View style={styles.modalBackButton}>
                                <TouchableOpacity
                                    style={styles.registerButton}
                                    onPress={() =>
                                        this.userSignUp(this.state.emailId, "default", "default")
                                    }
                                >
                                    <Text style={styles.registerButtonText}>Register</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.modalBackButton}>
                                <TouchableOpacity
                                    style={styles.cancelButton}
                                    onPress={() => this.setState({ "isModalVisible": false })}
                                >
                                    <Text style={{ color: '#ff5722' }}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </Modal>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <MyNormalHeader title="Teacher's login" navigation={this.props.navigation} />

                <View style={styles.container}>

                    {
                        this.showModal()
                    }
                    <View >
                        {/* <SantaAnimation /> */}
                        <Text style={styles.title}>Light Bag</Text>
                    </View>
                    <View>
                        <TextInput
                            style={styles.loginBox}
                            placeholder="abc@example.com"
                            keyboardType='email-address'
                            onChangeText={(text) => {
                                this.setState({
                                    emailId: text
                                })
                            }}
                        />

                        <View style={styles.classAndSecContainer}>
                            <View >
                                <TextInput
                                    style={styles.classBox}
                                    keyboardType={'numeric'}
                                    placeholder="class"
                                    onChangeText={(text) => {
                                        this.setState({
                                            class: text
                                        })
                                    }}
                                />
                            </View>
                            <View>
                                <TextInput
                                    style={styles.sectionBox}
                                    placeholder="section"
                                    onChangeText={(text) => {
                                        this.setState({
                                            section: text
                                        })
                                    }}
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
                            onPress={() => {

                                this.userLogin(this.state.emailId, this.state.password)
                            }}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.setState({ isModalVisible: true })}
                        >
                            <Text style={styles.buttonText}>SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8BE85',
        alignItems: 'center',
        justifyContent: 'center'
    },
    classAndSecContainer: {
        display: "flex",
        flexDirection: "row",
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
    classBox: {
        width: 180,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor: '#ff8a65',
        fontSize: 20,
        margin: 10,
        paddingLeft: 10
    },
    sectionBox: {
        width: 80,
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
