fetchImageURL

## onError
ArticleItem.js
``` js
              style={styles.feaureImageSource}
              onError={({ nativeEvent: { error } }) => console.log(error)}
            />
          </View>
```
``` console
 LOG  Error decoding image data <NSData 0x600000fe0cf0; 1526 bytes>
 LOG  Error decoding image data <NSData 0x600000fa6610; 29336 bytes>
 LOG  Error decoding image data <NSData 0x600000f3ed00; 1526 bytes>
```

---

---
HomeScreen.js
``` js
    const query = `
        query getEvent {
            event(order_by: {updated_at: desc}) {
            name
            image_url
            id
            event_start
            event_end
            description
            location
            }
        }
      `;
```
EventScreen.js
``` js
          <>
            <View style={styles.banner}>
              <Image
                source={
                  event?.image_url
                    ? { uri: event?.image_url }
                    : require('@images/defaultBanner.png')
                }
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
              />
            </View>
```
EventCarItem.js
``` js
import { useNavigation } from '@react-navigation/native';

export default function EventCarditem({ item }) {
  const { t } = useTranslation();
  const navigation = useNavigation();

  return (
  ...
        <View style={styles.banner}>
          <Image
            source={
              item?.image_url ? { uri: item?.image_url } : require('@images/defaultBanner.png')
            }
            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
          />
        </View>
```
### ArticleItem.js
``` js
  const nullImage = { image: require('@images/defaultBannerSquare.png') };
  const actualImage = { image: { uri: tdata?.feature_image } };
  // const [articleImage, setArticleImage] = useState({ image: { uri: tdata?.feature_image } });
  const [articleImage, setArticleImage] = useState(actualImage);

  return (
  ...
          <View style={styles.featureImage}>
            <Image
              source={articleImage.image}
              resizeMode="contain"
              style={styles.feaureImageSource}
              onError={() => setArticleImage(nullImage)}
              // onError={() => setArticleImage({ image: require('@images/defaultBannerSquare.png') })}
            />
          </View>
          {console.log('id: ', tdata.id, ' Image: ', articleImage.image)}
        </View>
```
#### ArticleDetailScreen.js
``` js
  const detailId = route.params.item.id;
  const nullImage = { image: require('@images/defaultBanner.png') };
  const [detail, setDetail] = useState(null);
  const [detailImage, setDetailImage] = useState(nullImage);
  const [isLoading, setIsLoading] = useState(true);
  ...
  const getDetail = async () => {
      if (!detailId) {
    ...
    const data = await response.json();
    setDetail(data.data.article_by_pk);
    setDetailImage({ image: { uri: data.data.article_by_pk.feature_image } });
    setIsLoading(false);
  };

  return (  
  ...
            <View style={styles.featureImage}>
              <Image
                source={detailImage.image}
                resizeMode="cover"
                style={styles.feaureImageSource}
                onError={() => setDetailImage(nullImage)}
              />
            </View>
```

---

### [Understanding “resizeMode” in React Native](https://mehrankhandev.medium.com/understanding-resizemode-in-react-native-dd0e455ce63)

1 ) “cover” :

Scale the image uniformly (maintain the image’s aspect ratio) so that both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding).

2 ) “contain” :

Scale the image uniformly (maintain the image’s aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).

3 ) “stretch” :

Scale width and height independently, This may change the aspect ratio of the src.

4 ) “repeat” :

Repeat the image to cover the frame of the view. The image will keep its size and aspect ratio, unless it is larger than the view, in which case it will be scaled down uniformly so that it is contained in the view.

5 ) “center” :

Center the image in the view along both dimensions. If the image is larger than the view, scale it down uniformly so that it is contained in the view.



----
TestScreen.js, ImageUrl Error check and redirect
``` js
import React, { useEffect, useState } from 'react';
import { Color, Config } from '@constants';

export default function TestScreen() {
  ////// Hasura query    //////
  const nullImage = { image: require('@images/defaultBannerSquare.png') };
  // const actualImage = { image: { uri: detail?.feature_image } };
  const [detailImage, setDetailImage] = useState(nullImage);

  const [detail, setDetail] = useState(null);
  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    const query = `
    query getDetail {
      article_by_pk(id: 3) {
        id
        feature_image
      }
    }
  `;

    const response = await fetch(Config.graphQL, {
      method: 'POST',
      headers: Config.graphQLHeader,
      body: JSON.stringify({
        query,
      }),
    });

    // console.log('response : ', response);
    const data = await response.json();
    setDetail(data.data.article_by_pk);

    console.log('>>>>>>>>>>>>>> ', data.data.article_by_pk.feature_image);
    setDetailImage({ image: { uri: data.data.article_by_pk.feature_image } });
  };
  {
    console.log('>>> detailImage :  ', detailImage);
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="TestScreen" />
      <View style={styles.container}>
        <View>
          {/* <Image source={require('@images/defaultBannerSquare.png')} /> */}
          {/* <Image source={{ uri: detail?.feature_image }} style={styles.feaureImageSource} /> */}
          <Image
            source={detailImage.image}
            style={styles.feaureImageSource}
            // onError={() => setDetailImage({ image: require('@images/defaultBannerSquare.png') })}
            onError={() => setDetailImage(nullImage)}
          />
        </View>
        {console.log(' Image: ', detailImage)}
        
        ...
const styles = StyleSheet.create({
  feaureImageSource: {
    height: 148,
    width: '100%',
    borderRadius: 15,
  },
```
---
