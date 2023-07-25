import { Component ,Input} from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[PostService]
})
export class ListComponent {
 posts:Array<any>
constructor( private postservice:PostService){
  this.posts=postservice.postlist;
}


}
