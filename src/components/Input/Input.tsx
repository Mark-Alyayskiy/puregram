import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {FieldRenderProps} from 'react-final-form';
import {Eye} from '../../assets/svg';

type FieldProps = FieldRenderProps<string, any> & {
  placeholder?: string;
  type?: string;
  label: string;
  hidePassword?: boolean;
  Icon?: React.ReactNode;
  customContainerStyles?: any;
  customInputStyle?: any;
  onBlur?: ((event: NativeSyntheticEvent<TextInputFocusEventData>) => void) &
    ((args: any) => void);
  onFocus?: ((event: NativeSyntheticEvent<TextInputFocusEventData>) => void) &
    ((args: any) => void);
};

const Input = ({
  meta,
  label,
  hidePassword,
  placeholder,
  input,
  Icon,
  customContainerStyles,
  customInputStyle,
}: FieldProps) => {
  const [isTextHidden, setIsTextHidden] = useState(hidePassword);

  return (
    <View style={[styles.inputContainer, customContainerStyles]}>
      <Text style={styles.label}>{label}</Text>
      <View>
        <View style={styles.image}>{Icon}</View>

        {/* @ts-ignore */}
        <TextInput
          placeholderTextColor="#7C7C7C"
          autoCorrect={false}
          placeholder={placeholder}
          style={[
            meta.touched && meta.error ? styles.inputInvalid : styles.input,
            customInputStyle,
            !Icon && {paddingLeft: 15},
          ]}
          {...input}
          secureTextEntry={isTextHidden}
        />
        {hidePassword && (
          <TouchableOpacity
            onPress={() => setIsTextHidden(!isTextHidden)}
            style={styles.hidePassword}>
            {<Eye />}
          </TouchableOpacity>
        )}

        <View>
          {meta.error && meta.touched && (
            <Text style={styles.errorText}>{meta.error}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default Input;
