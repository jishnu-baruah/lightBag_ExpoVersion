import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert, FlatList,
    ScrollView, KeyboardAvoidingView, TextInput, Modal
} from 'react-native';
import { ListItem } from 'react-native-elements'
import MyButton from '../../components/MyButton';
import MyCommonHeader from '../../components/MyCommonHeader';
import firebase from 'firebase';
import db from '../../config'

export default class RequiredBookScreen extends Component {
    constructor() {
        super()
        this.state = {
            schoolAddress: "",
            class: "",
            section: "",
            subject: "",
            bookList: [],
            name: "",
            weight: "",
            isModalVisible: false
        }
        this.bookRef = null
        this.address = ""
        this.class = ""
        this.section = ""
        this.subject = ""
    }
    getDetails = () => {
        // console.log(
        //     "school address  --> " + this.props.navigation.state.params.schoolAddress,
        //     "class           --> " + this.props.navigation.state.params.class,
        //     "section         --> " + this.props.navigation.state.params.section,
        //     "subject         --> " + this.props.navigation.state.params.title,
        // )
        this.setState({
            schoolAddress: this.props.navigation.state.params.schoolAddress,
            class: this.props.navigation.state.params.class,
            section: this.props.navigation.state.params.section,
            subject: this.props.navigation.state.params.title,
            // bookList: []
        })
        this.address = this.props.navigation.state.params.schoolAddress
        this.class = this.props.navigation.state.params.class
        this.section = this.props.navigation.state.params.section
        this.subject = this.props.navigation.state.params.title        // Alert.alert("hi", this)

        console.log("this.address =" + this.props.navigation.state.params.schoolAddress,
            "this.class =" + this.props.navigation.state.params.class,
            "this.section =" + this.props.navigation.state.params.section,
            "this.subject =" + this.props.navigation.state.params.title        // Alert.alert("hi", this)
        )
    }
    getBookList = () => {
        this.getDetails();

        var schoolAddress = this.address;
        // Alert.alert("address in booklist", schoolAddress)
        var section = this.section;
        var subject = this.subject;
        var Class = this.class;
        console.log("#1", this.state.bookList)
        this.bookRef = db.collection("all_books")
            .where("school_address", "==", schoolAddress)
            .where("class", "==", Class)
            .where("section", "==", section)
            .where("subject", "==", subject)
            .where("required", "==", true)
            .onSnapshot((snapshot) => {
                var bookList = snapshot.docs.map(document => document.data());
                this.setState({
                    bookList: bookList
                });
            })
        console.log("#2", this.state.bookList)
    }

    addArticle = () => {

        console.log("first_name:" + this.state.name,
            "last_name:" + this.state.weight,
            "school_address:" + this.state.schoolAddress,
            " class:" + this.state.class,
            "section:" + this.state.section,
            "subject: " + this.state.subject
        )
        db.collection("all_books").add({
            name: this.state.name,
            weight: this.state.weight,
            school_address: this.state.schoolAddress,
            class: this.state.class,
            section: this.state.section,
            subject: this.state.subject,
            required: false
        })
        return (Alert.alert(
            'Article Added Successfully',
            '',
            [
                {
                    text: 'OK', onPress: () =>
                        this.setState({
                            "isModalVisible": false,
                            name: "", weight: ""
                        })
                },
            ]
        ))
        // .catch((error) => {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     return Alert.alert(errorMessage)
        // });
    }


    // addToTable = (bookDetails) => {
    //     console.log('Book Details', bookDetails.doc_id)
    //     if (bookDetails.requred) {
    //         db.collection("all_books").doc(bookDetails.doc_id).update({
    //             "required": true
    //         })
    //     }
    //     else {
    //         Alert.alert(bookDetails.doc_id)
    //         db.collection("all_books").doc(bookDetails.doc_id).update({
    //             "request_status": false
    //         })

    //     }
    // }

    componentDidMount() {
        this.getDetails();
        this.getBookList();
    }

    componentWillUnmount() {
        this.getDetails();
        this.bookRef();
    }

    showModal = () => {
        return (
            <Modal
                animationType="fade"
                // transparent={true}
                visible={this.state.isModalVisible}
            >
                <View style={styles.modalContainer}>
                    <ScrollView style={{ width: '100%' }}>
                        <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                            <Text
                                style={styles.modalTitle}
                            >Add</Text>
                            <TextInput
                                style={styles.formTextInput}
                                placeholder={"Name"}
                                onChangeText={(text) => {
                                    this.setState({
                                        name: text
                                    })
                                }}
                            />
                            <TextInput
                                style={styles.formTextInput}
                                placeholder={"appx weight in kgs"}
                                maxLength={4}
                                keyboardType={'numeric'}
                                onChangeText={(text) => {
                                    this.setState({
                                        weight: text
                                    })
                                }}
                            />

                            <View >
                                <TouchableOpacity
                                    style={styles.okButton}
                                    onPress={() =>
                                    // this.addOptions()

                                    {
                                        this.addArticle()
                                        // console.log(this.props.schoolAddress)
                                        // Alert.alert(this.props.schoolAddress)
                                    }
                                    }
                                >
                                    <Text style={styles.okButtonText}>Add</Text>
                                </TouchableOpacity>
                            </View>
                            <View >
                                <TouchableOpacity
                                    style={styles.okButton}
                                    onPress={() => this.setState({ "isModalVisible": false })}
                                >
                                    <Text style={styles.okButtonText}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </Modal>
        )
    }

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item, i }) => {
        return (
            <ListItem
                key={i}
                title={"Name :" + item.name}
                subtitle={"Weight :" + item.weight}
                titleStyle={{ color: 'black', fontWeight: 'bold' }}
                // rightElement={
                //     <TouchableOpacity
                //         style={styles.button}
                //         onPress={() => {
                //             this.addToTable(item)
                //             // Alert.alert(item.required === true ? "Removed" : "Add")
                //             // this.props.navigation.navigate("ReceiverDetails", { "details": item }) 
                //         }}
                //     >
                //         <Text style={{ color: '#ffff' }}>
                //             {item.required === true ? "Remove" : "Add"}
                //         </Text>

                //     </TouchableOpacity>
                // }
                bottomDivider
            />
        )
    }
    render() {
        return (


            <View style={styles.container}>
                {
                    this.showModal()
                }
                <ScrollView style={{ width: '100%' }}>
                    <MyCommonHeader
                        title={this.props.navigation.state.params.title}
                        navigation={this.props.navigation}
                        navigationScreen={"StudentHomeScreen"}
                        screen={"TeacherSelectSectionScreen"}
                        settings={false}
                        preTitle={this.props.navigation.state.params.preTitle}
                        sectionTitle={this.props.navigation.state.params.sectionTitle} />
                    <View style={{ flex: 1 }}>
                        {
                            this.state.bookList.length === 0
                                ? (
                                    <View style={styles.subContainer}>
                                        <Text style={{ fontSize: 20, marginTop: 180, marginBottom: 150 }}>All Articles</Text>
                                    </View>
                                )
                                : (
                                    <FlatList
                                        keyExtractor={this.keyExtractor}
                                        data={this.state.bookList}
                                        renderItem={this.renderItem}
                                    />
                                )
                        }
                    </View>
                    {/* <View style={{ alignSelf: "center", justifyContent: "center", margin: 30 }}>
                        <TouchableOpacity style={styles.addButton}
                            onPress={() => {
                                // Alert.alert(this.state.schoolAddress)
                                this.setState({ isModalVisible: true })
                            }}>
                            <Text style={styles.addButtonText}>Add Article</Text>
                        </TouchableOpacity>
                    </View> */}
                </ScrollView>
            </View>
            // </View >
        );
    }
}
const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        // flexWrap: "wrap",
        borderRadius: 20,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: "#ffff",
        marginRight: 30,
        marginLeft: 30,
        marginTop: 80,
        marginBottom: 80,
    }, modalTitle: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 30,
        color: '#6060ff',
        margin: 50
    }, formTextInput: {
        width: "75%",
        height: 35,
        alignSelf: 'center',
        borderColor: '#5555ff',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10
    }, okButton: {
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 30,
        backgroundColor: '#6060ff'
    },
    okButtonText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    cancelButton: {
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 30,
        backgroundColor: '#6060ff'
    },
    subContainer: {
        flex: 1,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 2,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    button: {
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#5555ff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8
        }
    }, KeyboardAvoidingView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#5555ff",
        // marginColour: "#5555ff"
    }, addButton: {
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
    addButtonText: {
        color: '#ffff',
        fontWeight: '200',
        fontSize: 20
    }
});
// const styles = StyleSheet.create({
//     subContainer: {
//         flex: 1,
//         fontSize: 20,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     
// })