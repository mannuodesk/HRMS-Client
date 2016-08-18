import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'sidebar',
    directives: [ROUTER_DIRECTIVES],
    template: `<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
      </div>
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li id="1" [routerLink]="['']" class="active" (click)="onpress(1)"><a ><span>Dashboard</span></a></li>
        <li id="2" [routerLink]="['/users']" class="" (click)="onpress(2)"><a ><span>Users</span></a></li>
        <li id="3" [routerLink]="['/questions']" class="" (click)="onpress(3)"><a ><span>Questions</span></a></li>
        <li><a ><span>Account</span></a></li>
        <li><a ><span>Payment</span></a></li>
        <li><a ><span>Logout</span></a></li>
        
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
  `
})
export class SidebarComponent {
    onpress(number)
    {
        var element = document.getElementById(number);
        var div = document.getElementsByClassName("active");
        div[0].className = "";
        element.className = "active";
    }
 }