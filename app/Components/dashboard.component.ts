import {Component} from '@angular/core';
import {UsersRoot} from './../Models/UsersRoot';
import {QuestionService} from './../Services/QuestionService';

@Component({
    selector: 'users',
    providers :[QuestionService],
    templateUrl: './../views/Dashboard.html'
})
export class DashboardComponent { 
    public usersroot:UsersRoot;
    constructor(private _questionService : QuestionService) {
            this._questionService.getUsersPageData()
            .subscribe(
                a=> {
                    this.usersroot = a;
                    console.log(a);
                }
            );
        }
}