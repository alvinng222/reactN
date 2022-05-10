# date

``` js
    const thisDate = new Date('2021-08-31T07:26:57.609782+00:00');

    const chgDate = (d) => {
      var newD = new Date(d);
      return this.Intl.DateTimeFormat('en-US').format(newD);
    };
    console.log(chgDate(thisDate));   // 8/31/2021
    console.log(chgDate('2021-08-31T07:26:57.609782+00:00')); // 8/31/2021
```

old ArrticleItem.js
``` js

  const chgDate = (longdate) => {
    var newD = new Date(longdate);
    return this.Intl.DateTimeFormat('en-US').format(newD);
  };

  return (
  ...
         <View>
            <Text type="label" style={{ fontSize: 11 }}>
              {chgDate('2021-08-31T07:26:57.609782+00:00')}
            </Text>
          </View>
```
### momentjs.com
https://momentjs.com/

``` console
twng@Ts-MacBook-Pro armorasia % npm install moment --save
twng@Ts-MacBook-Pro armorasia % cd ios
twng@Ts-MacBook-Pro ios % pod install
```

``` js
import moment from 'moment';

export default function ArticlesList({ category }) {

    const thisDate = new Date('2021-08-31T07:26:57.609782+00:00');

    console.log(moment(thisDate).format('DD/MM/YYYY')); // 31/08/2021
    
    console.log(moment(thisDate).format('D MMM YYYY')); // 31 Aug 2021
```

ArticleItem.js
``` js
import moment from 'moment';

export default function ArticleItem({ tdata }) {
...
          <View>
            <Text type="label" style={{ fontSize: 11 }}>
              {moment(tdata.updated_at).format('D MMM YYYY')};
              {/* {moment('2021-08-31T07:26:57.609782+00:00').format('D MMM YYYY')}; */}
            </Text>
          </View>
```
