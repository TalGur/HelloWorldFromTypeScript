class Startup {
    public static main(): number {

        let msg :string | number;
        
        msg = GetGreeting(true); 
        console.log('printing numeric: '+ msg);

        msg = GetGreeting(false); 
        console.log('printing alphabetic: '+msg);
        
        return 0;
    }
}

function GetGreeting(isNumeric: boolean, optionalMessage?:string ): string | number
{
    if (isNumeric)
        return 99999;
    else
        return 'Greetings from TypeScript!! (type annoptaion branch!))';
}
//https://code.visualstudio.com/docs/languages/typescript
Startup.main();