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

export class Customer extends Serializable {
      _id: string;
        email: string;
        contactNumber: string;
        name: string;
        __v: number;
}
