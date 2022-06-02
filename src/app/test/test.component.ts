import { Component, OnInit } from '@angular/core';
import{FormGroup ,FormControl ,FormBuilder ,Validators} from '@angular/forms'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  myForm:any= FormGroup
  constructor(private fb: FormBuilder) {
    let formControl = {
      firstname : new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ])
    }
    this.myForm = this.fb.group(formControl);
   }
   get firstname(){
    return this.myForm.get('firstname');
  }
  ngOnInit(): void {
    
  }


  saveUser(){
    console.log(this.myForm.value);
  }
}
