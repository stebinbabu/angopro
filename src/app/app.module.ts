import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navabar.component';
import { PostComponent } from './post/post.component';
import { ListComponent } from './list/list.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
