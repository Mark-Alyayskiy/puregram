import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Form, Field} from 'react-final-form';
import {Name, MailIcon, Password} from '../../../assets/svg';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {
  required,
  composeValidators,
  isEmail,
  minLenght,
} from '../../../utils/validation';
import styles from '../styles';
import {SignUpFormData} from '../../../types/formData';

type Props = {
  setIsSignIn: (arg: boolean) => void;
  onSubmit: (values: SignUpFormData) => void;
};

const SignUp = ({setIsSignIn, onSubmit}: Props) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({handleSubmit}) => (
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Create your{'\n'}account</Text>
          </View>
          <Field
            validate={required}
            label="Enter your First name"
            name="firstName"
            component={Input}
            Icon={<Name />}
            placeholder="Enter your First name"
          />
          <Field
            validate={required}
            label="Enter your Last name"
            name="lastName"
            component={Input}
            Icon={<Name />}
            placeholder="Enter your Last name"
          />
          <Field
            label="Enter email"
            name="email"
            validate={composeValidators(required, isEmail)}
            component={Input}
            Icon={<MailIcon />}
            placeholder="Enter email"
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

          <Button label="Sign Up" onPress={handleSubmit} />
          <TouchableOpacity onPress={() => setIsSignIn(true)}>
            <Text style={styles.signUp}>
              Allready have an account?
              <Text style={styles.textSignUp}> Sign Up.</Text>
            </Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default SignUp;
