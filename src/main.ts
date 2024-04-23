import { bootstrapApplication } from '@angular/platform-browser';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

Amplify.configure(amplifyconfig);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
