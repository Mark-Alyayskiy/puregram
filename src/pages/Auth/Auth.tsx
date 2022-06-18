import {SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import SignUp from './components/SignUp';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SignIn from './components/SignIn';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationList} from '../../types/navigation';
import {SignInFormData, SignUpFormData} from '../../types/formData';

const Auth = ({navigation}: NativeStackScreenProps<NavigationList, 'Auth'>) => {
  const [isSignIn, setIsSignIn] = useState(true);

  const onSignIn = (values: SignInFormData) => {
    console.log('values', values);
    navigation.navigate('Home');
  };

  const onSignUp = (values: SignUpFormData) => {
    console.log('values', values);
    setIsSignIn(true);
  };
  return (
    <KeyboardAwareScrollView style={styles.body}>
      <SafeAreaView>
        <ScrollView>
          {isSignIn ? (
            <SignIn setIsSignIn={setIsSignIn} onSubmit={onSignIn} />
          ) : (
            <SignUp setIsSignIn={setIsSignIn} onSubmit={onSignUp} />
          )}
        </ScrollView>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Auth;
