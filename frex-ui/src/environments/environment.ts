// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  userProfileUrl: 'http://13.234.200.23:8093/api/v1/',
  donationServiceURL: 'http://13.234.200.23:8090',
  environmentServiceURL: 'http://13.234.200.23:8091',
  partnersServiceUrl: 'http://13.234.200.23:8092',
  authServiceURL: 'http://13.234.200.23:8094',
  fitnessServiceURL: 'http://13.234.200.23:8089/api/v1/',
  rewardServiceURL: 'http://13.234.200.23:8095',
  couponsurl: 'http://13.234.200.23:8095',
  beforeImage : 'https://firebasestorage.googleapis.com/v0/b/volunteer-44353.appspot.com/o/images%2F',
  afterImage : '?alt=media&token=d7870b45-0b10-4878-b54f-4b78e20b42f0',
  firebase: {
    apiKey: 'AIzaSyCt5WqpAvJx17qWC6o9tFQXtFMrgXfquqs',
    authDomain: 'volunteer-44353.firebaseapp.com',
    databaseURL: 'https://volunteer-44353.firebaseio.com',
    //  databaseURL: 'https://volunteer-44353/database/firestore/data.firebaseio.com',
    projectId: 'volunteer-44353',
    storageBucket: 'volunteer-44353.appspot.com',
    messagingSenderId: '220361474346',
    appId: '1:220361474346:web:a20efa3db54e19440f9e53',
    measurementId: 'G-6H10S8H5K0'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
