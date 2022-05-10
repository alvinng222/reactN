
## To work in development mode

### src/constants/Config.js
``` js
export default {
  /*** backdoor for appstore and andriod , expire on Nov 2021 */

  APP_KEY: appConfig.api.APP_KEY,
  base_url: appConfig.api.BASE_URL,
  // WSGgraphQL: 'https://wsg.findjobs.com.sg/v1/graphql',
  graphQLHeader: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Hasura-Admin-Secret': appConfig.api.SECRET_KEY,
  },

  // JWT: PROD_JWT,
  // graphQL: appConfig.api.GRAPHQL_URL,
  // healthz: appConfig.api.HEALTHZ_URL,
  // api: {
  //   sendEmail: appConfig.api.API_EMAIL_URL,
  //   uploadAvatar: appConfig.api.API_UPLOAD_URL,
  //   requestOTP: appConfig.api.API_REQEUST_OTP_URL,
  //   verifyOTP: appConfig.api.API_REQEUST_VERIFY_URL,
  // },

  // JWT: EXP_JWT,

  JWT: DEV_JWT,
  graphQL: appConfig.api.GRAPHQL_URL_DEV,
  healthz: appConfig.api.HEALTHZ_URL_DEV,
  api: {
    sendEmail: appConfig.api.API_EMAIL_URL_DEV,
    uploadAvatar: appConfig.api.API_UPLOAD_URL_DEV,
    requestOTP: appConfig.api.API_REQEUST_OTP_URL_DEV,
    verifyOTP: appConfig.api.API_REQEUST_VERIFY_URL_DEV,
  },
```

## Assessing Hasura
### src/appConfig/commons/api.js

development
* GRAPHQL_URL_DEV: 'https://dev-hasura.findjobs.com.sg/

---
