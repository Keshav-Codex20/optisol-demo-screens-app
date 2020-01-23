import React, { Component } from 'react';
import { StyleSheet, Text, View ,TextInput,Image,TouchableOpacity,ScrollView,KeyboardAvoidingView} from 'react-native';


export default class ProfileScreen extends React.Component {

  render() 
  {
     return (
  
  <View style={styles.mainContainer}>
  
  <View style={styles.container}>
    <Text style={styles.headerText}>My Profile</Text>

  <View style={styles.innerContainer}> 
    <View style={styles.SectionStyle}>
 
        <Image source={require('../images/user.png')} style={styles.ImageStyle} />
 
          <TextInput
              style={{flex:1}}
              placeholder="Username"
              returnKeyType="next"
              underlineColorAndroid="transparent"
          />
     </View>    
    <View style={styles.SectionStyle}>
           <Image source={require('../images/password-lock.png')} style={styles.ImageStyle} />
 
          <TextInput
              style={{flex:1}}
              placeholder="Email"
              returnKeyType="go"
              underlineColorAndroid="transparent"
          />
    </View>

    <Text style={styles.socialMediaText}>SOCIAL MEDIA</Text>
   <View >
     <View style={styles.socialMedia}>
 
 
          <TextInput
              style={{flex:1}}
              placeholder="Facebook"
              returnKeyType="next"
              underlineColorAndroid="transparent"
          />

     </View>   
     <View style={styles.socialMedia}>
 
 
          <TextInput
              style={{flex:1}}
              placeholder="Twitter"
              returnKeyType="next"
              underlineColorAndroid="transparent"
          />
          
     </View>   
     <View style={styles.socialMedia}>
 
 
          <TextInput
              style={{flex:1}}
              placeholder="Google"
              returnKeyType="next"
              underlineColorAndroid="transparent"
          />
          
       </View>    
     </View>
   </View>
  </View>

  <View style={{alignItems:'center',justifyContent:'center'}}>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>SAVE PROFILE</Text>
  </TouchableOpacity>
  </View>
</View>
  );
}}


const styles = StyleSheet.create({
  
  mainContainer:{
    flex:1,
    backgroundColor:'white'
    },

  container:{
  	backgroundColor:'#3a30d7',
  	flex:0.97,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText:{
  	color:'white',
  	fontSize:20,
    flex:0.2,
  	
  }
  ,
  innerContainer:{
  	width:335,
    flex:0.65,
  	marginBottom:90,
  	backgroundColor:'white',
  	borderRadius:4,

  },
  socialMediaText:{
    fontSize:15,
    fontWeight:'bold',
    marginLeft:15,
    marginTop:10,
  },

  SectionStyle: {
    
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor:'#bdbdbd',
    borderBottomWidth:1,
    height: 40,
    borderRadius: 5 ,
    margin: 10,
    marginLeft:20,
},
ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center',
},

socialMedia: {
    
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor:'#bdbdbd',
    borderBottomWidth:1,
    height: 30,
    borderRadius: 5 ,
    margin: 5,
    marginLeft:20,
},

 
  button: {
    backgroundColor:'#ff2676',
    width:335,
    height:48.5,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,

},

buttonText:{
    color:'#ffffff',
    fontSize:16,
    fontWeight: 'bold',
 },
  
});
