import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navabar.component';
import { PostComponent } from './post/post.component';
import { ListComponent } from './list/list.component';
import { AppendPipe } from './Pipes/append.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    ListComponent,
    AppendPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
