import React from 'react';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import TeacherSelectSectionScreen from './screens/teachers/TeacherSelectSectionScreen';
import TeacherSelectSubjectScreen from './screens/teachers/TeacherSelectSubjectScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import TeacherWelcomeScreen from './screens/teachers/TeacherWelcomeScreen';
import TeacherHomeScreen from './screens/teachers/TeacherHomeScreen';
import TeacherSettings from './screens/teachers/TeacherSettings'
import AllBooks from './screens/teachers/AllBooks'
import StudentWelcomeScreen from './screens/students/StudentWelcomeScreen';
import StudentHomeScreen from './screens/students/StudentHomeScreen';
import RequiredBookScreen from './screens/students/RequiredBookScreen'

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
  TeacherSelectSectionScreen: { screen: TeacherSelectSectionScreen },
  TeacherSelectSubjectScreen: { screen: TeacherSelectSubjectScreen },
  TeacherSettings: { screen: TeacherSettings },
  AllBooks: { screen: AllBooks },
  StudentWelcomeScreen: { screen: StudentWelcomeScreen },
  StudentHomeScreen: { screen: StudentHomeScreen },
  RequiredBookScreen: { screen: RequiredBookScreen },
})

const AppContainer = createAppContainer(switchNavigator);