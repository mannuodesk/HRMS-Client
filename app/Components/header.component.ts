import {Component} from '@angular/core';
import {QuestionService} from './../Services/QuestionService';
import {Branches} from './../Models/Branches';

@Component({
    selector: 'adminheader',
    providers :[QuestionService],
    templateUrl: './../views/Header.html'
})
export class HeaderComponent { 
    public branches:Branches[];
    constructor(private _questionService : QuestionService) {
            this._questionService.getAllBranches()
            .subscribe(
                a=> {
                    this.branches = a;
                   console.log(this.branches);
                }
            );
        }
}