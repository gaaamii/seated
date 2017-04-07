import { secrets } from '../../secrets';
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production:           false,
  FIREBASE_API_KEY:              secrets.API_KEY,
  FIREBASE_AUTH_DOMAIN: 'seated-b3750.firebaseapp.com',
  FIREBASE_DATABASE_URL:         'https://seated-b3750.firebaseio.com',
  FIREBASE_PROJECT_ID:           'seated-b3750',
  FIREBASE_STORAGE_BUCKET:       'seated-b3750.appspot.com',
  FIREBASE_MESSAGING_SENDERID:   '163897111830'
};
