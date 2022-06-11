
export class Specialty<T> {
    
    private readonly name: T;

    constructor(name: T){
        this.name = name;
    }

    getName():T{
        return this.name;
    }

}
