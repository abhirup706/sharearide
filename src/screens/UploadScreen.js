import React, { useState } from "react";
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Keyboard,
  ScrollView,
  SafeAreaView
} from "react-native";



import Colors from "../../constants/colors"
import { Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";



const UploadScreen = (props) => {

    const [status, requestPermission] = ImagePicker.useCameraPermissions();

    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        console.log(result.uri);
        console.log(result);
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        })
    }

    const takePhoto = async () => {
        const {
          status: cameraPerm
        } = await Permissions.askAsync(Permissions.CAMERA);
    
        const {
          status: cameraRollPerm
        } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    
        // only if user allows permission to camera AND camera roll
        if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
          let pickerResult = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
          });
    
          this._handleImagePicked(pickerResult);
        }
      };

    const screenHeight = Dimensions.get('window').height
    const screenWidth = Dimensions.get('window').width

    const [userName, SetUserName] = useState("")
    const [password, SetPassword] = useState("")
    const [email, SetEmail] = useState("")
    const [rePassword, SetRePassword] = useState("")
    const [ExcessQuantity, SetExcessQuantity] = useState("")

    return (
        <ScrollView style={{marginHorizontal: 10, alignContent: "center"}}
            keyboardShouldPersistTaps="always"
        >

<View id="PO Wise Quantity" style={{borderColor: Colors.primaryColor, borderWidth: 1, height: 0.5*screenHeight, marginTop: 15, borderRadius: 5, justifyContent: "center"}}>
                    

                    <View id="PO Heading" style={{...styles.openButton , backgroundColor: Colors.inactiveColor, alignContent: "center", marginHorizontal:10}}>
                        <Text style={{ color: "white", alignSelf: "center"}}>SignUp Screen</Text>
                    </View>

                   
            <View style={{flexDirection:"row"}}>
            <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "darkslateblue", marginTop: 15, marginHorizontal:10,flex:1}}
                        onPress={() => {
                            console.log("Login button Pressed")
                            pickImage()
                        }}
                   >
                    
                    <Text style={{...styles.textStyle}}>Upload</Text>

                   </TouchableHighlight>

                   <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "darkslateblue", marginTop: 15, marginHorizontal:10,flex:1}}
                        onPress={() => {
                            console.log("Signup button Pressed")
                            takePhoto()
                        }}
                   >
                    
                       <Text style={{...styles.textStyle}}>Take Picture</Text>

                   </TouchableHighlight></View>       

              <View id="idType" style={{...styles.textInput}}>
                    <TextInput 
                        placeholder="Enter Full Name"
                        style={{marginLeft: 2}}
                        placeholderTextColor={"grey"}
                        value={userName}
                        onChangeText = {(newUsername) => {
                            SetUserName(newUsername)
                         }}
                    />
                </View>

                <View id="idNumber" style={{...styles.textInput}}>
                    <TextInput 
                        placeholder="Enter Document Number"
                        style={{marginLeft: 2}}
                        placeholderTextColor={"grey"}
                        value={email}
                        onChangeText = {(newEmail) => {
                            SetEmail(newEmail)
                         }}
                    />

                    
                </View>
                <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "green", marginTop: 15, marginHorizontal:10}}
                        onPress={() => {
                            console.log("Login button Pressed")
                            props.navigation.navigate('VerificationScreen')
                        }}
                   >
                    
                    <Text style={{...styles.textStyle}}>Continue</Text>

                   </TouchableHighlight>

                   <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "firebrick", marginTop: 15, marginHorizontal:10}}
                        onPress={() => {
                            console.log("Signup button Pressed")
                            props.navigation.navigate('SignupScreen')
                        }}
                   >
                    
                       <Text style={{...styles.textStyle}}>Go Back</Text>

                   </TouchableHighlight>

                </View>

        </ScrollView>
    )


}

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
            padding: 10,
            elevation: 10,
 
          }
})

export default UploadScreen
