import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreService } from './core.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [CoreService],
})
export class CoreModule {
  constructor(coreService: CoreService) {
    console.log('Constructing the CoreModule');
      coreService.init();
  } 
}
