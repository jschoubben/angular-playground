import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { HelloFrameworkModule } from './hello-framework';
import { ConfigService, AppConfig, APP_CONFIG } from './config/config.service';
import { CoreService, CORE_CONFIG } from './core/core.service';
;

function configurationServiceInitializerFactory(configurationService: ConfigService): Function {
  console.log('returning configurationService initializer factory    <----- I expect this function to run before everything else');
  return () => configurationService.loadConfig();
}

function appConfigInitializerFactory(configurationService: ConfigService): Function {
  console.log('returning app config initializer factory   <----- I expect this function to run when the configuration service factory has loaded the configuration (resolved the promise)');
  return () => configurationService.appConfig;
}

function coreConfigInitializerFactory(appConfig: AppConfig): Function {
  console.log('returning core config initializer factory<----- I expect this function to run when the  appConfig is loaded');
  return () => appConfig.coreConfig;
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    CoreModule,
    HelloFrameworkModule,
  ],
  providers: [
    ConfigService,
    { 
      provide: APP_INITIALIZER, 
      useFactory: configurationServiceInitializerFactory, 
      deps: [ConfigService], 
      multi: true 
    },
    { 
      provide: APP_CONFIG, 
      useFactory: appConfigInitializerFactory, 
      deps: [ConfigService], 
    },
    { 
      provide: CORE_CONFIG, 
      useFactory: coreConfigInitializerFactory, 
      deps: [APP_CONFIG], 
    }
  ]
})
export class AppModule {}
