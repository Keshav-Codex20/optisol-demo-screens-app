
import React, { Component } from 'react';
import { StyleSheet, Text, View ,TextInput,Image,TouchableOpacity,LinearGradient,ScrollView,KeyboardAvoidingView} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginScreen extends React.Component {

  render() 
  {
     
 
  return (
  
<KeyboardAvoidingView style={styles.mainContainer} behavior="padding" > 

    <View style={styles.container}>
    
         <Image
          style={styles.icon}
          source={require('../images/login-icon.png')}
          />
     
         <Text style={styles.title}>Radiant</Text>
         <Text style={styles.baseTitle}>Beautifully crafted UI Kit for you</Text>
   
    </View>

  
    <View style={styles.SectionStyle}>
 
          <Image source={require('../images/user.png')} style={styles.ImageStyle} />
 
          <TextInput
              style={{flex:1}}
              placeholder="Enter Your Email Here"
              returnKeyType="next"
              underlineColorAndroid="transparent"
          />
    </View>    
    <View style={styles.SectionStyle}>
           <Image source={require('../images/password-lock.png')} style={styles.ImageStyle}             />
 
          <TextInput
              style={{flex:1}}
              placeholder="Password"
              returnKeyType="go"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
          />
    </View>

        <TouchableOpacity style={styles.button} >
    
           <Text style={styles.buttonText}>Login</Text>
      
        </TouchableOpacity>

        <Text style={styles.forgetPasswordText}>Forget Password</Text>
   
        <TouchableOpacity style={styles.secondButton}>

          <Text style={styles.secondButtonText}>Sign Up</Text>
      
        </TouchableOpacity>

       <Text style={styles.bottomText}>
          By signing up you agree to our Term of Use & Privacy Policies
       </Text>
 
 

</KeyboardAvoidingView>  
 
  );
}}


const styles = StyleSheet.create({
  mainContainer:{
 
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffffff',

  },
  container: {
    flex:1,
    width:375,
    backgroundColor: '#3a30d7',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  icon:{
    width: 68.5, 
    height: 69,
    marginBottom:16
    },

  title: {
    color:'#ffffff',
    fontSize:55,
    

  },

  baseTitle: {
   fontSize:15,
   color:'#ffffff',
   opacity:0.8,

  },

  baseContainer: {
  flex:1,
  width:375,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#ffffff',


  },

  textInputs:{
    width:225,
    height:50,
    backgroundColor:'#ffffff',
    color:'#263238',
    borderRadius:50,
    borderColor:'yellow',
    alignItems:'center',
    justifyContent:'center',
  },
  SectionStyle: {
    
    width:225,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor:'#bdbdbd',
    borderBottomWidth:1,

    height: 40,
    borderRadius: 5 ,
    margin: 10
},
forgetPasswordText:{
    fontSize:15 ,
    color:'#263238',
    marginTop:20
    }
,
ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
},
button: {

backgroundColor:'#ff2676',
width:225,
height:48.5,
borderRadius:40,
alignItems:'center',
justifyContent:'center',

},

buttonText:{
  color:'#ffffff',
  fontSize:21,

 },

secondButton: {
backgroundColor:'#ffffff',
width:225,
height:48.5,
borderRadius:40,
borderColor:'#263238',
borderWidth:0.5,
alignItems:'center',
justifyContent:'center',
marginTop:20,

},

secondButtonText:{
  color:'#263238',
  fontSize:21,

 },
 
 bottomText:{
 fontSize:15 ,
 color:'#263238' ,
 justifyContent:'center',
 paddingRight:41,
 paddingLeft:41,
 paddingTop:10,
 }
});
