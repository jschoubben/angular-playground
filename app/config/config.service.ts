import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoreConfig } from '../core/core.service';

export interface AppConfig {
  coreConfig: CoreConfig;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app-config');

@Injectable()
export class ConfigService {
  appConfig: AppConfig;

  loadConfig(){
    console.log('Loading configuration');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Configuration loaded');
        this.appConfig = {
          coreConfig: {
            mySetting: 'my value'
          }
        };
        resolve(true);
      }, 5000);
    });
  }
}