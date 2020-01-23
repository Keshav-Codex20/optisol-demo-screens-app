import React from 'react';  
import {StyleSheet, Text, View} from 'react-native';  
import {  createAppContainer } from 'react-navigation';  
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; 
import ProfileScreen from './screens/profile-scr';
import LoginScreen from './screens/login-scr';
import MoreScreen from './screens/more-scr';
import HomeScreen from './screens/home-scr';




  
const TabNavigator = createBottomTabNavigator(  
    {  
      Home:{  
        screen:LoginScreen,  
        navigationOptions:{  
          tabBarLabel:'Home',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="ios-home" color={tintColor} size={25}/>  
          )  
        }  
      },  
      Trending: {  
        screen:HomeScreen,  
        navigationOptions:{  
          tabBarLabel:'Trending',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="ios-bookmarks" color={tintColor} size={25}/>  
          )  
        }  
      }, 
      Subscription: {  
        screen:HomeScreen,  
        navigationOptions:{  
          tabBarLabel:'Subscription',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="ios-mail" color={tintColor} size={25}/>  
          )  
        }  
      }, 
      Profile: {  
        screen:ProfileScreen,  
        navigationOptions:{  
          tabBarLabel:'Profile',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="ios-person" color={tintColor} size={25}/>  
          )  
        }  
      }, 
      More: {  
        screen:MoreScreen,  
        navigationOptions:{  
          tabBarLabel:'More',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="ios-more" color={tintColor} size={25}/>  
          )  
        }  
      },  
    },  
    {  
      initialRouteName: "More" 
    },  
);  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center'  
  },  
});  
  
export default createAppContainer(TabNavigator);  