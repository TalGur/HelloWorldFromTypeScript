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
function GetGreeting(isNumeric, optionalMessage) {
    if (isNumeric)
        return 99999;
    else
        return 'Greetings from TypeScript!! (type annoptaion branch!))';
}
//https://code.visualstudio.com/docs/languages/typescript
Startup.main();
