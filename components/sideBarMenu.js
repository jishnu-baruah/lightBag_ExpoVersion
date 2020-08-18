import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';

import { DrawerItems } from 'react-navigation-drawer';
// import { Avatar, Icon } from 'react-native-elements';
// import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase';
import db from '../config'
export default class SideBarMenu extends Component {

    state = {
        userId: firebase.auth().currentUser.email,
        // image: "#",
        // name: "",
        // docId: "",

    }



    // selectPicture = async () => {
    //     // try {
    //     const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         allowsEditing: true,
    //         aspect: [4, 3],
    //         quality: 1,
    //     });
    //     if (!cancelled) {
    //         this.uploadImage(uri, this.state.userId);
    //     }

    //     //   console.log(result);
    //     // }
    //     //  catch (E) {
    //     //   console.log(E);
    //     // }
    // };

    // uploadImage = async (uri, imageName) => {

    //     //to upload image to the cloud storage

    //     var response = await fetch(uri)
    //     var blob = await response.blob()
    //     var ref = firebase.storage().ref().child("user_profiles/" + imageName);

    //     return ref.put(blob).then((response) => {
    //         this.fetchImage(imageName);
    //     })

    // }

    // fetchImage = (imageName) => {
    //     var storageRef = firebase.storage().ref().child("user_profiles/" + imageName);


    //     //to get the download url
    //     storageRef.getDownloadURL().then((url) => {
    //         this.setState({ image: url });
    //     })
    //         .catch((error) => {
    //             this.setState({ image: "#" })
    //         })

    // }

    // getUserProfile = () => {
    //     db.collection('users').where('email_id', '==', this.state.userId).onSnapshot((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             this.setState({
    //                 name: doc.data().first_name + " " + doc.data().last_name,
    //                 docId: doc.id,
    //                 image: doc.data().image
    //             })
    //         })
    //     })
    // }

    // componentDidMount() {
    //     this.fetchImage(this.state.userId);
    //     this.getUserProfile()
    // }

    render() {
        return (
            <View style={styles.container}>
                {/* <View style={{ flex: 0.5, borderColor: 'red', alignItems: 'center', backgroundColor: 'orange' }}>
                    <Avatar
                        rounded
                        size="medium"
                        source={{
                            uri: this.state.image
                        }}
                        onPress={() => {
                            this.selectPicture()
                        }}
                        showEditButton
                        overlayContainerStyle={{ backgroundColor: 'white' }}

                        activeOpacity={0.7}
                        containerStyle={{ flex: 0.75, width: '40%', height: '40%', marginLeft: 20, marginTop: 30, borderRadius: 40 }}
                    />
                    <Text style={{ fontWeight: '100', fontSize: 20, paddingTop: 10, }}> {this.state.name}</Text>
                </View> */}
                <View style={styles.drawerItemsContainer}>
                    <DrawerItems {...this.props} />
                </View>

                <View style={styles.logOutContainer}>
                    <TouchableOpacity
                        style={styles.logOutButton}
                        onPress={() => {
                            firebase.auth().signOut()
                            this.props.navigation.navigate('WelcomeScreen')
                        }}
                    >
                        <Icon
                            name="login"
                            type='action'
                            color='black'

                        />
                        <Text> Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15
    },
    drawerItemsContainer: {
        flex: 0.8
    },
    logOutContainer: {
        flex: 0.2,
        justifyContent: 'flex-end',
        paddingBottom: 30
    },
    logOutButton: {
        height: 30,
        width: '100%',
        justifyContent: 'center',

    },
    logOutText: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})