# hasura
* see below [Sample from armorasia](#sample-from-armorasia)

---
## Initial
``` console
[10:01 am, 18/08/2021] Jing Wei Findjobs: morning, i marge ur branch already
[10:02 am, 18/08/2021] Jing Wei Findjobs: https://api-armorasia.findjobs.com.sg/
a????????f???????S?????1??!
[10:02 am, 18/08/2021] Jing Wei Findjobs: the backend Hasura has done setup , this part a bit tricky and require some learning
[10:03 am, 18/08/2021] Jing Wei Findjobs: Have time, u can take a look on this docs, we using this:
https://hasura.io/docs/latest/graphql/core/index.html
[10:03 am, 18/08/2021] Jing Wei Findjobs: just take a look , when u are back we can integrate with backend already
```



- **Haskell** is a general-purpose, statically typed, purely functional programming language with type inference and lazy evaluation. (Soruce wikipedia)

- **GraphQL** is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. (Source wikipedia)

- **PostgreSQL** also known as Postgres, is a free and open-source relational database management system (RDBMS) emphasizing extensibility and SQL compliance. (Source wikipedia)

The Hasura GraphQL engine makes your data instantly accessible over a real-time GraphQL API, so you can build and ship modern apps and APIs faster. Hasura connects to your databases, REST servers, GraphQL servers, and third party APIs to provide a unified realtime GraphQL API across all your data sources.
https://hasura.io/docs/latest/graphql/core/index.html (JingWei)

-- **Heroku** is a cloud platform as a service (PaaS) supporting several programming languages. One of the first cloud platforms, Heroku has been in development since June 2007, when it supported only the Ruby programming language, but now supports Java, Node.js, Scala, Clojure, Python, PHP, and Go.
https://en.wikipedia.org/wiki/Heroku

---
### https://cloud.hasura.io/projects
* signin to Hasura Cloud
* after create Heroku free database from this Hasura Cloud, lead me to public
* create new table. and Insert rows ...
* Try out a query

sample query
``` console
query MyQuery {
  posts {
    id
    title
  }
}
```

* Check out monitoring - tab `Monitoring`

check out [graphQL.md](/graphQL.md)

---
## Config the Hasura to project armorasia

#### src/constants/Config.js
``` js
export default {
  graphQLHeader: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Hasura-Admin-Secret': 'a????????f???????S????1??!',
  },
  graphQL: 'https://api-armorasia.findjobs.com.sg/v1/graphql',
};
```
src/constants/index.js
``` js
import Color from './Color';
import Config from './Config';

export { Color, Config };
```

---
## 30-Minute Hasura Basics Course
https://hasura.io/learn/graphql/hasura/introduction/

after created database

## Data Modelling
### Create users table
 create tables using the console or directly on postgres, Hasura GraphQL engine automatically creates GraphQL schema object types and corresponding query/mutation fields with resolvers.
 
Let's get started by creating the users table.

The users table will have the following columns:

-    `id` (type Text),
-    `name` (type Text),
-    `created_at` (type Timestamp and default now())
-    `last_seen` (type Timestamp and nullable)

Once you are done, click on Add Table button to create the table.

### Explore users on GraphQL API
access GraphiQL by heading over to Console -> API -> GraphiQL tab.

#### **Mutation**
Let's add a user using a GraphQL Mutation. Copy the following code into the GraphiQL interface.
``` js
mutation {
  insert_users(objects:[{id: "1", name:"Praveen"}]) {
    affected_rows
  }
}
```
Tip: You can use the Explorer on the GraphiQL interface to generate the mutation in a few clicks.

#### Query
Now let's go ahead and query the data that we just inserted.
``` console
query {
  users {
    id
    name
    created_at
  }
}
```

#### Subscription
Let's run a subscription query over users table to watch for changes to the table.
``` console
subscription {
  users {
    id
    name
    created_at
  }
}
```
Initially, the subscription query will return the existing results in the response.

insert new data into the users table and see the changes appearing in the response. In a new browser tab, Head over to Console -> DATA tab -> default -> public -> users -> Insert Row and insert another row.

An active subscription query will keep returning the latest set of results depending on the query.

### Create todos table
The todos table will have the following columns:

- `id` (type Integer (auto-increment)),
- `title` (type Text),
- `is_completed` (type Boolean and default false)
- `is_public` (type Boolean and default false)
- `created_at` (type Timestamp and default now())
- `user_id` (type Text)

### Explore todos on GraphQL API
#### Mutation
Head over to Console -> API -> GraphiQL tab and insert a todo using GraphQL Mutations.
``` js
mutation {
  insert_todos(objects:[{title: "My First Todo", user_id: "1"}]) {
    affected_rows
  }
}
```
#### Query
``` console
query {
  todos {
    id
    title
    is_public
    is_completed
    user_id
  }
}
```
####  Subscription
Let's run a subscription query over todos table to watch for changes to the table. In the above GraphQL query, replace query with subscription
``` console
subscription {
  todos {
    id
    title
    is_public
    is_completed
    user_id
  }
}
```

In a new tab, Head over to Console -> DATA tab -> todos -> Insert Row and insert another row.

## Relationships
GraphQL schema relationships can be either of
* object relationships (one-to-one)
* array relationships (one-to-many)

#### Object Relationships
``` console
    query {
        todos {
            id
            title
            user {
                  id
                  name
            }
        }
    }
```
In a single query, you are able to fetch todos and its related user information.
#### Array Relationships
``` console
    query {
        users {
            id
            name
            todos {
                  id
                  title
            }
        }
    }
```
In this query, you are able to fetch users and for each user, you are fetching the todos (multiple) written by that user. 

Relationships can be captured by foreign key constraints. Foreign key constraints ensure that there are no dangling data. Hasura Console automatically suggests relationships based on these constraints.

Though the constraints are optional, it is recommended to enforce these constraints for data consistency.

### Create Foreign Key
In the todos table, the value of user_id column must be ideally present in the id column of users table. 

Console -> DATA -> todos -> Modify page.

Scroll down to Foreign Keys section at the bottom and click on Add.
- Select the Reference table as `users`
- Choose the From column as `user_id` and To column as `id`

enforcing that the user_id column of todos table must be one of the values of id in users table.

:crying_cat_face: missed out the user_id for 2nd data of todos, costed my troubleshoot hour!

### Create Relationship
 the foreign key constraint is created, Hasura Console automatically suggests relationships based on that.

console on Data > todos > Relationships > Object Relationships show:
* todos.user_id -> users.id

 
### Try out Relationship Queries
``` console
        query {
          todos {
            id
            title
            user {
              id
              name
            }
          }
        }
```

## Data Transformations
Postgres allows you to perform data transformations using:
- Views
- SQL Functions

#### Create View
make use of `Views`. This view is required by the app to find the users who have logged in and are online in the last 30 seconds.

Head to Console -> DATA -> SQL page.
``` sql
CREATE OR REPLACE VIEW "public"."online_users" AS 
 SELECT users.id,
    users.last_seen
   FROM users
  WHERE (users.last_seen >= (now() - '00:00:30'::interval));
```

#### Subscription to Online Users
Now let's test by making a subscription query to the online_users view.
``` console
subscription {
  online_users {
    id
    last_seen
  }
}
```
**`now()`**  :smile: :star: :+1:
In another tab, update an existing user's last_seen value to see the subscription response getting updated.
Enter the value as `now()` for the last_seen column and click on `Save`. .. subscription query on the other tab is running to see the updated response.

### Create relationship to user
A way to fetch user information based on the `id` column of the view
 
create a manual relationship from the view `online_users` to the table `users` using the `id column` of the view. 
* Head to Console -> Data -> online_users -> Relationships page.
* Add a new relationship manually by choosing the relationship type to be `Object Relationship`. 
* Enter the relationship name as `user`. 
* Select the configuration for the current column (From) as `id` and 
* the remote(Reference Table) table would be `users` and 
* the remote column(To) would be `id` again.

Let's explore the GraphQL APIs for the relationship created.
``` console
query {
  online_users {
    id
    last_seen
    user {
      id
      name
    }
  }
}
```
## Authorization
### Setup todos table permissions
Head over to the Permissions tab under todos table to add relevant permissions.
#### Insert permission
ref: https://hasura.io/learn/graphql/hasura/authorization/1-todos-table-permissions/
### Setup users table permissions
ref: https://hasura.io/learn/graphql/hasura/authorization/2-users-table-permissions/
### Test out permissions
#### Query
Now let's go ahead and query the data by adding two request headers:

    x-hasura-role: user
    x-hasura-user-id: 1

## Authentication
## Creating Actions

---
## Sample from armorasia
#### [NewsDetailScreen.js](https://gitlab.com/findjobssg/armorasia/-/blob/main/src/screens/NewsDetailScreen/NewsDetailScreen.js)
from the tab `News`
``` js
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { Color, Config } from '@constants';
import { Text, Header } from '@components';
import { useTranslation } from 'react-i18next';

export default function NewsDetailScreen({ navigation, route }) {
  const [news, setNews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  const newsID = route.params?.newsID;

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    console.log('newsID: ', newsID);
    if (!newsID) {
      throw new Error('news id cannot be null');
    }
    setIsLoading(true);
    const query = `
        query getNews ($newsID: Int!) {
            news_by_pk(id: $newsID) {
            id
            title
            description
            updated_at
            }
        }
      `;
    const response = await fetch(Config.graphQL, {
      method: 'POST',
      headers: Config.graphQLHeader,
      body: JSON.stringify({
        variables: {
          newsID,
        },
        query,
      }),
    });
    const data = await response.json();
    console.log('data: ', data);
    setNews(data.data.news_by_pk);
    setIsLoading(false);
  };

  return (
  ... 
```
#### [HomeScreen.js](https://gitlab.com/findjobssg/armorasia/-/blob/main/src/screens/HomeScreen/HomeScreen.js)
``` js
import React, { useEffect, useState } from 'react';
import { Color, Config } from '@constants';
...
import TabBar from './components/TabBar';
import NewsList from './NewsList/NewsList';
import EventList from './EventList/EventList';

...

  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [event, setEvent] = useState([]);
  const [route, setRoute] = useState('Event');

  useEffect(() => {
    setIsLoading(true);
    getEvent();
    getNews();
    setIsLoading(false);
  }, []);

  const getEvent = async () => {
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
    const response = await fetch(Config.graphQL, {
      method: 'POST',
      headers: Config.graphQLHeader,
      body: JSON.stringify({
        query,
      }),
    });
    console.log('response : ', response);
    const data = await response.json();
    console.log('data: ', data);
    setEvent(data.data.event);
  };

  const getNews = async () => {
    const query = `
        query getNews {
            news(order_by: {updated_at: desc}) {
           id
            title
            description
            updated_at
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
    const data = await response.json();
    setNews(data.data.news);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title={t("What's New")} />
      {isLoading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator animating={true} color={Color.primary} />
        </View>
      ) : (
        <>
          <TabBar tabs={TAB} route={route} />
          {route === 'Event' && <EventList event={event} />}
          {route === 'News' && <NewsList news={news} />}
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
```

working on it
``` js
import React, { useEffect, useState } from 'react';
import { Color, Config } from '@constants';
...

export default function ArticlesScreen() {
  const { t } = useTranslation();

  ////// Hasura query this to +43rd lines   //////
  const [isLoading, setIsLoading] = useState(false);
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticles();
    setIsLoading(false);
  }, []);

  const getArticles = async () => {
    const query = `
          query getArticles {
            article {
              id
              category
              article_type
              title
              description
              feature_image
              article_category {
                name
              }
              updated_at
              article_attachments {
                attachment_name
              }
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
    setArticlesData(data.data.article);
  };
```
