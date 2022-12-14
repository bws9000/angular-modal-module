import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { TestAComponent } from './test-a/test-a.component';
import { PopupComponent } from './popups/popup.component';
import { ModalModule } from './shared/modules/modal/modal.module';
@NgModule({
  declarations: [
    AppComponent,
    TestAComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
