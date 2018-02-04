class Startup {
    public static main(): number {

        let msg :string = GetGreeting(); 
        console.log(msg);
        return 0;
    }
}

function GetGreeting()
{
    return 'Greetings from TypeScript!! with build task';
}
//https://code.visualstudio.com/docs/languages/typescript
Startup.main();