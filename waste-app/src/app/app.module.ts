import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PredictService } from 'src/services/predict.service';
import { SafePipe } from 'src/pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    PredictService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
