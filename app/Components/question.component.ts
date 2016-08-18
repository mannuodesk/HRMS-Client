import {Component,trigger,state,style,transition,animate} from '@angular/core';
import {Input} from '@angular/core';
import {QuestionModel} from './../Models/QuestionModel';
import {QuestionService} from './../Services/QuestionService';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'question',
    templateUrl: './../views/Question.html',
    providers :[QuestionService],
    directives:[ROUTER_DIRECTIVES]

})
export class QuestionComponent { 
    @Input() Question:string = "";
    @Input() QuestionHeading:string;
    private questions: QuestionModel[] = [];
    public QuestionMod : QuestionModel;
    public questionService : QuestionService;
        constructor(private _questionService : QuestionService) {
            this._questionService.getQuestions()
            .subscribe(
                a=> {
                    this.questions = a;
                    console.log(a);
                }
            );
        }
        onSubmit(){
        var count = 0;
        if(this.Question == undefined || this.Question == "")
        {
            count = count + 1;
            var div = document.getElementById("questiondiv");
            div.className += " has-error";
        }
        if(this.QuestionHeading == undefined || this.QuestionHeading == "")
        {
            count = count + 1;
            var div = document.getElementById("questiontypediv");
            div.className += " has-error";
        }
        /*if(this.QuestionHeading != undefined && this.QuestionHeading != "")
        {
            var div2 = document.getElementById("questiontypediv");
            div2.className += "form-group";
        }
        if(this.Question != undefined && this.Question != "" )
        {
            var div = document.getElementById("questiondiv");
            div.className += "form-group";
        }*/
        if(count == 0)
        {
            this._questionService.addQuestion(this.QuestionHeading, this.Question).subscribe(
                a=> {
                    
                }
            );
            window.location.reload();
        }
    }
}