import {Component} from '@angular/core';
import {UsersRoot} from './../Models/UsersRoot';
import {QuestionService} from './../Services/QuestionService';
import {CustomerRating} from './../Models/CustomerRating';

@Component({
    selector: 'users',
    providers :[QuestionService],
    templateUrl: './../views/Users.html'
})
export class UsersComponent { 
    public usersroot:UsersRoot;
    public uniqueUserCount:number;
    public totalReviews:number;
    public returnRate:number;
    public customerVisitsToBranches:CustomerRating[];
    public dateTime:Date;
    constructor(private _questionService : QuestionService) {
            this._questionService.getUsersPageData()
            .subscribe(
                a=> {
                    this.usersroot = a;
                    this.uniqueUserCount = this.usersroot.uniqueUserTotal;
                    this.totalReviews = this.usersroot.reviewsTotal;
                    this.returnRate = this.usersroot.returnRate;
                    this.customerVisitsToBranches = this.usersroot.customerRatings;
                    for(var i = 0;i < this.customerVisitsToBranches.length; i++)
                    {
                        this.dateTime = new Date(this.customerVisitsToBranches[i].date);
                        this.customerVisitsToBranches[i].rating = Math.round(this.customerVisitsToBranches[i].rating);
                        var tempDate = this.dateTime.getDate().toString() +"-"+ this.dateTime.getMonth().toString() +"-"+ this.dateTime.getFullYear().toString();
                        var time = this.dateTime.getHours().toString() +":"+ this.dateTime.getMinutes().toString();
                        this.customerVisitsToBranches[i].vistedDateString = tempDate;
                        this.customerVisitsToBranches[i].vistedTimeString = time;
                        console.log(this.dateTime);
                    }
                    console.log(this.customerVisitsToBranches);
                }
            );
        }
}