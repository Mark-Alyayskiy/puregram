import {TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import {Form, Field} from 'react-final-form';
import {MailIcon, Password} from '../../../assets/svg';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {
  required,
  composeValidators,
  isEmail,
  minLenght,
} from '../../../utils/validation';

import styles from '../styles';
import {SignInFormData} from '../../../types/formData';

type Props = {
  setIsSignIn: (arg: boolean) => void;
  onSubmit: (values: SignInFormData) => void;
  isLoading: boolean;
};

const SignIn = ({setIsSignIn, onSubmit, isLoading}: Props) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({handleSubmit}) => (
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Login to your{'\n'}account</Text>
          </View>
          <Field
            label="Email"
            name="email"
            validate={composeValidators(required, isEmail)}
            component={Input}
            Icon={<MailIcon />}
            placeholder="Email"
          />
          <Field
            label="Enter password"
            hidePassword={true}
            name="password"
            validate={composeValidators(required, minLenght(6))}
            component={Input}
            Icon={<Password />}
            placeholder="Enter password"
          />

          <Button
            label="Sign In"
            onPress={handleSubmit}
            isLoading={isLoading}
          />
          <TouchableOpacity onPress={() => setIsSignIn(false)}>
            <Text style={styles.signUp}>
              Don`t have an account?
              <Text style={styles.textSignUp}> Sign Up.</Text>
            </Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default SignIn;
