import { Component } from '@angular/core';
import {HeaderComponent} from './Components/header.component';
import {SidebarComponent} from './Components/sidebar.component';
import {FooterComponent} from './Components/footer.component';
import {QuestionComponent} from './Components/question.component';
import {UsersComponent} from './Components/users.component';
import {DashboardComponent} from './Components/dashboard.component';
import { RouterLink } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    directives: [HeaderComponent, SidebarComponent, FooterComponent,QuestionComponent,RouterLink,ROUTER_DIRECTIVES,UsersComponent, DashboardComponent],
    templateUrl: './../views/MainContainer.html'
})
export class AppComponent { }


