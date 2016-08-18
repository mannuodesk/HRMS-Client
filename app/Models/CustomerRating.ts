/**
 * Created by Ideofuzion on 8/4/2016.
 */
import {Customer} from './Customer';
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

export class CustomerRating  extends Serializable {
        vistedTimeString: string;
        vistedDateString: string;
       _id: string;
        visitId: string;
        rating: number;
        date: string;
        __v: number;
        _customer: Customer[];
}
