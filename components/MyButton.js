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

export default class MyButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    runThroughProps = () => {
        this.props.values.map((value) => {
            console.log(value)
            return (
                <View>
                    <TouchableOpacity

                        onPress={() => { Alert.alert(value) }}>
                        <Text>{value}</Text>
                    </TouchableOpacity>
                </View>
            )

        })
    }

    render() {
        return (
            <View style={styles.button}>
                {/* <TouchableOpacity
                    onPress={() => {
                        Alert.alert("pressed")
                        // this.props.navigation.navigate("TeacherSelectSectionScreen")
                    }}
                >
                    <Text>{this.props.text}</Text>

                </TouchableOpacity> */}
                {this.runThroughProps}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        margin: 20,
        color: '#ff3d00'
    }
})

// const MyButton = props => {
//     return (
//         <View>
//             <TouchableOpacity
//                 onPress={() => {
//                     Alert.alert("pressed")
//                     // this.props.navigation.navigate("TeacherSelectSectionScreen")
//                 }}
//             >
//                 <Text>{props.text}</Text>

//             </TouchableOpacity>
//         </View>
//     )
// }

// export default MyButton;