import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
  ScrollView,
  View,
  Pressable,
} from 'react-native';
import { Text, Modal } from '@components';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { request, PERMISSIONS } from 'react-native-permissions';
import { Color } from '@constants';
import { useTranslation } from 'react-i18next';

const SelectionButton = ({ image, imageActive, title, isSelected, onPress, buttonStyle }) => {
  return (
    <Pressable style={[{ alignItems: 'center', margin: 18 }, buttonStyle]} onPress={onPress}>
      <View>
        <Image
          source={isSelected ? imageActive : image}
          style={{ width: 118, height: 136, marginBottom: 9 }}
        />
        {isSelected && (
          <Image
            source={require('@images/report/correct.png')}
            style={{ width: 30, height: 30, position: 'absolute', top: -10, right: -10 }}
          />
        )}
      </View>
      <Text
        type="subtitle"
        style={{
          fontWeight: isSelected ? 'bold' : 'normal',
          color: isSelected ? Color.text : Color.label,
        }}>
        {title}
      </Text>
    </Pressable>
  );
};

export default function ImagePicker({ isVisible, toggleVisible, onCompleteSelectImage }) {
  const { t } = useTranslation();
  const options = {
    quality: 1.0,
    maxWidth: 500,
    maxHeight: 500,
    storageOptions: {
      skipBackup: true,
    },
    includeBase64: true,
  };

  const handlePickImage = async () => {
    // console.log('launch 1');
    toggleVisible();
    setTimeout(() => {
      launchImageLibrary(options, (response) => {
        console.log('Response = ', response);
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const file = [
            {
              uri: response.assets[0].uri,
              type: response.assets[0].type,
              name: response.assets[0].fileName
                ? response.assets[0].fileName + response.assets[0].uri
                : response.assets[0].uri + 'image',
              data: response.assets[0].base64,
            },
          ];
          onCompleteSelectImage(file);
        }
      });
    }, 600);
  };

  const checkCameraPermission = async () => {
    /*CAMERA : */
    //Grant the permission for camera
    if (Platform === 'ios') {
      const response = await request(PERMISSIONS.IOS.CAMERA);
      return response;
    } else {
      const response = await request(PERMISSIONS.ANDROID.CAMERA);
      return response;
    }
  };

  const handleLaunchCamera = async () => {
    toggleVisible();
    setTimeout(async () => {
      const cameraPermission = await checkCameraPermission();
      console.log('cameraPermission: ', cameraPermission);
      if (cameraPermission !== 'granted') {
        Alert.alert(t('Whoops'), t('We do not have the access to your camera'));
        return;
      }
      launchCamera(options, (response) => {
        //console.log('Response = ', response);
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const file = [
            {
              uri: response.assets[0].uri,
              type: response.assets[0].type,
              name: response.assets[0].fileName
                ? response.assets[0].fileName + response.assets[0].uri
                : response.assets[0].uri + 'image',
              data: response.assets[0].base64,
            },
          ];
          onCompleteSelectImage(file);
        }
      });
    }, 400);
  };

  return (
    <>
      <Modal
        type={'bottom'}
        isVisible={isVisible}
        onRequestClose={toggleVisible}
        title="Upload your profile photo">
        <SafeAreaView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}>
          <ScrollView style={{ padding: 36, paddingVertical: 16 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 32,
              }}>
              <SelectionButton
                image={require('@images/report/photo.png')}
                imageActive={require('@images/report/incidentActive.png')}
                title={t('Choose From Library')}
                onPress={handlePickImage}
              />
              <SelectionButton
                image={require('@images/report/camera.png')}
                imageActive={require('@images/report/hazardActive.png')}
                title={t('Take Photo')}
                onPress={handleLaunchCamera}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({});
