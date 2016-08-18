import { provideRouter, RouterConfig }  from '@angular/router';
import { QuestionComponent } from './Components/question.component';
import { UsersComponent } from './Components/users.component';
import { DashboardComponent } from './Components/dashboard.component';
const routes: RouterConfig = [
  {
    path: 'questions',
    component: QuestionComponent
  },
  {
    path: '',
    component: DashboardComponent
  }
  ,
  {
    path: 'users',
    component: UsersComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
