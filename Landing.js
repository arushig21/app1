import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import { Button} from 'native-base';

var myBackground = require ('../assets/landing1.jpg');

class Landing extends React.Component{
  render(){
    return(
      <View style={styles.container}>
          <ImageBackground style ={styles.container} source={myBackground}>
           <View style= {styles.viewStyle}>
           <Text style={styles.titleStyle}> TunesnearU </Text>
           <Text style={styles.landingText}>
          Find upcoming concerts near you by searching for artist, venue or your zipcode
           </Text>
          <Button
           block= {true}
           style={styles.buttonStyle}
          onPress= {()=> this.props.switchScreen("search")}
          >
          <Text style={styles.buttonText}> Search </Text>
         </Button>
          </View>
           </ImageBackground>
      </View>
    )
  }
}

export default Landing;

const styles= {
  container: {
    flex:1,
    marginTop: Platform.OS === "android" ? 24:0,
  },
  viewStyle: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
titleStyle: {
  fontSize: 30,
  color: 'blue',
  alignItems: 'center',
  fontWeight: 'bold',
},
buttonStyle:{
  margin:10,
},
buttonText: {
color:'white',
},
landingText:{
  marginTop: 20,
  fontSize:15,
  fontWeight: 'bold',
  justifyContent: 'center',
},
}
