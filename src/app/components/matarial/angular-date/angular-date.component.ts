import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-date',
  templateUrl: './angular-date.component.html',
  styleUrls: ['./angular-date.component.scss']
})
export class AngularDateComponent implements OnInit {

  @Input() label: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
