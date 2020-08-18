import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
// import { AppTabNavigator } from './AppTabNavigator';
import SideBarMenu from './sideBarMenu';
// import Settings from '../screens/teachers/TeacherSettings';
// import MyDonations from '../screens/MyDonations';
// import NotificationScreen from '../screens/MyNotifications'
// import MyReceivedBookScreen from '../screens/ReceivedBookScreen';
// import TeacherHomeScreen from '../screens/teachers/TeacherHomeScreen';
import AllBooks from '../screens/teachers/AllBooks';

export const TeacherDrawerNavigator = createDrawerNavigator({

    Home: {
        //     screen: TeacherHomeScreen
        // },
        // MyDonations: {
        //     screen: MyDonations
        // },
        // Notification: {
        //     screen: NotificationScreen
        // },
        // Settings: {
        //     screen: Settings
        // },
        // AllBooks: {
        screen: AllBooks
    }

},

    {
        contentComponent: SideBarMenu
    },

    {
        initialRouteName: 'Home'
    }

)