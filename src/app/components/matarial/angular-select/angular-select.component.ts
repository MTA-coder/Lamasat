import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-select',
  templateUrl: './angular-select.component.html',
  styleUrls: ['./angular-select.component.scss']
})
export class AngularSelectComponent implements OnInit {

  @Input() label: string = "";
  @Input() items: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
