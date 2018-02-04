var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var msg;
        msg = GetGreeting(true);
        console.log('printing numeric: ' + msg);
        msg = GetGreeting(false);
        console.log('printing alphabetic: ' + msg);
        return 0;
    };
    return Startup;
}());
function GetGreeting(isNumeric) {
    if (isNumeric)
        return 12345678;
    else
        return 'Greetings from TypeScript!! with build task';
}
//https://code.visualstudio.com/docs/languages/typescript
Startup.main();
