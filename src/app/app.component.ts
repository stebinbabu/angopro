import { Component, ViewChild,AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'angopro';
  message:string | undefined;
  ParentMessage:string='helo from parent';
  @ViewChild(PostComponent) childComp: any;
  
  constructor(){
console.log(this.childComp)
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngafterViewInit(){
    console.log(this.childComp)
    this.message=this.childComp.childmessage
  }
} 
