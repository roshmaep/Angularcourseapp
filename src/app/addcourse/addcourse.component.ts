import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {

  courseTitle=""
  courseDescription=""
  courseDuration=""
  distributor=""
  courseDate=""
  courseVenue=""

  readValues=()=>
  {
  let data:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"distributor":this.distributor,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
  console.log(data)
  }

}
