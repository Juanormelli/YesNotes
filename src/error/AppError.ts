

export class AppError{
    public readonly messages:string;
    public readonly statuscode : number;

    constructor(message: string, statuscode=400){
        this.messages = message;
        this.statuscode = statuscode;
    }

}

