/**
 * Created by Ideofuzion on 8/4/2016.
 */
import {CustomerRating} from './CustomerRating';
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

export class UsersRoot extends Serializable {
    returnRate: number;
    reviewsTotal: number;
    uniqueUserTotal: number;
    _id: string;
    customerRatings: CustomerRating[];
}
