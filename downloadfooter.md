src > screens > DownloadScreen > **DownloadScreen.js**
``` js
...
import Icon from 'react-native-vector-icons/AntDesign';

export default function DownloadScreen({ navigation, route }) {
  const { t } = useTranslation();
  const attachments = route.params?.attachments || [];

  const handleOpenLink = (file) => {
    if (file?.attachment_type === 'PDF') {
      console.log('open PDF');
      navigation.navigate('PDFViewerScreen', { param: file.attachment_url });
      return;
    } else {
      navigation.navigate('WebViewScreen', { param: file.attachment_url });
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header
        title={t('Attachments')}
        onBack={() => {
          navigation.goBack();
        }}
      />
      <FlatList
        ListHeaderComponent={
          <View style={{ paddingBottom: 18 }}>
            <Text type="subtitle">{t('Tap to view the attachments')}</Text>
          </View>
        }
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
        data={attachments}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => handleOpenLink(item)} style={styles.card}>
              <Text style={styles.text}>{t(item?.attachment_name)}</Text>
              <Icon name="right" color={Color.text} size={14} />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 ...
```

src > screens > DownloadScreen > **index.js**
``` js
import DownloadScreen from './DownloadScreen';
export default DownloadScreen;
```

src > navigation > **AppNavigation.js**
``` js
...
import DownloadScreen from '../screens/DownloadScreen';

const Stack = createStackNavigator();

export default function AppNavigation(props) {
...
<Stack.Screen name="DownloadScreen" component={DownloadScreen} />
    </Stack.Navigator>
  );
}
```
src > components > Footer > **Footer.js**
``` js
import React from 'react';
import { Color } from '@constants';

import { Button } from '@components';
import { StyleSheet, View } from 'react-native';

export default function Footer({ footerStyle, children, noBorder, ...props }) {
  return (
    <View style={[styles.footer, { borderTopWidth: noBorder ? 0 : 1 }, footerStyle]}>
      {children ? children : <Button {...props} />}
    </View>
  );
}

const styles = StyleSheet.create({
...
```
src > components > Footer > **DownloadFooter.js**
``` js
import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/core';

export default function DownloadFooter({ attachments, title, ...props }) {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('DownloadScreen', { attachments });
  };

  return <Footer title={t('Download Attachments')} onPress={handleNavigate} {...props} />;
}
```
src > components > Badges > **AttachmentBadge.js**
``` js
...

export default function AttachmentBadge({ attachments = [] }) {
  const { t } = useTranslation();

  if (typeof attachments !== 'object') {
    throw 'attachments must be array';
  }

  if (attachments.length === 0) {
    return null;
  }
...

  const displayBadge = () => {
    if (attachments.length <= 2) {
      return attachments.map((item) => {
        return (
          <View style={styles.badge} key={item?.id}>
            <Image source={require('@images/icons/attachment.png')} style={styles.icon} />
            <Text style={styles.text} numberOfLines={1}>
              {item?.attachment_name}
            </Text>
          </View>
        );
      });
    }
    return (
      <>
        <View style={styles.badge}>
          <Image source={require('@images/icons/attachment.png')} style={styles.icon} />
          <Text style={styles.text} numberOfLines={1}>
            {attachments[0].attachment_name}
          </Text>
        </View>
        <View style={styles.badge}>
          <Image source={require('@images/icons/attachment.png')} style={styles.icon} />
          <Text style={styles.text} numberOfLines={1}>
            {attachments[1]?.attachment_name}
          </Text>
        </View>
        <View
          style={{
            borderRadius: 30,
            borderColor: Color.stroke,
            borderWidth: 1,
            minHeight: 28,
            minWidth: 28,
            paddingHorizontal: 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.text}>+{attachments.length - 2}</Text>
        </View>
      </>
    );
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8, marginTop: 4 }}>
      {displayBadge()}
    </View>
  );
}

const styles = StyleSheet.create({
...
```

src > components > Footer > **index.js**
``` js
import Footer from './Footer';
import DownloadFooter from './DownloadFooter';
export default Footer;
export { Footer, DownloadFooter };
```
src > components > Badges > **index.js**
``` js
import AttachmentBadge from './AttachmentBadge';
export { AttachmentBadge };
```

src > components > **index.js**
``` js
...
import { Footer, DownloadFooter } from './Footer';
import { AttachmentBadge } from './Badge';

export {
...
  AttachmentBadge,
  DownloadFooter,
};
```
src > screens > ArticlesScreen > **ArticleDetailScreen.js**
``` js
import { DownloadFooter } from '../../components';

export default function ArticleDetailScreen({ route, navigation }) {
...
      </ScrollView>
      {detail?.article_attachments && detail?.article_attachments.length > 0 && (
        <DownloadFooter attachments={detail?.article_attachments} />
      )}
    </SafeAreaView>
```
src > screens > ArticlesScreen > components > **ArticleItem.js**
``` js
import { AttachmentBadge } from '../../../components';

export default function ArticleItem({ tdata, savedArticles, shownBookmark }) {
...
            </View>
            {tdata?.article_attachments && tdata?.article_attachments.length > 0 && (
              <AttachmentBadge attachments={tdata?.article_attachments} />
            )}
          </View>
```
