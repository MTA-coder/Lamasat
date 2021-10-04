import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  arralylist = [
    {
      icon: "assets/sidebar/Home.svg",
      title: "Home"
    }, {
      icon: "assets/sidebar/Emp.svg",
      title: "Employees"
    },
    {
      icon: "assets/sidebar/Daily task.svg",
      title: "Tasks"
    },
    {
      icon: "assets/sidebar/customer.svg",
      title: "Customers"
    },
    {
      icon: "assets/sidebar/Dep.svg",
      title: "Department"
    },
    {
      icon: "assets/sidebar/Branch.svg",
      title: "Branch"
    },
    {
      icon: "assets/sidebar/Orders.svg",
      title: "Orders"
    },
    {
      icon: "assets/sidebar/Management.svg",
      title: "Management"
    },
    {
      icon: "assets/sidebar/Archive.svg",
      title: "Archive"
    },
    {
      icon: "assets/sidebar/Attendece.svg",
      title: "Log"
    },
    {
      icon: "assets/sidebar/settings.svg",
      title: "Settings"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
