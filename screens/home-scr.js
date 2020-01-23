import React ,{Component} from 'react';  
import {StyleSheet, Text, View} from 'react-native';

class HomeScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>This is Home Screen</Text>  
        </View>  
    );  
  }  
}  
export default HomeScreen
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ffffff'
  }
});
