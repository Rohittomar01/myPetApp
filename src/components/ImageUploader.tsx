import React from 'react';
import {
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import colors from '../utils/Colors';

interface Props {
  onSelect: (uri: string) => void;
}

export default function ImageUploader({ onSelect }: Props) {
  const openOptions = () => {
    Alert.alert('Select Image', 'Choose an option', [
      {
        text: 'Camera',
        onPress: openCamera,
      },
      {
        text: 'Gallery',
        onPress: openGallery,
      },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  const openCamera = async () => {
    const result = await launchCamera({ mediaType: 'photo' });
    if (result.assets) {
      onSelect(result.assets[0].uri || '');
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });
    if (result.assets) {
      onSelect(result.assets[0].uri || '');
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.uploadButton} onPress={openOptions}>
        <Text style={styles.uploadButtonText}>Upload Image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  uploadButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: '#ddf5f4ff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});
