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
function GetGreeting() {
    return 'Greetings from TypeScript!! with build task';
}
//https://code.visualstudio.com/docs/languages/typescript
Startup.main();
//# sourceMappingURL=HelloWorld.js.map