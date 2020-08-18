import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ViewBase,
} from 'react-native';
import MyButton from '../components/MyButton';

import MyCommonHeader from '../components/MyCommonHeader';


export default class Test extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MyCommonHeader title={"School"} navigation={this.props.navigation} />
                <View >
                    <MyButton text="Class 1" navigation={this.props.navigation} />
                    {/* <View style={styles.button}>
                        <TouchableOpacity
                            // i7fyufuyfyfufyufyfufuufuyfuy
                            style={styles.button}
                            onPress={() => {
                                Alert.alert("pressed")
                                // this.props.navigation.navigate("TeacherSelectSectionScreen")
                            }}
                        >
                            <Text>Class 2</Text>

                        </TouchableOpacity>
                    </View> */}
                    {/* <MyButton text="Class 2" navigation={this.props.navigation}/>
                    <MyButton text="Class 3" />
                    <MyButton text="Class 4" />
                    <MyButton text="Class 5" />
                    <MyButton text="Class 6" />
                    <MyButton text="Class 7" />
                    <MyButton text="Class 8" />
                    <MyButton text="Class 9" />
                    <MyButton text="Class 10" /> */}

                </View>
            </View>
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
})