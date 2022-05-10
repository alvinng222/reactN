graphQl
---

### API Reference - Query / Subscription
https://hasura.io/docs/latest/graphql/core/api-reference/graphql-api/query.html

---
### GraphQL API Reference
https://hasura.io/docs/latest/graphql/core/api-reference/graphql-api/index.html#api-reference-graphql

Batching requests
```
query first {
  author(where: {id: {_eq: 1}}) {
    id
    name
  }
}

query second {
  author(where: {id: {_eq: 2}}) {
    id
    name
  }
}
# Keyboard shortcuts:
#
#  Prettify Query:  Shift-Ctrl-P (or press the prettify button above)
#
#     Merge Query:  Shift-Ctrl-M (or press the merge button above)
#
#       Run Query:  Ctrl-Enter (or press the play button above)
#
#   Auto Complete:  Ctrl-Space (or just start typing)
```

#### query / subscription syntax
    query|subscription [<op-name>] {
      object [([argument])]{
        object-fields
      }
    }

#### Example: Query
    query {
      author(where: {articles: {rating: {_gte: 4}}} order_by: {name: asc}) {
        id
        name
      }
    }
#### Example: Subscription
    subscription {
      author(where: {articles: rating: {_gte: 4}}} order_by: {name: asc}) {
        id
        name
      }
    }

### On armorasia
ref: https://hasura.io/docs/latest/graphql/core/api-reference/graphql-api/query.html

    query MyQuery {
      article_by_pk(id: 3) {
        id
        title
        enum_article_type {
          article_type
        }
        article_attachments {
          attachment_type
          enum_attachment_type {
            article_attachments {
              attachment_url
            }
          }
        }
        # comments
        article_category {
          nameChinese
        }
      }
    }

#### Aggregate object

    query MyQuery {
      article_category_aggregate {
        aggregate {
          count
          sum {
            id
          }
        }

        nodes {
          id
          nameChinese
        }
      }
    }

### Postgres: Filter query results / search queries
https://hasura.io/docs/latest/graphql/core/databases/postgres/queries/query-filters.html
* `where`
* Comparison
  * Equality operators (`_eq`, `_neq`) 
  * Greater than or less than operators (`_gt`, `_lt`, `_gte`, `_lte`)
  * List based search operators (`_in`, `_nin`)
  * Text search or pattern matching operators (`_like`, `_similar`, etc.)
  * Filter or check for null values (`_is_null`)
* Filter based on failure of some criteria (`_no`t)
* Using multiple filters in the same query (`_and`,` _or`)
``` console
    query MyQuery {
      article(where: {title: {_like: "%URAB%"}}) {
        id
        title
      }
    }
```

---
#### Returning data after the mutation
https://hasura.io/learn/graphql/react/intro-to-graphql/3-writing-data-mutations/

    mutation {
      insert_todos(objects: [{title: "new todo"}]) {
        returning {
          id
          title
          is_completed
          is_public
          created_at
        }
      }
    }
    
#### Parameterise what you insert

    # The parameterised GraphQL mutation
    mutation($todo: todos_insert_input!){
      insert_todos(objects: [$todo]) {
        returning {
          id
        }
      }
    }

---
## mutation

Be careful when do `mutation`, always need to put `where` condition,
eg: `where (id : { _eq: userID } )`

okie, can mutate the `is_active` column (soft delete) , normally we dun perform deletion on hasura (hard delete)

#### Locate user
Hasura > DATA > Data Manager > Public, User

or, API

    query MyQuery {
      user {
        is_active
        name
        id
      }
    }

``` yaml
{
  "data": {
    "user": [
      {
        "is_active": true,
        "name": "Cai Cai",
        "id": "fakeid1"
      },
      {
        "is_active": true,
        "name": "Cai Cai staff",
        "id": "5TtZv5stE6UABHfLDUHdK8xqTcm1"
      }
    ]
  }
}
```
query code from `MyReportScreen.js`

    query MyQuery {
      report(where: {user: {id: {_eq: "5TtZv5stE6UABHfLDUHdK8xqTcm1"}}}) {
        id
        admin_comment
        created_at
        description
        is_active
        report_by
      }
    }

``` yaml
{
  "data": {
    "report": [
      {
        "id": 32,
        "admin_comment": null,
        "created_at": "2021-09-29T02:24:02.260237+00:00",
        "description": "A quick brown fox jumps over the lazy dog.",
        "is_active": true,
        "report_by": "5TtZv5stE6UABHfLDUHdK8xqTcm1"
      },
      {
        "id": 33,
        "admin_comment": null,
        "created_at": "2021-09-29T02:30:18.43529+00:00",
        "description": "Test",
        "is_active": true,
        "report_by": "5TtZv5stE6UABHfLDUHdK8xqTcm1"
      },
```

AT Api
* type `mutation`
* select `update_report` > `id` > `_eq` > type `32`
* select `_set` > `is_active` > `false`
* select `returning` > `id` > `is_active`

      mutation {
        update_report(where: {id: {_eq: 32}}, _set: {is_active: false}) {
          returning {
            id
            is_active
          }
        }
      }

---
### query using variables from FindJobs > SplashScreen
#### using wildcard **%** for the variable
``` yaml
query MyQuery($dates: timestamptz, $lang: String) {
      Advertisements(
        where: {
          _and: {
            language: { _ilike: $lang }
            branch_id: { _eq: 8888 }
            isActive: { _eq: true }
            adsType: { _eq: SPLASHSCREEN }
            startAt: { _lte: $dates }
            _or: [{ endAt: { _gte: $dates } }, { endAt: { _is_null: true } }]
          }
        }
        order_by: { id: desc }
      ) {
        id
        imageUrl
        actionType
        param
        reminderText
        website
        onlySGPR
        uiColor
        requireFullProfile
        adsType
      }
    }    
```
``` yaml
{
  "dates": "2021-10-11T08:19:05.829Z",
  "lang": "%EN%"
}
```
