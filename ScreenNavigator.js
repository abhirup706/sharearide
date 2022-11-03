import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from "./src/screens/HomeScreen";
import TextInputModal from './src/screens/TextInputModal';
import InspectionForm from "./src/screens/InspectionForm"
import LoginScreen from "./src/screens/LoginScreen"
import SignupScreen from "./src/screens/SignupScreen"
import UploadScreen from "./src/screens/UploadScreen"
import VerificationScreen from "./src/screens/VerificationScreen"
import VerifiedScreen from './src/screens/VerifiedScreen';

const ScreenNavigator = createStackNavigator(
    {
      HomeScreen: HomeScreen,
      InspectionForm: InspectionForm,
      TextInputModal: TextInputModal,
      LoginScreen: LoginScreen,
      SignupScreen:SignupScreen,
      UploadScreen:UploadScreen,
      VerificationScreen:VerificationScreen,
      VerifiedScreen:VerifiedScreen
    
    },
    {
      initialRouteName: "LoginScreen",
      defaultNavigationOptions: {
        title: "Share-A-Ride"
      }
    }
  );


  export default createAppContainer(ScreenNavigator)