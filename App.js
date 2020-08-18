import React from 'react';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
// import TeacherDrawerNavigater from './components/TeacherDrawerNavigator'
// import TeacherSelectSectionScreen from './screens/teachers/TeacherSelectSectionScreen'
// import TeacherStackNavigator from './components/TeacherStackNavigator'
import WelcomeScreen from './screens/WelcomeScreen';
import TeacherWelcomeScreen from './screens/teachers/TeacherWelcomeScreen';
import TeacherHomeScreen from './screens/teachers/TeacherHomeScreen';
import StudentWelcomeScreen from './screens/students/StudentWelcomeScreen';
import Test from './screens/test'


console.disableYellowBox = true;

export default function App() {
  return (
    <AppContainer />
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  TeacherWelcomeScreen: { screen: TeacherWelcomeScreen },
  TeacherHomeScreen: { screen: TeacherHomeScreen },
  // TeacherSelectSectionScreen: { screen: TeacherSelectSectionScreen },
  StudentWelcomeScreen: { screen: StudentWelcomeScreen },
  Test: { screen: Test }
  // TeacherStackNavigator: { screen: TeacherStackNavigator },
  // TeacherDrawerNavigater: { screens: TeacherDrawerNavigater },
})

const AppContainer = createAppContainer(switchNavigator);