import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Keyboard,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Image
} from "react-native";


const image = { uri: "https://media.giphy.com/media/l0HlKQPTHOGNUPTZm/giphy.gif" };
import Colors from "../../constants/colors"
import { Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import Verified from '../../assets/verified.png'
import Logo from '../../assets/logo.jpeg'

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';

  
  const CELL_COUNT = 6;

const WelcomeScreen = (props) => {

    const screenHeight = Dimensions.get('window').height
    const screenWidth = Dimensions.get('window').width

    const [userName, SetUserName] = useState("")
    const [password, SetPassword] = useState("")
    const [email, SetEmail] = useState("")
    const [rePassword, SetRePassword] = useState("")
    const [ExcessQuantity, SetExcessQuantity] = useState("")

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
      });

    

    return (
      <View>
        <ImageBackground source={image} style={styles.image}>
        <ScrollView style={{marginHorizontal: 10, alignContent: "center"}}
            keyboardShouldPersistTaps="always"
        >

<View id="PO Wise Quantity" style={{borderColor: Colors.primaryColor, borderWidth: 1, height: 0.5*screenHeight, marginTop: 100, borderRadius: 5, justifyContent: "center",padding:40,paddingTop:20, backgroundColor:"white"}}>
                    

                    <View id="PO Heading" style={{...styles.openButton , backgroundColor: Colors.inactiveColor, alignContent: "center", marginHorizontal:5,borderRadius:0}}>
                        <Text style={{ color: "white", alignSelf: "center"}}>Welcome, Abhirup!</Text>
                    </View>

                   

                <Image source={Logo} style={styles.verified}/>

                   <Text style={{...styles.textStyle,color:"black",fontSize:15,flex:1,}}>Choose Your Role</Text>  

                   <Text style={{...styles.textStyle,color:"grey",fontSize:10,flex:1,marginBottom:1}}>Share a Ride as a Passenger</Text>  
                   <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "coral", marginBottom: 15, marginHorizontal:10}}
                        onPress={() => {
                            console.log("Login button Pressed")
                            props.navigation.navigate('UploadScreen')
                        }}
                   >
                    
                    
                    
                    <Text style={{...styles.textStyle}}>Rider</Text>


                   </TouchableHighlight>

 
                    <Text style={{...styles.textStyle,color:"grey",fontSize:10,flex:1,}}>Share a Ride as a Host</Text>  
                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "cornflowerblue", marginBottom: 15, marginHorizontal:10}}
                        onPress={() => {
                            console.log("Signup button Pressed")
                            props.navigation.navigate('LoginScreen')
                        }}
                   >
                    
                       <Text style={{...styles.textStyle}}>Provider</Text>

                    </TouchableHighlight>

                </View>

        </ScrollView>
        </ImageBackground>
        </View>
    );

};

const styles = StyleSheet.create({
    textInput: {
       
        fontWeight:"bold", 
        justifyContent: 'center', 
        marginVertical: 10, 
        marginHorizontal:10,
        height: 50,  
        borderColor: Colors.inactiveColor, 
        borderWidth:3, 
        borderRadius: 5,
        padding:5
    },


    textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"

          },

    openButton: {
            backgroundColor: Colors.primaryColor,
            borderRadius: 10,
            padding: 5,
            elevation: 10,
 
          },
          root: {flex: 1, padding: 20},
          title: {textAlign: 'center', fontSize: 15,marginTop:20,marginHorizontal:10},
          codeFieldRoot: {marginTop: 20},
          cell: {
            width: 40,
            height: 40,
            lineHeight: 38,
            fontSize: 24,
            borderWidth: 2,
            borderColor: '#00000030',
            textAlign: 'center',
          },
          focusCell: {
            borderColor: '#000',
          },
          image: {
            justifyContent: "center",
            width: "100%",
            height: "100%"
          },
          verified:{
            justifyContent: "center",
            width:"45%",
            height:"45%",
            marginLeft:"27%",
            marginTop:"5%"
          }
})
export default WelcomeScreen

