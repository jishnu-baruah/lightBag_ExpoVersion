import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native';
import MyButton from '../../components/MyButton';
import MyCommonHeader from '../../components/MyCommonHeader';
import firebase from 'firebase';
import db from '../../config'

export default class TeacherSelectSectionScreen extends Component {
    constructor() {
        super();
        this.state = {
            userType: "",
            options: [],
            extraOptions: []
        }
        this.requestRef = null
    }
    getSchoolSubjects = () => {
        var options = [];
        var address = this.props.navigation.state.params.schoolAddress;
        db.collections("all_schools").where("address", "==", address).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    var data = doc.data();
                    options = data.subjects;
                    this.setState({
                        extraOptions: options
                    })
                });
            }).catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    }
    getDefaultSubjects = () => {
        var options = [];
        db.collection("all_schools").where("name", "==", "defaultSchool")
            .get()
            .then((querySnapshot) => {
                console.log("called")

                querySnapshot.forEach((doc) => {
                    var data = doc.data();
                    options = data.subjects;
                    this.setState({
                        options: options
                    })
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    }
    componentDidMount() {
        this.getDefaultSubjects();
    }

    render() {
        return (
            <View style={styles.container}>

                <ScrollView style={{ width: '100%' }}>
                    <MyCommonHeader
                        title={this.props.navigation.state.params.title}
                        preTitle={this.props.navigation.state.params.preTitle}
                        settings={false}
                        sectionTitle={this.props.navigation.state.params.sectionTitle}
                        // prevTitle={this.props.navigation.state.params.preTitle}
                        navigation={this.props.navigation}
                        navigationScreen={"TeacherSelectSectionScreen"}
                        screen={"TeacherSelectSubjectScreen"} />
                    <View style={styles.buttonContainer}>
                        <MyButton
                            values={this.state.options}
                            navigation={this.props.navigation}
                            navigationScreen={'AllBooks'}
                            title={this.props.navigation.state.params.title}
                            schoolAddress={this.props.navigation.state.params.schoolAddress}
                            preTitle={this.props.navigation.state.params.preTitle}
                            class={this.props.navigation.state.params.class}
                            section={this.props.navigation.state.params.title}
                        />



                    </View></ScrollView></View>
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
