import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  open: boolean = false;

  arralylist = [
    {
      icon: "assets/sidebar/Home.svg",
      title: "Home"
    }, {
      icon: "assets/sidebar/Emp.svg",
      title: "Employees",
      href: "employee/all"
    },
    {
      icon: "assets/sidebar/Daily task.svg",
      title: "Tasks"
    },
    {
      icon: "assets/sidebar/customer.svg",
      title: "Customers",
      href: "customer/all"
    },
    {
      icon: "assets/sidebar/Dep.svg",
      title: "Department",
      href: "department/all"
    },
    {
      icon: "assets/sidebar/Category.svg",
      title: "Categories",
      href: "category/all"
    },
    {
      icon: "assets/sidebar/Branch.svg",
      title: "Branch",
      href: "branches/all"
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

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  routerTo(href: string) {
    this._router.navigate([href]);
  }

}
