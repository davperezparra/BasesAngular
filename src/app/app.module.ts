import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { CounterModule } from './counter/Counter.module';
import { DbzModule } from './dbz/dbz.module';
import { ListComponent } from './dbz/components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    HeroesModule,
    CounterModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
