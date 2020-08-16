var a = 0;

let num : void =undefined
class Animal {
    name;
    public constructor(name) {
        this.name = name;
    }
}
interface Person {
    readonly name: string;
    age?: number;
    [propName: string]: string|number;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
let amy: Person = {
    name: 'amy'
};

interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];

//argument处理

function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
function buildName(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let cat = buildName(null, 'Cat');

enum Days {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"1"};


export {};