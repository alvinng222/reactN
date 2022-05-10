array

https://stackoverflow.com/questions/4689856/how-to-change-value-of-object-which-is-inside-an-array-using-javascript-or-jquer

``` js
  //Initailize array of objects.
  let myArray = [
      { id: 0, name: 'Jhon' },
      { id: 1, name: 'Sara' },
      { id: 2, name: 'Domnic' },
      { id: 3, name: 'Bravo' },
    ],
    //Find index of specific object using findIndex method.
    objIndex = myArray.findIndex((obj) => obj.id === 1);

  //Log object to Console.
  console.log('Before update: ', myArray[objIndex]);

  //Update object's name property.
  myArray[objIndex].name = 'Laila';

  //Log object to console again.
  console.log('After update: ', myArray[objIndex]);

  //  LOG  Before update:  {"id": 1, "name": "Sara"}
  //  LOG  After update:  {"id": 1, "name": "Laila"}
  
  myArray = [...myArray, { id: 4, name: 'Aila' }];
  
    // to remove current index from array
    let filteredArray = myArray.filter((item) => item !== myArray[objIndex]);
    console.log('filteredArray', filteredArray);
  
```
ArticleItem.js
``` js
import { store } from '../../../functions';

export default function ArticleItem({ tdata, stored }) {
  const navigation = useNavigation();
  const [booked, setBooked] = useState(stored);
  const BookmarkText = () => (
    <Text style={booked ? styles.bookmkTxtMarked : styles.bookmkTxtUnmark}>
      {booked ? t('Saved') : t('Save')}
    </Text>
  );
  ...
  
  const [dataStored, setDataStored] = useState(null);

  const articleSaved = async () => {
    console.log('booked: ', booked);
    let array = await store.get('articles'); // get data
    setDataStored(array); // null

    console.log('getStoreData: ', dataStored);

    if (!booked) {
      console.log(tdata.id, 'Not book');
      if (!array) {
        console.log('store is null');
        store.save('articles', [tdata.id]);
      }
      if (array) {
        let newarray = [...array, tdata.id];
        console.log('stored got value', newarray);
        store.save('articles', newarray);
      }
    }
    if (booked) {
      console.log(tdata.id, 'bookED');
      let newarray = array.filter((item) => item !== tdata.id);
      console.log('newarray ', newarray);
      store.save('articles', newarray);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ArticleDetailScreen', { item: tdata, stored: booked })}>
```
### Adding data to array
SavedArticlesScreen.js
``` js
const getArticlesList = async () => {
    const value = await store.get('articles');
    setArticlesList(value);

    let newArr = [];
    if (articlesList !== null) {
      articlesList.forEach((val) => {
        let [k] = articlesData.filter((itm) => itm.id === val);
        newArr = [...newArr, k];
      });
      setNewList(newArr);
    }
  };
```
