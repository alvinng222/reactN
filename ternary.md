


``` js
function nameFunction(props) {
    return (
        <Button style={props.isSelected ? styles.Active : styles.Inactive }>{props.title}</Button>
    );
}

const styles = {
    Active: {
        backgroundColor: 'orange'
    },
    Inactive: {
        backgroundColor: 'grey'
    },
}
```

ArticleDetailScreen.js from
``` js
  const articleSaved = async (tdataId = item.id) => {
    let array = await store.get('articles');
    
    if (!isSaved) {
      if (!array) {
        store.save('articles', [tdataId]);
      }
      if (array) {
        let newarray = [...array, tdataId];
        store.save('articles', newarray);
      }
    }
    if (isSaved) {
      let newarray = array.filter((itm) => itm !== tdataId);
      store.save('articles', newarray);
    }
  };
  
  return (
```
to:
``` js
  const articleSaved = async (tdataId = item.id) => {
    let array = await store.get('articles');
    let newarray = [];
    isSaved
      ? (newarray = array.filter((itm) => itm !== tdataId))
      : array
      ? (newarray = [...array, tdataId])
      : (newarray = [tdataId]);
    store.save('articles', newarray);
    // console.log('newarray ', newarray);
  };

  return (
```
---
#### true true false
findjobs > splashScreen.js
``` js
  checkProfileAndGetAds = async () => {
    ...
    if (profile && hasFullProfile && isVerified === false) {
      // true & true & false
      this.props.navigation.navigate('Auth', {
        showAuthRequire: true,
        closeForm: () => this.getAds(),
      });
    } else {
      this.getAds();
    }
  };
```
#### .compare
``` js
        const appVersion = data.data.appVersion[0];
        const canUpdate = compareVersions.compare(version, appVersion.version, '<');
        const mustUpdate = compareVersions.compare(version, appVersion.forceVersion, '<');

          if (canUpdate || mustUpdate) {
            this.setState({
              force: mustUpdate ? true : false,
              updateModal: true,
              updateText: appVersion.updateText,
            });
            return;
          }
```
