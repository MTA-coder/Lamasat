import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-input',
  templateUrl: './angular-input.component.html',
  styleUrls: ['./angular-input.component.scss']
})
export class AngularInputComponent implements OnInit {

  @Input() label: string = "";
  @Input() type: string = "text";

  constructor() { }

  ngOnInit(): void {
  }

}
