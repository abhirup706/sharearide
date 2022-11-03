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
  ImageBackground
} from "react-native";


const image = { uri: "https://media.giphy.com/media/l0HlKQPTHOGNUPTZm/giphy.gif" };
import Colors from "../../constants/colors"
import { Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';

  
  const CELL_COUNT = 6;

const VerificationScreen = (props) => {

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

<View id="PO Wise Quantity" style={{borderColor: Colors.primaryColor, borderWidth: 1, height: 0.5*screenHeight, marginTop: 100, borderRadius: 5, justifyContent: "center",padding:40, backgroundColor:"white"}}>
                    

                    <View id="PO Heading" style={{...styles.openButton , backgroundColor: Colors.inactiveColor, alignContent: "center", marginHorizontal:10,borderRadius:0}}>
                        <Text style={{ color: "white", alignSelf: "center"}}>Account Verification</Text>
                    </View>

                   
                    

                    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Please Enter The Verification Code Receieve on Your Email</Text>
      <CodeField
        ref={ref}
        {...prop}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue} 
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>

                                
                   <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "green", marginTop: 15, marginHorizontal:10}}
                        onPress={() => {
                            console.log("Login button Pressed")
                            props.navigation.navigate('UploadScreen')
                        }}
                   >
                    
                    <Text style={{...styles.textStyle}}>Finish</Text>

                   </TouchableHighlight>

                   <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "firebrick", marginTop: 15, marginHorizontal:10}}
                        onPress={() => {
                            console.log("Signup button Pressed")
                            props.navigation.navigate('LoginScreen')
                        }}
                   >
                    
                       <Text style={{...styles.textStyle}}>Go Back</Text>

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
            padding: 10,
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
})
export default VerificationScreen

