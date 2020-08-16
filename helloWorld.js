"use strict";
exports.__esModule = true;
var a = 0;
var num = undefined;
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var tom = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
var amy = {
    name: 'amy'
};
var fibonacci = [1, 1, 2, 3, 5];
//argument处理
function sum() {
    var args = arguments;
}
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Tom'; }
    return firstName + ' ' + lastName;
}
var tomcat = buildName('Tom', 'Cat');
var cat = buildName(null, 'Cat');
var Days;
(function (Days) {
    Days[Days["Sun"] = 7] = "Sun";
    Days[Days["Mon"] = 8] = "Mon";
    Days[Days["Tue"] = 9] = "Tue";
    Days[Days["Wed"] = 10] = "Wed";
    Days[Days["Thu"] = 11] = "Thu";
    Days[Days["Fri"] = 12] = "Fri";
    Days[Days["Sat"] = "1"] = "Sat";
})(Days || (Days = {}));
;
