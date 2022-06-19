import {SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import SignUp from './components/SignUp';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SignIn from './components/SignIn';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationList} from '../../types/navigation';
import {SignInFormData, SignUpFormData} from '../../types/formData';
import {auth} from '../../api';
import ErrorModal from '../../components/ErrorModal';
import {useDispatch} from 'react-redux';
import {actions} from '../../store/ducks';

const Auth = ({navigation}: NativeStackScreenProps<NavigationList, 'Auth'>) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const dispatch = useDispatch();

  const [isSignInLoading, setIsSignInLoading] = useState(false);
  const [isSignUpLoading, setIsSignUpLoading] = useState(false);
  const [isErrorodalVisible, setIsErrorModalVisible] = useState(false);
  const [errorModalText, setErrorModalText] = useState('');

  const onSignIn = async (values: SignInFormData) => {
    console.log('values', values);
    setIsSignInLoading(true);
    const res = await auth.signIn(values.email, values.password);
    setIsSignInLoading(false);
    if (res.access_token) {
      dispatch(
        actions.auth.setUser({
          id: res.id,
          email: res.email,
          username: res.username,
          accessToken: res.access_token,
        }),
      );
      navigation.navigate('Home');
    } else if (res.error) {
      setIsErrorModalVisible(true);
      setErrorModalText(res.message);
    }
  };

  const onSignUp = async (values: SignUpFormData) => {
    setIsSignUpLoading(true);
    const res = await auth.signUp(
      values.email,
      values.password,
      values.username,
    );
    setIsSignUpLoading(false);
    console.log('values', values);

    if (res.error) {
      setIsErrorModalVisible(true);
      setErrorModalText(res.message);
    } else {
      setIsSignIn(true);
    }
  };
  return (
    <KeyboardAwareScrollView style={styles.body}>
      <SafeAreaView>
        <ErrorModal
          errorText={errorModalText}
          visible={isErrorodalVisible}
          onPress={() => setIsErrorModalVisible(false)}
        />
        <ScrollView>
          {isSignIn ? (
            <SignIn
              setIsSignIn={setIsSignIn}
              onSubmit={onSignIn}
              isLoading={isSignInLoading}
            />
          ) : (
            <SignUp
              setIsSignIn={setIsSignIn}
              onSubmit={onSignUp}
              isLoading={isSignUpLoading}
            />
          )}
        </ScrollView>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Auth;
