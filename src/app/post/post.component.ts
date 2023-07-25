import { Component,OnInit,Input,ViewChild} from '@angular/core';
import { ListComponent } from '../list/list.component';
import { PostService } from '../Services/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostService]
})

export class PostComponent {
  posts!: Array<any>;
  constructor(private postservice:PostService){
  //   let postservice = new PostService()
   this.posts= postservice.postlist;
  }

}
