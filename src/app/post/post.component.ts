import { Component,OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit{
 title:string="list of post";
 @Input()
  fromParent!: string;
PostMessage:string='post string message'
 constructor(){  }
 ngOnInit(): void {
   
 }
}
