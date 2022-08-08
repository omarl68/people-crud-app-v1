import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  @Input() i!: number
  @Input() firstname!: string
  @Input() lastname!: string
  @Input() phone!: string
  constructor() { }

  ngOnInit(): void {
  }
  

}
