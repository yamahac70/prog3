export class ConnectionError extends Error{
    constructor(message){
        super(message)
        this.name="ConnectionError"
    }
}
//extiende errores en clases 
export class NotFoundError extends Error{
    constructor(message){
        super(message)
        this.name="NotFoundError"
    }
}