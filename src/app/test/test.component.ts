import { Component, OnInit } from '@angular/core';
import{FormGroup ,FormControl ,FormBuilder ,Validators} from '@angular/forms'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  myForm: FormGroup
  constructor(private fb: FormBuilder) {
    let formControl = {
      firstname : new FormControl
    }
    this.myForm = this.fb.group(formControl);
   }

  ngOnInit(): void {
    
  }

  saveUser(){
    console.log(this.myForm.value);
  }
}
