export class Error
{
    constructor(public errorCode: number = 0, 
                public errorMessage: string = ""){}

    LogErrorMessage() : void {
        console.error(`Error Code: ${this.errorCode}`);
        console.error(`Error Description: ${this.errorMessage}`);       
    }
}