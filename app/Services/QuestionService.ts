/**
 * Created by Ideofuzion on 8/4/2016.
 */
import {Injectable,Inject} from '@angular/core';
import {Http,Headers, RequestOptions} from '@angular/http';
import {QuestionModel} from './../Models/QuestionModel';
import 'rxjs/add/operator/map';
//import {ProductModel} from './ProductModel';
@Injectable()
export class QuestionService{
    baseUrl:string = "https://hrms-ideofuzion.herokuapp.com";
    constructor(private http:Http)
    {

    }
    getQuestions()
    {
        return this.http.get(this.baseUrl + '/questions/getAllQuestions')
            .map(res=>res.json());
    }
    addQuestion (questionHeading: string, questionText:string) {
        let body = JSON.stringify({ "questionHeading":questionHeading,"questionText":questionText });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ method:'post', headers: headers });

        return this.http.post(this.baseUrl + "/questions/ques", body, options)
            .map(res=>res.json());
    }

    getUsersPageData()
    {
        return this.http.get(this.baseUrl + '/customerVisitToBranches/getBranchReviewsandUsersCountByBranchId/57b1b91a687bfa1100446215')
            .map(res=>res.json());
    }
    getAllBranches()
    {
        return this.http.get(this.baseUrl + '/branches/getAllBranches')
            .map(res=>res.json());
    }
}