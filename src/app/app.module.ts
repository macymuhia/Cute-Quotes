import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteDeleteComponent } from './quote-delete/quote-delete.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { MostlikesDirective } from './mostlikes.directive';
import { DateAgoPipe } from './date-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    QuoteDeleteComponent,
    StrikethroughDirective,
    MostlikesDirective,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
