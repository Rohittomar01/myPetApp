import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function ImageUploader({ onSelect }: any) {
  const [image, setImage] = useState<string | null>(null);

  const openGallery = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });
    if (result.assets) {
      const uri = result.assets[0].uri!;
      setImage(uri);
      onSelect(uri);
    }
  };

  return (
    <View>
      {image && (
        <Image
          source={{ uri: image }}
          style={{ height: 150, borderRadius: 12 }}
        />
      )}
      <Button onPress={openGallery}>Upload Image</Button>
    </View>
  );
}
