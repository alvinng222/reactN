## Assist command
        
### Short cut key
* android imulator refresh      >> RR
* IOS Simulator refresh         >> CMD + R 
* shake ios phone               >> Cmd + Ctrl +  z
* shake android phone  >> Cmd + m  

### vsCode on Mac short-cut
* Command-shift G               >> to find 
* command-shift F               >> to find from all directores
* Option + left/right arrow     >> move around words
* command + comma               >> setting

### vsCode, ES7 React/Redux/GraphQL/React-Native snippets

nfn→	`const functionName = (params) => { }`

clo→	`console.log(`object`, object)`

rnfes
``` js
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const $1 = () => {
  return (
    <View>
      <Text> $2 </Text>
    </View>
  )
}

export default $1

const styles = StyleSheet.create({})
```

test
``` js
test('should $1', () => {
  $2
})
```

### git commands
* git --help    
* git branch
* git checkout -b article (new branch)
    
to push to gitLab:
* git add.
* git commit -m "added console.log()"
* git push
        
to update git from main [armorasia-main.zip](https://github.com/alvintwng/reactNative/files/6912153/armorasia-main.zip)
at current branch:  
* git fetch origin main; git merge main
        
### terminal
* % cd ~/               >> root directors    
* % ls -a               >> show hidden files    

---
#### <> { } </>
``` js
        {<>{console.log('Hello !!!!!!')}</>}
      </Tab.Navigator>
```
``` js
      <>{<ArticlesList articlesData={articlesData} />}</>
    </SafeAreaView>
```

---
## console
https://developer.mozilla.org/en-US/docs/Web/API/console

``` js
    console.log(`test`, value);         // LOG  test [5, 3, 1]
    console.info(`test`, value);        // INFO  test [5, 3, 1]
    console.warn(`test`, value);        // WARN  test [5, 3, 1]
    console.error(`test`, value);       // ERROR  test [5, 3, 1]
    console.debug(`test`, value);       // DEBUG  test [5, 3, 1]
```

### console helper
color code from https://stackoverflow.com/a/27111061
``` js
const dd = (txt, array) => {
  console.debug('> > >', '\x1b[31m', txt, '\x1b[0m', typeof array, JSON.stringify(array, null, 2));
};

dd('splashScreen', 'Hello');
```

Findjobs > splashScreen.js
``` js
  componentDidUpdate(prevProps) {
    //ignore the long list
    ({ i18n, ...rest } = this.props);
    dd('this.props less i18n', { ...rest });
    ...
    
  checkVersion() {
        ...
        setTimeout(() => {
          // set timing to delay the console out
          dd('setTimeout... data.data.appVersion[0]', data.data.appVersion[0]);
        }, 2000);
        ...
        
  render() {
    dd('appState, SplashScreen', [this.state.appState, this.state.SplashScreen]);
    const { appState, force, step, isBrowseOtherModal, splashScreen, ...rest } = this.state;
    dd('appState, ...rest', { appState, ...rest });
```
``` yaml
 DEBUG  > > >  splashScreen  string "Hello"
 DEBUG  > > >  appState, SplashScreen  object [
  "active",
  null
]
 DEBUG  > > >  appState, ...rest  object {
  "appState": "active",
  "client": null,
  ...
}
 DEBUG  > > >  this.props less i18n  object {
  "navigation": {
    "state": {
      "routeName": "SplashScreen",
      ...
}
 DEBUG  > > >  setTimeout... data.data.appVersion[0]  object {
  "OS": "ios",
  "version": "1.0",
  ...
```

#### 9 placements
LanguageSetting.js
``` js
  const getLang = async () => {
    console.log('TEST1');
    const lang = await store.get('language');
    setlangState(console.log('TEST2'), lang === 'EN' ? 'English' : ('Chinese', console.log('TEST3')));
  };
  getLang();
  console.log('TEST4');

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {console.log('TEST5')}
      <Header
        onBack={() => {
          console.log('TEST6');
          navigation.goBack();
        }}
        title={('Language settings', console.log('TEST7'))}
      />
      <View style={styles.container}>
        <View style={(styles.currView, console.log('TEST8'))}>
          <Text type="title">{(t('Current language setting is '), console.log('TEST9'))}</Text>
```

### my version
``` js
  const ConsoleLog = ({ children }) => {
    console.log('typeof :', typeof children);
    console.log(JSON.stringify(children, null, 2));
    return false;
  };

  return (
    <SafeAreaView>
      <ConsoleLog>{articlesData[0].title}</ConsoleLog>
```
#### findJobs > HomeScreen.js
``` js
    if (userID) {
      this.setState({ userID: userID }, () => {
        console.log('UserID = ', userID);
      });
      return userID;
    }
```
