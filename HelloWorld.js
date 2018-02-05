var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var msg = GetGreeting();
        console.log(msg);
        return 0;
    };
    return Startup;
}());
function GetGreeting(greeting) {
    if (greeting === void 0) { greeting = 'this is default greeting'; }
    return greeting;
}
//https://code.visualstudio.com/docs/languages/typescript
Startup.main();
