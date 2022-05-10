/***
 * @todo
 * Current carousell have bug, whereby change index in lightbox , slide show not follow
 *
 */

import React, { useState, useRef } from 'react';
import { View, Image, Pressable, Modal, Dimensions, TouchableOpacity } from 'react-native';
import { Color } from '@constants';
import Carousel from 'react-native-snap-carousel';
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from 'react-native-vector-icons/AntDesign';
import { Text } from '@components';

const width = Dimensions.get('window').width;

const ReportImage = ({ onPress, image }) => {
  return (
    <Pressable onPress={onPress}>
      <Image
        source={image}
        style={{ aspectRatio: 1, maxWidth: 400, minWidth: width }}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default function ProductList({ images = [], navigation }) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightBox, setIsLightBox] = useState(false);
  // console.log('images', images);

  const imageArray = images.map((item) => {
    return {
      url: item.attachment_url,
      width: width,
      height: width,
      props: { resizeMode: 'contain' },
    };
  });

  const handleOpenLightBox = (idx) => {
    setCurrentIndex(idx);
    setIsLightBox(true);
  };

  const Ads = ({ item, index }) => {
    return (
      <ReportImage
        image={{ uri: item.attachment_url }}
        onPress={() => {
          handleOpenLightBox(index);
        }}
      />
    );
  };

  const closeLightBox = () => {
    setIsLightBox(false);
  };

  return (
    <>
      <Modal visible={isLightBox} transparent={true}>
        <ImageViewer
          index={currentIndex}
          onCancel={closeLightBox}
          enablePreload
          imageUrls={imageArray}
          enableSwipeDown={true}
          onSwipeDown={closeLightBox}
          onChange={(index) => {
            setCurrentIndex(index);
          }}
        />
        <TouchableOpacity
          onPress={closeLightBox}
          style={{
            position: 'absolute',
            bottom: 60,
            left: width / 2 - 25,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            width: 50,
            backgroundColor: Color.text,
          }}>
          <Icon name="close" color="#fff" size={20} />
        </TouchableOpacity>
      </Modal>
      <Carousel
        ref={carouselRef}
        data={images}
        firstItem={currentIndex}
        sliderWidth={width}
        itemWidth={width}
        slideStyle={{ width: width }}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={10000}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        renderItem={Ads}
        onSnapToItem={(index) => {
          setCurrentIndex(index);
        }}
      />
      {images.length > 1 && (
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            backgroundColor: Color.text + 'dd',
            padding: 4,
            paddingHorizontal: 8,
            borderRadius: 100,
          }}>
          <Text type={'label'} color={'#fff'}>
            {currentIndex + 1}/{images.length}
          </Text>
        </View>
      )}
    </>
  );
}
