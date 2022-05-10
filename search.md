search

ref: https://hasura.io/docs/latest/graphql/core/api-reference/graphql-api/query.html#text-operators

GraphQL
``` graphql
query MyQuery {
  article(where: 
    {   _or: 
        [
          { title: 
            {_ilike: "%National%"}
          }, 
          { description: 
            {_ilike: "%National%"}
          }
        ]
    }
  ) {
    id
    title
  }
}
```
JSON
``` json
{
  "data": {
    "article": [
      {
        "id": 1,
        "title": "200 000 DURABLE LABELS PRINTED EVERY DAY"
      },
      {
        "id": 2,
        "title": "APX FH+ FOR INDUSTRIAL PASTRY-MAKING IN ITALY"
      }
    ]
  }
}
```
---
looking into this?

Full Text Search with Hasura GraphQL API and Postgres

ref: https://hasura.io/blog/full-text-search-with-hasura-graphql-api-postgres/

---
