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
import MyCommonHeader from '../../components/MyCommonHeader';
import db from '../../config'
import firebase from 'firebase'

export default class TeacherSettings extends Component {

    constructor() {
        super();
        this.state = {
            emailId: "",
            firstName: '',
            lastName: '',
            address: '',
            contact: '',
            docId: '',
            password: '',
            confirmPassword: '',
            country: '',
            State: '',
            district: '',
            city: '',
        }
    }

    getUserDetails = () => {
        var email = firebase.auth().currentUser.email;
        db.collection('all_teachers').where('email_id', '==', email).get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    var data = doc.data()
                    this.setState({
                        emailId: data.email_id,
                        firstName: data.first_name,
                        lastName: data.last_name,
                        address: data.school_address,
                        docId: doc.id
                    })
                });
            })


        Alert.alert("email", this.state.emailId)
        console.log("email", this.state.emailId)
        // Alert.alert("address", this.state.address)
        // Alert.alert("docId", this.state.docId)
        // console.log("address", this.state.address)
        // console.log("docId", this.state.docId)
        db.collection('all_schools').where('address', '==', this.state.address).get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    var data = doc.data()
                    this.setState({
                        country: data.school_country,
                        state: data.school_state,
                        city: data.school_city,
                        district: data.school_district,
                    })
                });
            })
    }

    updateUserDetails = () => {
        db.collection('users').doc(this.state.docId).update({
            'first_name': this.state.firstName,
            'last_name': this.state.lastName,
            'contact': this.state.contact,
            'address': this.state.address,
            'password': this.state.password
        })


        Alert.alert("Settings saved successfully")
    }

    componentDidMount() {
        this.getUserDetails();
    }


    render() {
        return (


            <View>
                <ScrollView style={{ width: '100%' }}>
                    <MyCommonHeader
                        title="Settings"
                        navigation={this.props.navigation}
                        navigationScreen={this.props.navigation.state.params.screen}
                        preTitle={this.props.navigation.state.params.preTitle}
                        settings={false} />

                    <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>

                        <TextInput
                            style={styles.formTextInput}
                            placeholder={this.state.firstName}
                            maxLength={8}
                            onChangeText={(text) => {
                                this.setState({
                                    firstName: text
                                })
                            }}
                        />
                        <TextInput
                            style={styles.formTextInput}
                            placeholder={this.state.lastName}
                            maxLength={8}
                            onChangeText={(text) => {
                                this.setState({
                                    lastName: text
                                })
                            }}
                        />
                        <TextInput
                            style={styles.formTextInput}
                            placeholder={"Email"}
                            keyboardType={this.state.emailId}
                            onChangeText={(text) => {
                                this.setState({
                                    emailId: text
                                })
                            }}
                        />
                        <TextInput
                            style={styles.formTextInput}
                            placeholder={this.state.schoolName}
                            // maxLength={10}
                            // keyboardType={'numeric'} 
                            onChangeText={(text) => {
                                this.setState({
                                    schoolName: text
                                })
                            }}
                        /><TextInput
                            style={styles.formTextInput}
                            placeholder={this.state.country}
                            // secureTextEntry={true}
                            onChangeText={(text) => {
                                this.setState({
                                    country: text
                                })
                            }}
                        /><TextInput
                            style={styles.formTextInput}
                            placeholder={this.state.State}
                            onChangeText={(text) => {
                                this.setState({
                                    State: text
                                })
                            }}
                        /><TextInput
                            style={styles.formTextInput}
                            placeholder={this.state.district}
                            onChangeText={(text) => {
                                this.setState({
                                    district: text
                                })
                            }}
                        /><TextInput
                            style={styles.formTextInput}
                            placeholder={this.state.city}
                            onChangeText={(text) => {
                                this.setState({
                                    city: text
                                })
                            }}
                        /><TextInput
                            style={styles.formTextInput}
                            placeholder={"Password"}
                            secureTextEntry={true}
                            onChangeText={(text) => {
                                this.setState({
                                    password: text
                                })
                            }}
                        /><TextInput
                            style={styles.formTextInput}
                            placeholder={"Confirm Password"}
                            secureTextEntry={true}
                            onChangeText={(text) => {
                                this.setState({
                                    confirmPassword: text
                                })
                            }}
                        />
                        <View style={styles.modalBackButton}>
                            <TouchableOpacity
                                style={styles.registerButton}
                                onPress={() =>
                                    this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
                                }
                            >
                                <Text style={styles.registerButtonText}>Register</Text>
                            </TouchableOpacity>
                        </View>

                    </KeyboardAvoidingView>
                </ScrollView></View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    keyBoardStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        borderColor: '#5555ff'
    },


    button: {
        width: "75%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: "#ff5722",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop: 20
    },
    buttonText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#fff"
    }, KeyboardAvoidingView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 130
    }, formTextInput: {
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
        marginTop: 30,
        backgroundColor: '#6060ff'
    },
    registerButtonText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold'
    }
})
