/**
 * Created by Ideofuzion on 8/4/2016.
 */
export class Serializable {
    fillFromJSON(json: string) {
        var jsonObj = JSON.parse(json).array.forEach(element => {
            console.log(element);
        });
        for (var propName in jsonObj) {
            this[propName] = jsonObj[propName]
        }
    }
}

export class QuestionModel extends Serializable {
    questionHeading: string;
    questionText:string;
    _id:string;
    constructor(QuestionHeading:string,Question:string,id:string)
    {
        super();
        this.questionHeading = QuestionHeading;
        this.questionText = Question;
        this._id = id;
    }
    GetQuestionHeading(): string { return this.questionHeading }
    GetQuestion():string{return this.questionText}
    GetId():string{return this._id}
}
