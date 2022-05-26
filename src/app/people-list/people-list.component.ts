import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peoplelist =[
    {
      id:1,
      name:"omar",
      username:"labidli",
      phone:"00 216 56 449 741"
    },
    {
      id:2,
      name:"rania",
      username:"ferjani",
      phone:"00 216 20 450 299"
    },
    {
      id:3,
      name:"mohssen",
      username:"jabri",
      phone:"00 216 25 473 741"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
delete(person:any){
  let index = this.peoplelist.indexOf(person)
  this.peoplelist.splice(index,1);
}
}
