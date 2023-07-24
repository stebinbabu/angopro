import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  postDetails: string = ''; // Default value
  postName: string = ''; // Default value
  imageurl: string = ''; // Default value
  linkurl: string = ''; // De
  Check!: boolean;
postArray: Array<string> =["post1","psoet2","post3","paoos4","post5"];
objArray :Array<object> =[
  { id :1, postname:"as" },
  { id :2, postname:"as" },
  { id :3, postname:"as" },
  { id :4, postname:"as" }
]
// constructor(){
//   for(let i=0; i < this.postArray.length;i++ )
//   {
//     console.log(this.postArray[i]);
//   }
// }
}
