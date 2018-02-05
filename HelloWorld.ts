class Startup {
    public static main(): number {

        let msg :string = GetGreeting(); 
        console.log(msg);
        return 0;
    }
}

function GetGreeting(greeting:string = 'this is default greeting'):string
{
    return greeting;
}
//https://code.visualstudio.com/docs/languages/typescript
Startup.main();