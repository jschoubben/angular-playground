import { Injectable, Inject, InjectionToken } from '@angular/core';

export interface CoreConfig {
  mySetting: string;
}

export const CORE_CONFIG = new InjectionToken<CoreConfig>('core-config');

@Injectable()
export class CoreService {
  private _config: CoreConfig;

  constructor(@Inject(CORE_CONFIG) config: CoreConfig){
    console.log('Constructing the core serivce with config: ' + JSON.stringify(config) + ' <----- This should be valid config');
    this._config = config;
  }

  init() {
    console.log('Initializing core service with config: ' + JSON.stringify(this._config) + ' <----- This should be valid config');
  }
}