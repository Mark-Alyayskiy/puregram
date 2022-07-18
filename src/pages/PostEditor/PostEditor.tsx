import {View, Image, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainNavigationList} from '../../types/navigation';
import styles from './styles';
import {Form, Field} from 'react-final-form';
import Input from '../../components/Input';
import {required} from '../../utils/validation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../components/Button';
import {posts} from '../../api';
import {useSelector} from 'react-redux';
import {selectors} from '../../store/ducks';

const PostEditor = ({
  route,
  navigation,
}: NativeStackScreenProps<MainNavigationList, 'PostEditor'>) => {
  const [isLoading, setIsLoading] = useState(false);
  const {imageUrl} = route.params;
  const accessToken = useSelector(selectors.auth.selectAccessToken);

  const onSubmit = async (values: {description: string}) => {
    setIsLoading(true);
    await posts.addPost(values.description, imageUrl, accessToken);
    setIsLoading(false);
    navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <KeyboardAwareScrollView>
        <Image style={styles.image} source={{uri: 'file://' + imageUrl}} />
        <Form
          onSubmit={onSubmit}
          render={({handleSubmit, form}) => (
            <View>
              <Text style={styles.formTitle}>
                Add description to your photo
              </Text>
              <Field
                label="Post description"
                name="description"
                validate={required}
                component={Input}
                placeholder="Description..."
              />
              <View style={styles.formButtons}>
                <Button
                  label="Cancel"
                  customStyles={styles.formButton}
                  onPress={() => navigation.navigate('AddPost')}
                />
                <Button
                  label="Create post"
                  customStyles={styles.formButton}
                  onPress={(e: any) =>
                    handleSubmit(e)?.then(() => form.reset())
                  }
                  isLoading={isLoading}
                />
              </View>
            </View>
          )}
        />
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default PostEditor;
