import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peoplelist:any = []

  constructor(private userService:UserService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      result=>{
        this.peoplelist = result
      },
      error=>{
        console.log(error);
      }
    )
  }

  delete(person:any) {
    let index = this.peoplelist.indexOf(person);
    this.peoplelist.splice(index, 1);

    this.userService.deleteUser(person._id).subscribe(
      res=>{
        this.toastr.error(res.message);
      },
      err =>{
        console.log(err);
      }
    )
  }

}
